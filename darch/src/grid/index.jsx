import React from "react";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("grid", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "grid";
    static defaultProps = {};
    static propTypes = {
        spots: React.PropTypes.number
    };

    /** Nested components **/
    static Cell = require("./cell");

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * This function gets all cell children components and
     * adjust it's widths.
     */
    processChildren() {
        let logger = Logger.create("processChildren");
        logger.info("enter");

        let spots = 0;

        // Count cell children
        React.Children.forEach(this.props.children, (component) => {
            if(component.type.displayName == "grid.cell") {
                spots += (component.props.span || 1);
            }
        });

        logger.info("spots count", {spots});

        return React.Children.map(this.props.children, (component, idx) => {
            logger.info(`children map : ${idx}`, {type: component.type.displayName});

            // Strip non Cell component
            if(component.type.displayName != "grid.cell") {return false;}

            // New processed component props
            let props = {};

            // Total cell spots
            props.spots = this.props.spots || spots;

            // Span
            props.span = component.props.span;

            logger.info(`children map : ${idx} : props`, {props});

            // Get children
            props.children = component.props.children;

            // Clone cell with new props
            return lodash.size(props) ?
                React.cloneElement(component, props) :
                component;
        });
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <div className={styles.grid}>
                {this.processChildren()}
            </div>
        );
    }
}
