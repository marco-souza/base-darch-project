import React from "react";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("bar.toggle", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar.toggle";
    static defaultProps = {
        open: false
    };
    static propTypes = {
        open: React.PropTypes.bool
    };

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * This function handles toggle click.
     */
    onClick() {
        let logger = Logger.create("onClick");
        logger.info("enter", {hasBar: !!this.props.bar});

        if(this.props.bar) {
            this.props.bar.toggle();
        }
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let openComponent = this.props.openComponent || (
            <div className={styles.toggleBlock}>
                <span className={styles.toggleLine}></span>
                <span className={styles.toggleLine}></span>
                <span className={styles.toggleLine}></span>
            </div>
        );

        let closeComponent = this.props.closeComponent || openComponent;

        return (
            <ul className={styles.toggleMenu}>
                <li className={styles.toggleItem}>
                    <a onClick={this.onClick}>
                        {this.props.open ? (
                            closeComponent
                        ):(
                            openComponent
                        )}
                    </a>
                </li>
            </ul>
        );
    }
}
