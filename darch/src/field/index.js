import Base from "./base";

export default class Field {
    /** Nested components **/
    static Error = require("./error");
    static Section = require("./section");
    static Label = require("./label");
    static Text = Base(require("./text"));
    static Password = Base(require("./password"));
    static Select = Base(require("./select"));
    static Location = Base(require("./location"));
    static Switch = Base(require("./switch"));
}
