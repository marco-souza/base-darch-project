import React from "react";
import {LoggerFactory,Style} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("progress.bar", {level:"debug"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "progress.bar";

    static defaultProps = {
        rate: 0,
        strokeWidth: 0.5,
        scale: 1,
        animateOnMount: true,
        strokeColor: "#3e98c7",
        strokeLinecap: "round",
        trailColor: "#dedede"
    };

    static propTypes = {
        rate: React.PropTypes.number.isRequired,
        strokeWidth: React.PropTypes.number,
        widthScale: React.PropTypes.number,
        heightScale: React.PropTypes.number,
        animateOnMount: React.PropTypes.bool,
        strokeColor: React.PropTypes.string,
        strokeLinecap: React.PropTypes.oneOf([
            "butt", "round", "square"
        ]),
        trailColor: React.PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            rate: props.rate
        };
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        if (this.props.animateOnMount) {
            this.animationTimer = setTimeout(() => {
                this.requestAnimationFrame = window.requestAnimationFrame(() => {
                    this.setState({
                        rate: this.props.rate
                    });
                });
            }, 0);
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.rate != prevProps.rate) {
            this.setState({rate: this.props.rate});
        }
    }

    componentWillUnmount() {
        clearTimeout(this.animationTimer);
        window.cancelAnimationFrame(this.requestAnimationFrame);
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let logger = Logger.create("render");
        logger.info("enter");

        let {scale,strokeLinecap} = this.props;
        let {rate} = this.state;
        let size = Style.getSize(scale);
        let strokeWidth = Style.getSize(this.props.strokeWidth);
        let linecap = strokeLinecap!="butt"?strokeWidth/2:0;
        let left = linecap;
        let trailRight = size-linecap;
        let pathRight = size*(rate/100)-linecap;

        let sizeWithUnit = Style.setUnit(size);
        let dashOffsetWithunit = Style.setUnit(size*(100-rate)/100);

        logger.debug("data", {
            rate,size,strokeWidth,linecap,left,trailRight,pathRight,sizeWithUnit,dashOffsetWithunit
        });

        let trailStyle = {
            stroke: this.props.trailColor,
            strokeLinecap: this.props.strokeLinecap
        };

        let pathStyle = {
            strokeDasharray: `${sizeWithUnit}`,
            strokeDashoffset: `${dashOffsetWithunit}`,
            stroke: this.props.strokeColor,
            strokeLinecap: this.props.strokeLinecap
        };

        return (
            <svg className={styles.progress}
                width={size}
                height={strokeWidth}>
                <path className={styles.trail}
                    d={`M ${left},${strokeWidth/2} L ${trailRight},${strokeWidth/2}`}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={trailStyle}/>

                <path className={styles.path}
                    d={`M ${left},${strokeWidth/2} L ${pathRight},${strokeWidth/2}`}
                    strokeWidth={strokeWidth}
                    fillOpacity={0}
                    style={pathStyle}
                />
            </svg>
        );
    }
}
