import React from "react";
import classNames from "classnames";
//import {findDOMNode} from "react-dom";
//import ReactDOMServer from "react-dom/server";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";
//import hljs from "highlightjs";
//import "highlightjs/styles/atom-one-dark";
import Prism from "prismjs";
import "prism-themes/themes/prism-atom-dark";

let Logger = new LoggerFactory("code", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "code";

    static defaultProps = {
        lang: "text"
    };

    static propTypes = {
        lang: React.PropTypes.string
    };

    static loadLanguage(lang) {
        require(`prismjs/components/prism-${lang}`);
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
     * This function is responsible for generating the component's view.
     */
    render() {
        let {lang} = this.props;

        return (
            <pre className={classNames([
                styles.pre,
                `language-${lang}`
            ])}>
                <code className={classNames([
                    "prism",
                    styles.code
                ])}
                    ref={(ref) => { this.codeBlockRef = ref; }}
                    dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                            this.props.value,
                            Prism.languages[lang]
                        )
                    }}>
                </code>
            </pre>
        );
    }
}