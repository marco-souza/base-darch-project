import React from "react";
import lodash from "lodash";
import {findDOMNode} from "react-dom";
import {LoggerFactory} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";

let Logger = new LoggerFactory("scroll", {level:"debug"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "scroll";
    static defaultProps = {
        direction: "bottom",
        loadOffset: 100,
        autoScroll: true,
        autoScrollOffset: 0,
        onLoad: () => {},
        loading: false,
        loadingComponent: (
             <div style={{textAlign: "center"}}>
                <i18n.Translate text="_LOADING_" />
            </div>
        )
    };
    static propTypes = {
        direction: React.PropTypes.oneOf(["top","bottom"]),
        loadOffset: React.PropTypes.number,
        autoScroll: React.PropTypes.bool,
        autoScrollOffset: React.PropTypes.number,
        onLoad: React.PropTypes.func,
        loading: React.PropTypes.bool,
        loadingComponent: React.PropTypes.element
    };

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        this.loadCount = 0;
        this.scrollToEndCallCount = 0;
        //this.prevScrollHeight = this.scrollRef.scrollHeight;

        // Load data for the first time.
        this.load({event: "mount"});
    }

    /**
     * LYFECICLE : This function is called when props or
     * state gets changed.
     */
    async componentDidUpdate(prevProps) {
        let logger = Logger.create("componentDidUpdate");
        let count = React.Children.count(this.props.children);
        let prevCount = React.Children.count(prevProps.children);

        logger.info("enter", {count,prevCount});

        if(this.props.id != prevProps.id) {
            logger.info("scroll id changed", {
                id: this.props.id,
                prevId: prevProps.id
            });
            
            try{ 
                await this.load({event: "id:changed"});
                logger.debug("load success");
            }
            catch(error) {
                logger.error("load error");
            }

            // Reset prevY
            this.prevY = this.scrollRef.scrollTop;
        }
        // When children changed, trigger auto scroll if user 
        // is within auto scroll zone.
        else if(count != prevCount) {
            this.scrollToEnd();
        }
    }

    /**
     * This function loads more data into the scene.
     */
    async load(args) {
        let logger = Logger.create("load");
        logger.info("enter", args);

        try {
            let opts = await this.props.onLoad(args);
            let scrollHeight = this.scrollRef.scrollHeight;
            let prevScrollHeight = this.prevScrollHeight;
            let prevY = this.prevY;

            opts = opts||{};

            logger.debug("props onLoad success", {
                opts,
                prevScrollHeight: prevScrollHeight,
                scrollHeight: scrollHeight,
                prevY: prevY,
                y: this.scrollRef.offsetHeight
            });

            if(opts.scrollToEnd) {
                this.scrollToEnd({force: true});
            }
            else if(!lodash.isUndefined(prevScrollHeight)) {
                let pos = scrollHeight - prevScrollHeight + prevY;
                this.scrollTo(pos);
            }
        }
        catch(error) {
            logger.error("props onLoad error", error);
        }
    }

    /**
     * This function scrolls the scroll container to a
     * specified position.
     */
    scrollTo(pos="end", {force=false} = {}) {
        let logger = Logger.create("scrollTo");
        logger.info("enter", {pos, force});

        // Scroll to the end of list.
        if(pos == "end") {
            this.scrollToEnd({force});
        }
        // Scroll to a specified position.
        else if(lodash.isNumber(pos)) {
            this.scrollRef.scrollTop = pos;
        }
    }

    /**
     * This function scrolls the scroll to the end in the
     * specified direction.
     */
    scrollToEnd({force=false} = {}) {
        let logger = Logger.create("scrollToEnd");
        logger.info("enter", {force});

        this.scrollToEndCallCount++;

        let {loadOffset,direction,autoScrollOffset} = this.props;
        let height = this.scrollRef.offsetHeight;
        let scrollHeight = this.scrollRef.scrollHeight;//this.prevScrollHeight;//
        let isWithinAutoScrollZone = false;
        let y = this.scrollRef.scrollTop;
        let offset = scrollHeight - (y + height); // distance to the bottom

        // Scroll has passed loadOffset in specified direction.
        switch(direction) {
            case "top":
                isWithinAutoScrollZone = (y >= autoScrollOffset);

                break;

            case "bottom":
                isWithinAutoScrollZone = (offset <= loadOffset);
                break;
            
            default:
        }

        logger.debug("data", {
            loadOffset, direction, autoScrollOffset,
            height, scrollHeight, isWithinAutoScrollZone,
            y, offset
        });

        // Perform auto scroll.
        if(isWithinAutoScrollZone||force) {
            // We are scrolling, so the edge gonna be reached
            // witch gonna trigger another auto scroll and so
            // on. This prevents auto scroll to trigger a load.
            this.preventLoad = true;

            const end = direction == "bottom" ?
                findDOMNode(this.bottomRef) :
                findDOMNode(this.topRef);

            end.scrollIntoView({behavior: "smooth"});
        }
    }

    /**
     * This function handles scroll event.
     */
    onScroll(evt) {
        let logger = Logger.create("onScroll");

        if(evt.target != this.scrollRef){return;}

        let {loadOffset,direction,loading} = this.props;
        let height = this.scrollRef.offsetHeight;
        let scrollHeight = this.scrollRef.scrollHeight;
        let y = this.scrollRef.scrollTop;
        let reachedEdge = false;
        let prevY = this.prevY;
        let offset = scrollHeight - (y + height);
        let prevOffset = scrollHeight - (prevY + height);

        // Scroll has passed loadOffset in specified direction.
        switch(direction) {
            case "bottom":
                reachedEdge = ((prevY > loadOffset)
                    && (y <= loadOffset));
                break;

            case "top":
                reachedEdge = ((prevOffset > loadOffset) 
                    && (offset <= loadOffset));
                break;
            
            default:
        }

        // Let's load more items into scroll.
        if(this.preventLoad) {
            this.preventLoad = false;
        }
        else if(reachedEdge && !loading) {
            this.load({event: "edge:reached"});
        }

        logger.debug("data", {
            y,
            prevY,
            scrollHeight,
            height,
            offset,
            prevOffset,
            reachedEdge,
            loadOffset
        });

        this.prevY = y;
        this.prevScrollHeight = this.scrollRef.scrollHeight;
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let {loading,loadingComponent,direction} = this.props;

        return (
            <div className={styles.scroll}
                onScroll={this.onScroll}
                ref={(ref) => { this.scrollRef = ref; }}>
                <div ref={(ref) => { this.topRef = ref; }}></div>
                { loading && direction == "bottom" ? loadingComponent : null}
                {this.props.children}
                { loading && direction == "top" ? loadingComponent : null}
                <div ref={(ref) => { this.bottomRef = ref; }}></div>
            </div>
        );
    }
}
