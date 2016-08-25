"use strict";
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.underscoreCheck = function (control) {
        if (control.value.indexOf("_") >= 0) {
            return null;
        }
        return { underscoreCheck: true };
    };
    CustomValidator.isAType = function (control) {
        var types = ["plante", "eau", "feu", "electrique"];
        if (types.includes(control.value)) {
            return null;
        }
        return { invalidType: true };
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
//# sourceMappingURL=custom.validator.js.map