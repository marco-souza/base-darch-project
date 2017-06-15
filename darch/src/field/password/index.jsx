import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import i18n from "darch/src/i18n";
import Progress from "darch/src/progress";
import styles from "./styles";

let Logger = new LoggerFactory("field.password", {level: "debug"});

/**
 * Redux map state to props function.
 *
 * @param {object} state
 * @param {object} ownProps
 */
function mapStateToProps(state) {
    return {
        spec: state.i18n.spec
    };
}

/**
 * Redux dispatch to props map.
 */
let mapDispatchToProps = {

};

/**
 * Main component class.
 */
class Component extends React.Component {
    /** React properties **/
    static displayName = "field.password";
    static defaultProps = {
        value: "",
        allowUnmask: true,
        unmaskLabel: "UNMASK",
        maskLabel: "MASK",
        showStrength: true,
        scale: 1,
        maskChar: "•",
        maskTimeout: 1000
    };
    static propTypes = {
        value: React.PropTypes.string,
        allowUnmask: React.PropTypes.bool,
        unmaskLabel: React.PropTypes.string,
        maskLabel: React.PropTypes.string,
        showStrength: React.PropTypes.bool,
        scale: React.PropTypes.number,
        maskChar: React.PropTypes.string,
        maskTimeout: React.PropTypes.number,
        evalStrength: React.PropTypes.func
    };

    /** Instance properties **/
    state = {
        inputValue: "",
        unmasked: false,
        strength: 0
    }

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    componentDidUpdate(prevProps) {
        if(this.state.unmasked
        && this.props.value != prevProps.value
        && this.selection) {
            let pos = this.selection.start+1;

            if((this.isDelete||this.isBackspace)
            &&this.selection.originalOffset==0) {
                pos = this.selection.start;
            }

            this.isDelete = false;
            this.isBackspace = false;

            // Force selection range right position.
            this.inputRef.setSelectionRange(pos,pos);
        }
    }

    /**
     * This function handles change in masked input.
     */
    onInputChange(evt) {
        let logger = Logger.create("onChange");
        logger.info("enter", {
            value: evt.target.value
        });

        let {value,maskChar} = this.props;
        let {unmasked} = this.state;
        let valueChars = value.split("");
        let oldInputValue = unmasked?this.props.value:this.state.inputValue;
        let oldInputChars = oldInputValue.split("");
        let newInputValue = evt.target.value;
        let newInputChars = newInputValue.split("");

        // Clear maskTimer, because we gonna mask right now.
        clearTimeout(this.maskTimer);

        // Dead keys
        if(!this.selection) {
            if(unmasked) {return this.props.onChange(evt.target.value);}

            return this.setState({inputValue: evt.target.value});
        }
        // First of all, deal with removing chars.
        else if(this.selection.start != this.selection.end) {
            oldInputChars.splice(
                this.selection.start,
                this.selection.end-this.selection.start
            );

            valueChars.splice(
                this.selection.start,
                this.selection.end-this.selection.start
            );

            logger.debug("selection is range", {oldInputChars, valueChars});
        }

        // Mask all non mask chars of new input that are also
        // in old input.
        for(let j=0, i = 0; i < newInputChars.length; i++) {
            if(newInputChars[i] == maskChar) { j++; continue; }

            // old char
            if(newInputChars[i] == oldInputChars[j]) {
                newInputChars[i] = maskChar; j++;
            }
            // new char : should be added to valueChars.
            else {
                valueChars.splice(i, 0, newInputChars[i]);
            }
        }

        logger.debug("data", {
            selection: this.selection,
            valueChars, oldInputChars, newInputChars
        });

        let newValue = valueChars.join("");

        this.setState({
            inputValue: newInputChars.join(""),
            strength: this.evalStrength(newValue)
        }, () => {
            this.props.onChange(newValue);

            let pos = this.selection.start+1;

            if((this.isDelete||this.isBackspace)
            &&this.selection.originalOffset==0) {
                pos = this.selection.start;
            }

            // Reset values.
            this.isDelete = false;
            this.isBackspace = false;

            // Force selection range right position.
            this.inputRef.setSelectionRange(pos,pos);

            // Mask everything later
            this.maskTimer = setTimeout(() => {
                let {inputValue} = this.state;
                inputValue = inputValue.replace(
                    new RegExp(`[^${maskChar}]`, "g"),
                    maskChar
                );

                this.setState({inputValue}, () => {
                    // @TODO : Correct a bug with updating position when user
                    // has already moved the cursor between insertion moment
                    // and this remask moment.

                    // Force selection range right position.
                    this.inputRef.setSelectionRange(pos,pos);
                });
            }, this.props.maskTimeout);
        });
    }

    onInputKeyDown(evt) {
        let logger = Logger.create("onKeyDown");
        let {keyCode,key,keyIdentifier} = evt;

        logger.info("enter", {keyCode, key, keyIdentifier});

        // Check for dead key (Chrome and Firefox set key or keyIdentifier
        // as "Dead", while Safari set it as "Unidentified"... Fuck IE)
        if(["Dead","Unidentified"].indexOf(key||keyIdentifier) >= 0) {
            logger.debug("dead key");
            this.selection = null;
            return;
        }

        this.selection = {
            start: this.inputRef.selectionStart,
            end: this.inputRef.selectionEnd,
            originalOffset: (this.inputRef.selectionEnd-this.inputRef.selectionStart)
        };

        switch (keyCode) {
            // Backspace
            case 8:
                this.selection.start -= 1;
                this.isBackspace = true;
                break;
            // Delete
            case 46:
                this.selection.end += 1;
                this.isDelete = true;
                break;
            default:
        }
    }

    evalStrength(password) {
        let logger = Logger.create("evalStrength");
        logger.info("enter", {password});

        let strength = 0;

        if(this.props.evalStrength) {
            strength = this.props.evalStrength(password);
        }
        else {
            let points = 0;

            if((/[a-z]/g).test(password)){points++;}
            if((/[A-Z]/g).test(password)){points++;}
            if((/[0-9]/g).test(password)){points++;}
            if((/[$-/:-?{-~!"^_`\[\]]/g).test(password)){points++;}

            strength = (points/4)*100;
        }

        logger.debug("leave", {strength});

        return strength;
    }

    toggleMask() {
        let newState = {unmasked: !this.state.unmasked};

        if(!newState.unmasked) {
            let inputChars = Array(
                (this.props.value||"").length
            ).fill(this.props.maskChar);

            newState.inputValue = inputChars.join("");
        }

        this.setState(newState, () => {
            // Focus input again.
            this.inputRef.focus();
        });
    }

    onControlMouseDown() {
        this.inputRef.focus();
    }

    onInputFocus() {
        this.setState({isInputFocused: true}, () => {
            this.props.onFocus();
        });
    }

    onInputBlur() {
        this.setState({isInputFocused: false}, () => {
            this.props.onBlur();
        });
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let {spec,placeholder,scale,isValid,unmaskLabel,maskLabel} = this.props;
        let {isInputFocused,unmasked} = this.state;

        let controlClasses = [
            styles.control,
            !isValid?styles.invalid:"",
            isInputFocused?styles.active:""
        ];

        return (
            <div onMouseDown={this.onControlMouseDown}
                className={classNames(controlClasses)} style={{fontSize: `${scale}em`}}>

                <div className={styles.inputZone}>
                    <input {...{
                        value: unmasked?this.props.value:this.state.inputValue,
                        onKeyDown: this.onInputKeyDown,
                        onChange: this.onInputChange,
                        onBlur: this.onInputBlur,
                        onFocus: this.onInputFocus,
                        placeholder: i18n.utils.translate({spec, text:placeholder})
                    }} ref={(ref) => {this.inputRef = ref;}} />
                </div>

                {this.props.showStrength?(
                    <div className={styles.strengthZone}>
                        <div className={styles.container}>
                            <Progress.Bar scale={3}
                                strokeWidth={0.5}
                                rate={this.state.strength}
                                strokeColor="#26A65B"
                                strokeLinecap="square"/>
                        </div>
                    </div>
                ): null}

                {this.props.allowUnmask?(
                    <div className={styles.unmaskButtonZone}>
                        <div className={styles.unmaskButton} onClick={this.toggleMask}>
                            <i18n.Translate text={unmasked?maskLabel:unmaskLabel} />
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
