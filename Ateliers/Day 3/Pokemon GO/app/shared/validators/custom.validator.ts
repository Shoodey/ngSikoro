import {Control} from "@angular/common";
export class CustomValidator{

    static underscoreCheck(control: Control){
        if(control.value.indexOf("_") >= 0){
            return null;
        }

        return {underscoreCheck: true}
    }

    static isAType(control: Control){
        let types = ["plante", "eau", "feu", "electrique"];

        if(types.includes(control.value)){
            return null;
        }

        return {invalidType: true};
    }
}