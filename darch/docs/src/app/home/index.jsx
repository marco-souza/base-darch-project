import React from "react";
import {Link} from "react-router";
import {LoggerFactory} from "darch/src/utils";
import Container from "darch/src/container";
import Grid from "darch/src/grid";
import Bar from "darch/src/bar";
import i18n from "darch/src/i18n";
import Code from "darch/src/code";
import Label from "darch/src/label";
import Section from "darch/src/section";
import Form from "darch/src/form";
import Field from "darch/src/field";
import Button from "darch/src/button";
import Callout from "darch/src/callout";
import Text from "darch/src/text";
import Spinner from "darch/src/spinner";
import lodash from "lodash";
import logoIcon from "assets/images/logo_icon.png";
import styles from "./styles";

let Logger = new LoggerFactory("app.home");

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "app.home";
    static defaultProps = {};
    static propTypes = {};

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            selectValue: []
        };

        this.originalOptions = [];

        this.actionOption = {
            value: "show_modal_action",
            label: "_SHOW_MODAL_ACTION_LABEL_",
            action: () => {
                this.setState({isModalOpen: true});
            }
        };

        // Load code languages
        Code.loadLanguage("jsx");
        Code.loadLanguage("bash");

        // Set initial options state.
        for (let i of Array(50).keys()) {
            this.originalOptions.push({
                value: `val_${i}`,
                label: `i am num ${i}`
            });
        }

        this.originalOptions.push({
            value: "val_100",
            label: "very big text to prove some point in relativism and eferism of things built with love in the heart"
        });
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        this.multiOptions = true;
    }

    /**
     * This function load options based on search query.
     */
    loadOptions(searchValue) {
        let logger = Logger.create("loadOptions");
        logger.info("enter", {searchValue});

        this.setState({loadingOptions: true});

        setTimeout(() => {
            let originalOptions = this.originalOptions;

            // Filter out based on search value.
            let options = lodash.filter(originalOptions, (option) => {
                if(searchValue && option.label.indexOf(searchValue) < 0) {
                    return false;
                }

                return true;
            });

            //logger.debug("loaded options", {options, originalOptions});

            // First option is an action that shows the modal.
            options.shift(this.actionOption);

            this.setState({
                options: options,
                loadingOptions: false
            });
        }, 2000);
    }

    onMenuClose() {
        this.setState({options: null});
    }

    onCreateOption(value) {
        let logger = Logger.create("onCreateOption");
        let options = this.state.options.concat([{
            value: value,
            label: value
        }]);

        logger.info("enter", {value, options});

        this.setState({
            options: options
        });
    }

    /**
     * This function renders the usage section.
     */
    renderUsageSection() {
        return (
            <Section>
                <h3><i18n.Translate text="_SECTION_USAGE_TITLE_"/></h3>

                <div><i18n.Translate text="_SECTION_USAGE_TEXT_1_"/></div>            
                <div className={styles.codeContainer}>
                    <Code lang="bash" value="npm install --save darch" />
                </div>

                <div><i18n.Translate text="_SECTION_USAGE_TEXT_2_"/></div>
                <div className={styles.codeContainer}>
                    <Code lang="js" value={
`import Form from "darch/lib/form";

// For old school guys, you can do:
// let Form = require("darch/lib/form");`
                    }/>
                </div>

                <div><i18n.Translate text="_SECTION_USAGE_TEXT_3_"/></div>
                <div className={styles.codeContainer}>
                    <Code lang="js" value={
`import {Form,Field,Container} from "darch";

// For old school guys, you have to do:
// let {Form,Field,Container} = require("darch");

// And for ES5 prehistoric guys:
// var Reakit = require("darch");
// var Form = Reakit.Form;`
                    }/>
                </div>

                <div className={styles.calloutContainer}>
                    <Callout color="warning" title="_SECTION_USAGE_STYLES_CALLOUT_TITLE_">
                        <i18n.Translate text="_SECTION_USAGE_STYLES_CALLOUT_TEXT_"/>
                    </Callout>
                </div>

            </Section>
        );
    }

    /**
     * This function renders the grid section.
     */
    renderGridSection() {
        return (
            <Section>
                <h2 className="headline">Grid <Label scale={0.8} color="moody"><i18n.Translate text="_MODULE_LABEL_TEXT_" /></Label></h2>
                <p><i18n.Translate text="_SECTION_GRID_INTRO_"/></p>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                    <Code lang="jsx"
                        value={
`<Grid>
    <Grid.Cell>
        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>
            One
        </div>
    </Grid.Cell>

    <Grid.Cell span={2}>
        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>
            Two
        </div>
    </Grid.Cell>

    <Grid.Cell>
        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>
            Three
        </div>
    </Grid.Cell>
</Grid>`
                    }/>
                </Section>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>
                    <div className={styles.resultBox}>
                        <Grid>
                            <Grid.Cell>
                                <div className={styles.box}>
                                    One
                                </div>
                            </Grid.Cell>

                            <Grid.Cell span={2}>
                                <div className={styles.box}>
                                    Two
                                </div>
                            </Grid.Cell>

                            <Grid.Cell>
                                <div className={styles.box}>
                                    Three
                                </div>
                            </Grid.Cell>
                        </Grid>
                    </div>
                </Section>

                {/** GRID COMPONENT **/}
                <Section>
                    <h3><code>Grid</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>spots</td>
                                        <td>number</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_GRID_COMP_GRID_PROP_SPOTS_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>

                {/** GRID CELL COMPONENT **/}
                <Section>
                    <h3><code>Grid.Cell</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>span</td>
                                        <td>number</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_GRID_COMP_CELL_PROP_SPAN_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>
            </Section>
        );
    }

    /**
     * This function renders the bar section.
     */
    renderBarSection() {
        return (
            <Section>
                <h2 className="headline">Bar <Label scale={0.8} color="moody"><i18n.Translate text="_MODULE_LABEL_TEXT_" /></Label></h2>
                <div><i18n.Translate text="_SECTION_BAR_INTRO_"/></div>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                    <Code lang="jsx"
                        value={
`<Bar fixedOnTop={false} open={this.state.barOpen} onToggle={() => { this.setState({barOpen: !this.state.barOpen}); }}>
    <Bar.Container withBottomLine={true}>
        <Bar.Header>
            <Bar.Menu togglable={false}>
                <Bar.Item>
                    <Link to="/a">
                        <img className={styles.logo} src={logoIcon} />
                    </Link>
                </Bar.Item>
            </Bar.Menu>

            <Bar.Toggle
                openComponent={<span className="icon-menu"></span>}
                closeComponent={<span className="icon-delete"></span>}>
            </Bar.Toggle>
        </Bar.Header>
        <Bar.Body>
            <Bar.Menu>
                <Bar.Item>
                    <Link to="/a">Home</Link>
                </Bar.Item>
            </Bar.Menu>
        </Bar.Body>
    </Bar.Container>
</Bar>`
                    }/>
                </Section>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>
                    <div className={styles.resultBox}>
                        <i18n.Translate text="_SECTION_BAR_CODE_EXAMPLE_RESULT_TEXT_" />
                    </div>
                </Section>

                {/** BAR COMPONENT **/}
                <Section>                    
                    <h3><code>Bar</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>fixedOnTop</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_BAR_PROP_FIXEDONTOP_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>open</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_BAR_PROP_OPEN_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>onToggle</td>
                                        <td>func</td>
                                        <td>noop</td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_BAR_PROP_ONTOGGLE_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>

                {/** BAR.CONTAINER COMPONENT **/}
                <Section>
                    <h3><code>Bar.Container</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_BAR_COMP_CONTAINER_INTRO_" /></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>withBottomLine</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_CONTAINER_PROP_WITHBOTTOMLINE_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>

                {/** BAR.HEADER COMPONENT **/}
                <Section>
                    <h3><code>Bar.Header</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>
                    <Section>
                        <div><i18n.Translate text="_SECTION_BAR_COMP_HEADER_INTRO_" /></div>
                    </Section>
                </Section>

                {/** BAR.BODY COMPONENT **/}
                <Section>
                    <h3><code>Bar.Body</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>
                    <Section>
                        <div><i18n.Translate text="_SECTION_BAR_COMP_BODY_INTRO_" /></div>
                    </Section>
                </Section>

                {/** BAR.MENU COMPONENT **/}
                <Section>
                    <h3><code>Bar.Menu</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>togglable</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_MENU_PROP_TOGGLABLE_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>

                {/** BAR.ITEM COMPONENT **/}
                <Section>
                    <h3><code>Bar.Item</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>
                    <div><i18n.Translate text="_SECTION_BAR_COMP_ITEM_INTRO_" /></div>
                </Section>

                {/** BAR.TOGGLE COMPONENT **/}
                <Section>
                    <h3><code>Bar.Toggle</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_BAR_COMP_TOGGLE_INTRO_" /></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>openComponent</td>
                                        <td>element</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_TOGGLE_PROP_OPENCOMPONENT_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>closeComponent</td>
                                        <td>element</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_BAR_COMP_TOGGLE_PROP_CLOSECOMPONENT_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>
            </Section>
        );
    }

    /**
     * This function renders the form section.
     */
    renderFormSection() {
        return (
            <Section>
                <h2 className="headline">Form <Label scale={0.8} color="moody"><i18n.Translate text="_MODULE_LABEL_TEXT_" /></Label></h2>
                <div><i18n.Translate text="_SECTION_FORM_INTRO_"/></div>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                    <Code lang="jsx"
                        value={
`<Form loading={this.state.formLoading}
onSubmit={(data) => {
    this.setState({formLoading: true});

    setTimeout(() => {
        this.setState({formLoading: false});
    }, 5000);
}}>
    <Field.Section>
        <Text scale={0.8}>
            <i18n.Translate text="_EMAIL_FIELD_LABEL_" />
        </Text>
        <Field.Text
            name="test"
            placeholder="_EMAIL_FIELD_PLACEHOLDER_"
            scale={1.5}
            validators="$required|$email"/>
        <Field.Error
            for="test"
            validator="$required"
            message="_FIELD_ERROR_REQUIRED_"/>
        <Field.Error
            for="test"
            validator="$email"
            message="_FIELD_ERROR_EMAIL_"/>
    </Field.Section>

    <Field.Section>
        <div>
            <Button type="submit" scale={1.5}>
                <i18n.Translate text="_SEND_" />
            </Button>
        </div>
    </Field.Section>
</Form>`
                    }/>
                </Section>

                <Section>
                    <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>

                    <div className={styles.resultBox}>
                        <Form loading={this.state.formLoading}
                        onSubmit={() => {
                            this.setState({formLoading: true});

                            setTimeout(() => {
                                this.setState({formLoading: false});
                            }, 5000);
                        }}>
                            <Field.Section>
                                <Text scale={0.8}>
                                    <i18n.Translate text="_EMAIL_FIELD_LABEL_" />
                                </Text>
                                <Field.Text
                                    name="test"
                                    placeholder="_EMAIL_FIELD_PLACEHOLDER_"
                                    scale={1.5}
                                    validators="$required|$email"/>
                                <Field.Error
                                    for="test"
                                    validator="$required"
                                    message="_FIELD_ERROR_REQUIRED_"/>
                                <Field.Error
                                    for="test"
                                    validator="$email"
                                    message="_FIELD_ERROR_EMAIL_"/>
                            </Field.Section>

                            <Field.Section>
                                <div>
                                    <Button type="submit" scale={1.2}>
                                        <i18n.Translate text="_SEND_" />
                                    </Button>
                                </div>
                            </Field.Section>
                        </Form>
                    </div>
                </Section>

                <Section>
                    <Callout title="_NOTE_">
                        <i18n.Translate text="_SECTION_FORM_NOTE_CALLOUT_TEXT_" />
                    </Callout>
                </Section>

                {/** Form component **/}
                <Section>
                    <h3><code>Form</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>loading</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_LOADING_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>showErrorsOn</td>
                                        <td>string</td>
                                        <td>blur</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_SHOWERRORSON_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>clearErrorOnBecomeValid</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_CLEARERRORONBECOMEVALID_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>disableSubmitButtonOnErrors</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONERRORS_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>disableSubmitButtonOnValidating</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONVALIDATING_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>onSubmit</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_ONSUBMIT_DESCRIPTION_" /></td>
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </Section>
                </Section>
            </Section>
        );
    }

    /**
     * This function renders the field section.
     */
    renderFieldSection() {
        return (
            <Section>
                <h2 className="headline">Field <Label scale={0.8} color="moody"><i18n.Translate text="_MODULE_LABEL_TEXT_" /></Label></h2>
                <div><i18n.Translate text="_SECTION_FIELD_INTRO_"/></div>

                <div className={styles.calloutContainer}>
                    <Callout color="danger" title="_SECTION_FIELD_NAME_WARNING_CALLOUT_TITLE_">
                        <i18n.Translate text="_SECTION_FIELD_NAME_WARNING_CALLOUT_TEXT_" />
                    </Callout>
                </div>

                {/** Field.Base **/}
                <Section>
                    <h3><code>Field.Base</code> <Label scale={0.8} color="stable"><i18n.Translate text="_CONTAINER_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_FIELD_COMP_BASE_INTRO_"/></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>validators</td>
                                        <td>string, array</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_BASE_PROP_VALIDATORS_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section>
                        <h4><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_TITLE_"/></h4>
                        <Section>
                            <div><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_INTRO_"/></div>

                            <div className={styles.tableContainer}>
                                <table className={styles.defaultValidatorsTable}>
                                    <thead>
                                        <tr>
                                            <th><i18n.Translate text="_DEFAULT_VALIDATOR_TABLE_NAME_TH_" /></th>
                                            <th><i18n.Translate text="_DEFAULT_VALIDATOR_TABLE_OPTS_TH_" /></th>
                                            <th><i18n.Translate text="_DEFAULT_VALIDATOR_TABLE_DESCRIPTION_TH_" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$required</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_REQUIRED_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$email</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_EMAIL_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$alphanumeric</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_ALPHANUMERIC_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$lowercase</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_LOWERCASE_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$uppercase</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_UPPERCASE_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$digits</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_DIGITS_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$domain</td>
                                            <td></td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_DOMAIN_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>$equal</td>
                                            <td>opt_1</td>
                                            <td><i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_EQUAL_DESCRIPTION_" /></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className={styles.calloutContainer}>
                                    <Callout color="moody" title="_SECTION_DEFAULT_VALIDATORS_REGISTER_CALLOUT_TITLE_">
                                        <i18n.Translate text="_SECTION_DEFAULT_VALIDATORS_REGISTER_CALLOUT_TEXT_" />
                                    </Callout>
                                </div>
                                
                            </div>
                        </Section>
                    </Section>

                    <Section>
                        <h4><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_TITLE_"/></h4>
                        <Section>
                            <div><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_INTRO_"/></div>

                            <div className={styles.tableContainer}>
                                <table className={styles.customValidatorsTable}>
                                    <thead>
                                        <tr>
                                            <th><i18n.Translate text="_CUSTOM_VALIDATOR_TABLE_KEY_TH_" /></th>
                                            <th><i18n.Translate text="_CUSTOM_VALIDATOR_TABLE_TYPE_TH_" /></th>
                                            <th><i18n.Translate text="_CUSTOM_VALIDATOR_TABLE_DESCRIPTION_TH_" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>name</td>
                                            <td>string</td>
                                            <td><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_KEY_NAME_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>watch</td>
                                            <td>string,number,array</td>
                                            <td><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_KEY_WATCH_DESCRIPTION_" /></td>
                                        </tr>

                                        <tr>
                                            <td>on</td>
                                            <td>string</td>
                                            <td><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_KEY_ON_DESCRIPTION_" /></td>
                                        </tr>                                        

                                        <tr>
                                            <td>validate</td>
                                            <td>funct</td>
                                            <td><i18n.Translate text="_SECTION_CUSTOM_VALIDATORS_KEY_VALIDATE_DESCRIPTION_" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section>
                            <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                            <Code lang="jsx"
                                value={
`<Field.Section>                         
    <Field.Text
        name="nickName"
        value="test"
        placeholder="_NICKNAME_FIELD_PLACEHOLDER_"
        scale={1.5}
        preventValidateOnMount={false}
        validators={["$required", {
            name: "chuck_or_god",
            on: "blur",
            validate: (value, context) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(
                            value == "chucknorris" || context.values.god
                        );
                    }, 5000);
                });
            }
        }]}/>
</Field.Section>`
                            }/>
                        </Section>
                    </Section>
                </Section>

                {/** Field.Error component **/}
                <Section>
                    <h3><code>Field.Error</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_FIELD_COMP_ERROR_INTRO_"/></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>for</td>
                                        <td>string</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_ERROR_PROP_FOR_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>validator</td>
                                        <td>string</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_ERROR_PROP_VALIDATOR_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>message</td>
                                        <td>string</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_ERROR_PROP_MESSAGE_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                        <Code lang="jsx"
                            value={
`<Field.Section>
    <Text scale={0.8}>
        <i18n.Translate text="_EMAIL_FIELD_LABEL_" />
    </Text>
    <Field.Text
        name="test"
        placeholder="_EMAIL_FIELD_PLACEHOLDER_"
        scale={1.5}
        validators="$required|$email"/>
    <Field.Error
        for="test"
        validator="$required"
        message="_FIELD_ERROR_REQUIRED_"/>
    <Field.Error
        for="test"
        validator="$email"
        message="_FIELD_ERROR_EMAIL_"/>
</Field.Section>`
                        }/>
                    </Section>
                </Section>

                {/** Field.Text component **/}
                <Section>
                    <h3><code>Field.Text</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_FIELD_COMP_TEXT_INTRO_"/></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>loading</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_LOADING_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>showErrorsOn</td>
                                        <td>string</td>
                                        <td>blur</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_SHOWERRORSON_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>clearErrorOnBecomeValid</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_CLEARERRORONBECOMEVALID_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>disableSubmitButtonOnErrors</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONERRORS_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>disableSubmitButtonOnValidating</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONVALIDATING_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>onSubmit</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FORM_COMP_FORM_PROP_ONSUBMIT_DESCRIPTION_" /></td>
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                        <Code lang="jsx"
                            value={
`<Form loading={this.state.formLoading}
onSubmit={(data) => {
    this.setState({formLoading: true});

    setTimeout(() => {
        this.setState({formLoading: false});
    }, 5000);
}}>
    <Field.Section>
        <Text scale={0.8}>
            <i18n.Translate text="_EMAIL_FIELD_LABEL_" />
        </Text>
        <Field.Text
            name="test"
            placeholder="_EMAIL_FIELD_PLACEHOLDER_"
            scale={1.5}
            validators="$required|$email"/>
        <Field.Error
            for="test"
            validator="$required"
            message="_FIELD_ERROR_REQUIRED_"/>
        <Field.Error
            for="test"
            validator="$email"
            message="_FIELD_ERROR_EMAIL_"/>
    </Field.Section>

    <Field.Section>
        <div>
            <Button type="submit" scale={1.5}>
                <i18n.Translate text="_SEND_" />
            </Button>
        </div>
    </Field.Section>
</Form>`
                        }/>
                    </Section>
                </Section>

                {/** Field.Password component **/}
                <Section>
                    <h3><code>Field.Password</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_INTRO_"/></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>allowUnmask</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_ALLOWUNMASK_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>unmaskLabel</td>
                                        <td>string</td>
                                        <td>UNMASK</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_UNMASKLABEL_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>maskLabel</td>
                                        <td>string</td>
                                        <td>MASK</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_MASKLABEL_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>showStrength</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_SHOWSTRENGTH_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>maskChar</td>
                                        <td>string</td>
                                        <td>•</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_MASKCHAR_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>maskTimout</td>
                                        <td>number</td>
                                        <td>1000</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_MASKTIMEOUT_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>evalStrength</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_PASSWORD_PROP_EVALSTRENGTH_DESCRIPTION_" /></td>
                                    </tr>                                
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /></h6>
                        <Code lang="jsx"
                            value={
`<Field.Section>
    <Text scale={0.8}>
        <i18n.Translate text="_PASSWORD_FIELD_LABEL_" />
    </Text>

    <Field.Password
        name="password"
        placeholder="_PASSWORD_FIELD_PLACEHOLDER_"
        unmaskLabel="_UNMASK_PASSWORD_LABEL"
        maskLabel="_MASK_PASSWORD_LABEL"
        scale={1.5}
        validators="$required"/>
</Field.Section>`
                        }/>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>

                        <div className={styles.resultBox}>
                            <Form
                            onSubmit={() => {}}>
                                <Field.Section>
                                    <Text scale={0.8}>
                                        <i18n.Translate text="_PASSWORD_FIELD_LABEL_" />
                                    </Text>

                                    <Field.Password
                                        name="password"
                                        placeholder="_PASSWORD_FIELD_PLACEHOLDER_"
                                        unmaskLabel="_UNMASK_PASSWORD_LABEL_"
                                        maskLabel="_MASK_PASSWORD_LABEL_"
                                        scale={1.5}
                                        validators="$required"/>
                                </Field.Section>
                            </Form>
                        </div>
                    </Section>
                </Section>


                {/** Field.Select component **/}
                <Section>
                    <h3><code>Field.Select</code> <Label scale={0.8} color="warning"><i18n.Translate text="_COMPONENT_LABEL_TEXT_" /></Label></h3>

                    <Section>
                        <div><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_INTRO_"/></div>

                        <div className={styles.tableContainer}>
                            <table className={styles.propsTable}>
                                <thead>
                                    <tr>
                                        <th><i18n.Translate text="_PROP_TABLE_PROPERTY_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_TYPE_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DEFAULT_TH_" /></th>
                                        <th><i18n.Translate text="_PROP_TABLE_DESCRIPTION_TH_" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>value</td>
                                        <td>string,array</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_VALUE_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>options</td>
                                        <td>array</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_OPTIONS_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>loading</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_LOADING_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>loadingLabel</td>
                                        <td>string</td>
                                        <td style={{whiteSpace: "nowrap"}}>Loading ...</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_LOADINGLABEL_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>loadOptions</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_LOADOPTIONS_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>loadOptionsTimeout</td>
                                        <td>number</td>
                                        <td>500</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_LOADOPTIONSTIMEOUT_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>noOptionsLabel</td>
                                        <td>string</td>
                                        <td>No options were found.</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_NOOPTIONSLABEL_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>multi</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_MULTI_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>creatable</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_CREATABLE_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>createOptionLabel</td>
                                        <td>string</td>
                                        <td>{"Create option {{value}}"}</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_CREATEOPTIONLABEL_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>onCreateOption</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_ONCREATEOPTION_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>createOptionAsync</td>
                                        <td>bool</td>
                                        <td>false</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_CREATEOPTIONASYNC_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>selectOptionAfterCreate</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_SELECTOPTIONAFTERCREATE_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>searchable</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_SEARCHABLE_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>placeholder</td>
                                        <td>string</td>
                                        <td style={{whiteSpace: "nowrap"}}>-- select --</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_PLACEHOLDER_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>openMenuOnSearchFocus</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_OPENMENUONSEARCHFOCUS_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>clearSearchOnBlur</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_CLEARSEARCHONBLUR_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>clearSearchOnMenuClose</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_CLEARSEARCHONMENUCLOSE_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>labelMatchHighlight</td>
                                        <td>bool</td>
                                        <td>true</td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_LABELMATCHHIGHLIGHT_DESCRIPTION_" /></td>
                                    </tr>

                                    <tr>
                                        <td>onMenuClose</td>
                                        <td>func</td>
                                        <td></td>
                                        <td><i18n.Translate text="_SECTION_FIELD_COMP_SELECT_PROP_ONMENUCLOSE_DESCRIPTION_" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /> - <i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_MULTI_SELECT_" /></h6>
                        <Code lang="jsx"
                            value={
`<Field.Section>
    <Text scale={0.8}>
        <i18n.Translate text="_SELECT_FIELD_LABEL_" />
    </Text>
    <Field.Select name="selectTest"
        value={this.state.selectValue}
        onChange={(value) => {
            this.setState({selectValue: value});
        }}
        options={this.state.options}
        loadOptions={(searchValue) => {
            this.setState({loadingOptions: true});

            setTimeout(() => {
                let originalOptions = this.originalOptions;

                // Filter out based on search value.
                let options = lodash.filter(originalOptions, (option) => {
                    if(searchValue && option.label.indexOf(searchValue) < 0) {
                        return false;
                    }

                    return true;
                });

                // First option is an action that shows the modal.
                options.unshift({
                    value: "show_modal_action",
                    label: "_SHOW_MODAL_ACTION_LABEL_",
                    action: () => {
                        this.setState({isModalOpen: true});
                    }
                });

                this.setState({
                    options: options,
                    loadingOptions: false
                });
            }, 2000);
        }}
        loading={this.state.loadingOptions}
        onMenuClose={() => {
            this.setState({options: null});
        }}
        creatable={true}
        multi={true}
        size={1.5}
        onCreateOption={(value) => {
            let options = this.state.options.concat([{
                value: value,
                label: value
            }]);

            this.setState({
                options: options
            });
        }}
        loaderComponent={<Spinner.CircSide color="#555" />}
        validators="$required">
    </Field.Select>
</Field.Section>`
                        }/>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>

                        <div className={styles.resultBox}>
                            <Field.Section>
                                <Text scale={0.8}>
                                    <i18n.Translate text="_SELECT_FIELD_LABEL_" />
                                </Text>
                                <Field.Select
                                    name="selectTest"
                                    value={this.state.selectValue}
                                    onChange={(value) => {
                                        this.setState({selectValue: value});
                                    }}
                                    options={this.state.options}
                                    loadOptions={(searchValue) => {
                                        this.setState({loadingOptions: true});

                                        setTimeout(() => {
                                            let originalOptions = this.originalOptions;

                                            // Filter out based on search value.
                                            let options = lodash.filter(originalOptions, (option) => {
                                                if(searchValue && option.label.indexOf(searchValue) < 0) {
                                                    return false;
                                                }

                                                return true;
                                            });

                                            // First option is an action that shows the modal.
                                            options.unshift(this.actionOption);

                                            this.setState({
                                                options: options,
                                                loadingOptions: false
                                            });
                                        }, 2000);
                                    }}
                                    loading={this.state.loadingOptions}
                                    onMenuClose={() => {
                                        this.setState({options: null});
                                    }}
                                    creatable={true}
                                    multi={true}
                                    scale={1.5}
                                    onCreateOption={(value) => {
                                        let options = this.state.options.concat([{
                                            value: value,
                                            label: value
                                        }]);

                                        this.setState({
                                            options: options
                                        });
                                    }}
                                    loaderComponent={<Spinner.CircSide color="#555" />}
                                    validators="$required"/>
                            </Field.Section>
                        </div>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_" /> - <i18n.Translate text="_CODE_EXAMPLE_SECTION_TITLE_SINGLE_SELECT_" /></h6>
                        <Code lang="jsx"
                            value={
`<Field.Section>
    <Text scale={0.8}>
        <i18n.Translate text="_SELECT_FIELD_LABEL_" />
    </Text>
    <Field.Select name="selectTest"
        value={this.state.selectValue}
        onChange={(value) => {
            this.setState({selectValue: value});
        }}
        options={this.state.options}
        loadOptions={(searchValue) => {
            this.setState({loadingOptions: true});

            setTimeout(() => {
                let originalOptions = this.originalOptions;

                // Filter out based on search value.
                let options = lodash.filter(originalOptions, (option) => {
                    if(searchValue && option.label.indexOf(searchValue) < 0) {
                        return false;
                    }

                    return true;
                });

                // First option is an action that shows the modal.
                options.unshift({
                    value: "show_modal_action",
                    label: "_SHOW_MODAL_ACTION_LABEL_",
                    action: () => {
                        this.setState({isModalOpen: true});
                    }
                });

                this.setState({
                    options: options,
                    loadingOptions: false
                });
            }, 2000);
        }}
        loading={this.state.loadingOptions}
        onMenuClose={() => {
            this.setState({options: null});
        }}
        creatable={true}
        multi={false}
        size={1.5}
        onCreateOption={(value) => {
            let options = this.state.options.concat([{
                value: value,
                label: value
            }]);

            this.setState({
                options: options
            });
        }}
        loaderComponent={<Spinner.CircSide color="#555" />}
        validators="$required">
    </Field.Select>
</Field.Section>`
                        }/>
                    </Section>

                    <Section>
                        <h6><i18n.Translate text="_CODE_EXAMPLE_RESULT_SECTION_TITLE_" /></h6>

                        <div className={styles.resultBox}>
                            <Field.Section>
                                <Text scale={0.8}>
                                    <i18n.Translate text="_SELECT_FIELD_LABEL_" />
                                </Text>
                                <Field.Select
                                    name="selectTest"
                                    value={this.state.selectValue}
                                    onChange={(value) => {
                                        this.setState({selectValue: value});
                                    }}
                                    options={this.state.options}
                                    loadOptions={(searchValue) => {
                                        this.setState({loadingOptions: true});

                                        setTimeout(() => {
                                            let originalOptions = this.originalOptions;

                                            // Filter out based on search value.
                                            let options = lodash.filter(originalOptions, (option) => {
                                                if(searchValue && option.label.indexOf(searchValue) < 0) {
                                                    return false;
                                                }

                                                return true;
                                            });

                                            // First option is an action that shows the modal.
                                            options.unshift(this.actionOption);

                                            this.setState({
                                                options: options,
                                                loadingOptions: false
                                            });
                                        }, 2000);
                                    }}
                                    loading={this.state.loadingOptions}
                                    onMenuClose={() => {
                                        this.setState({options: null});
                                    }}
                                    creatable={true}
                                    multi={false}
                                    scale={1.5}
                                    onCreateOption={(value) => {
                                        let options = this.state.options.concat([{
                                            value: value,
                                            label: value
                                        }]);

                                        this.setState({
                                            options: options
                                        });
                                    }}
                                    loaderComponent={<Spinner.CircSide color="#555" />}
                                    validators="$required"/>
                            </Field.Section>
                        </div>
                    </Section>
                </Section>

                {/*<Section>
                    <h3><i18n.Translate text="_SECTION_FIELD_VALIDATORS_SECTION_TITLE_"/></h3>
                    <div><i18n.Translate text="_SECTION_FIELD_VALIDATORS_INTRO_"/></div>
                </Section>*/}
            </Section>
        );
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <div className={styles.landingRebelt}>
                <Bar fixedOnTop={true} open={this.state.barOpen} onToggle={() => { this.setState({barOpen: !this.state.barOpen}); }}>
                    <Bar.Container withBottomLine={true}>
                        <Bar.Header>
                            <Bar.Menu togglable={false}>
                                <Bar.Item>
                                    <Link to="/a">
                                        <img className={styles.logo} src={logoIcon} />
                                    </Link>
                                </Bar.Item>
                            </Bar.Menu>

                            <Bar.Toggle
                                openComponent={<span className="icon-menu"></span>}
                                closeComponent={<span className="icon-delete"></span>}>
                            </Bar.Toggle>
                        </Bar.Header>
                        <Bar.Body>
                            <Bar.Menu>
                                <Bar.Item>
                                    <a href="https://github.com/nosebit/darch">
                                        GitHub
                                    </a>
                                </Bar.Item>
                            </Bar.Menu>
                        </Bar.Body>
                    </Bar.Container>
                </Bar>

                <Container>
                    <h1><i18n.Translate text="_MAIN_TITLE_"/></h1>
                    <p><i18n.Translate text="_INTRO_"/></p>

                    {/** SECTIONS **/}
                    {this.renderUsageSection()}
                    {this.renderGridSection()}
                    {this.renderBarSection()}
                    {this.renderFormSection()}
                    {this.renderFieldSection()}
                </Container>
            </div>
        );
    }
}

/*

 */
