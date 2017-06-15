import React from "react";
import {LoggerFactory,Style} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("progress.radial", {level:"debug"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "progress.radial";

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
        scale: React.PropTypes.number,
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
            rate: props.animateOnMount ? 0 : props.rate
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

        let {scale} = this.props;
        let {rate} = this.state;
        let size = Style.getSize(scale);
        let halfSize = size/2;
        let width = Math.round(size/5);

        let radius = (size-width)/2;
        let circumference = 2*Math.PI*radius;
        let circumferenceWithUnit = Style.setUnit(circumference);
        let dashOffsetWithunit = Style.setUnit(((100 - rate)/100) * circumference);

        logger.debug("data", {
            size, width, radius, circumference,
            circumferenceWithUnit, dashOffsetWithunit
        });

        let pathDescription = `
            M ${halfSize},${halfSize} m 0,-${radius}
            a ${radius},${radius} 0 1 1 0,${2 * radius}
            a ${radius},${radius} 0 1 1 0,-${2 * radius}
        `;

        let trailStyle = {
            stroke: this.props.trailColor
        };

        let pathStyle = {
            strokeDasharray: `${circumferenceWithUnit} ${circumferenceWithUnit}`,
            strokeDashoffset: `${dashOffsetWithunit}`,
            stroke: this.props.strokeColor,
            strokeLinecap: this.props.strokeLinecap
        };

        return (
            <svg className={styles.progress}
                width={size} height={size}>

                <path className={styles.trail}
                    d={pathDescription}
                    strokeWidth={width}
                    fillOpacity={0}
                    style={trailStyle}/>

                <path className={styles.path}
                    d={pathDescription}
                    strokeWidth={width}
                    fillOpacity={0}
                    style={pathStyle}
                />
            </svg>
        );
    }
}
