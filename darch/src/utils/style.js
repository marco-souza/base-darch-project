import vars from "../styles/variables";

export default class Style {
    /**
     * This function returns the size relative to
     * base text size and rounded to prevent subpixel
     * rendering issues.
     */
    static getSize(scale=1) {
        let textSize = parseInt(vars.textSize);
        return Math.round(scale*textSize);
    }

    /**
     * This function append the base unit to a size.
     */
    static setUnit(size=vars.textSize) {
        return `${size}${vars.baseUnit}`;
    }

    /**
     * This function converts an hex color to rgb.
     */
    static hexToRGBColor(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r:255, g:255, b:255};
    }

    /**
     * This function get color from string.
     */
    static getColor(color) {
        switch(color) {
            case "light": { return vars.colorLight; }
            case "dark": { return vars.colorLight; }
            case "moody": { return vars.colorMoody; }
            case "calm": { return vars.colorCalm; }
            case "stable": { return vars.colorStable; }
            case "success": { return vars.colorSuccess; }
            case "warning": { return vars.colorWarning; }
            case "danger": { return vars.colorDanger; }
        }

        return color;
    }
}
