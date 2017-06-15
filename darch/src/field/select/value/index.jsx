import React from "react";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";
//import {OptionType} from "../types";
import i18n from "darch/src/i18n";

let Logger = new LoggerFactory("select.value", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "select.value";
    static defaultProps = {
        multi: false,
        onRemove: ()=>{}
    };
    static propTypes = {
        multi: React.PropTypes.bool,
        onRemove: React.PropTypes.func
    };

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let logger = Logger.create("render");
        logger.info("enter", {option: this.props.option});

        if(!this.props.option){return null;}

        let {option,multi} = this.props;
        option = lodash.isString(option)?{value:option,label:option}:option;
        let {value,label} = option;

        return multi ? (
            <span role="option" aria-selected="true" key={value} className={styles.valueMulti}>
                <span className={styles.valueMultiRemove} onMouseDown={(evt) => {
                    evt.stopPropagation();
                    evt.preventDefault();
                    this.props.onRemove(value);
                }} aria-hidden="true">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAB+UlEQVR4nO3dO1LDQBCE4SlOhI+EI27gEIdcGkxgqwpkyeixu9O9/r8qAiJ3z1g8ZKkUAQAAAAAAADyH1+wAgtJmco6I74h4zwog6C0iviLis/ULnyPicvtiKVfDMoa5NFvKYfTCl9v3x1YBBB1jeiaHVgHG74ZnPlJkZiETJJHcDOQCNSTbXTZYRfKd5QMWZNPVJugOdh3tAq9g2802+AP2newL/NJNlx6K9NDhD+dCztkfcizmmHkVp4JOWXdxKOqQsSjlwsrZqlIsrpipKaUBKGVJpTAIhQxSMgfCMmZkDIZl/KPlgFjGQi0GxTJWqjkwlrFRjcGxjJ1KDpBlFFJikCyjsD0DZRmVbBksy6hszYBZRiNLBs0yGns0cJaRZO5eDO5ZSTR1NHBkJJtbivUyXrIDoA/8yBLCL3Uh/NkrhH8MhXDqRAgnF4Vw+l0IH1AJ4SNcIVzkIITLgIRwoZwQLiUVwsXWQrgdQYjCQBQySFAahFKWFIoDUMzUhHJx5WxVOBR2yFiEU1GnrJs4FnTMvIhzMefsk3oo1EOHiOioSHTQxb7ABNtOtsEXsOtmF3gDm442QQuQ7yofsALZzrLBGpDrLhcogcwMZIIISJ8FDwW7l/5QsFNwZIyNj5SP1gFOwTLGhqU0X8aAR6/eYyYAAAAAAAB4Cj9F9iU49afdsgAAAABJRU5ErkJggg==
" height="1em" width="auto" />
                    <span className="icon-delete2"></span>
                </span>
                <div className={styles.valueMultiBody}>
                    <i18n.Translate text={label}/>
                </div>
            </span>
        ) : (
            <div className={styles.valueSingle}>
                <i18n.Translate text={label}/>
            </div>
        );
    }
}
