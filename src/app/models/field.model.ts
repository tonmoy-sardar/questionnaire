export class FieldModel {
    linkId: string;
    value: any;
    type: string;
    placeHolder: string;
    option: DropdownOption[];
    text: string;
    required: boolean;
    errorMessage: string;
    validationMessage: string;
    pattern: any;
    
    constructor(
        field: {
        linkId?: string;
        value?: any;
        type?: string;
        placeHolder?: string;
        option?: DropdownOption[];
        text?: string;
        required?: boolean;
        errorMessage?: string;
        validationMessage?: string;
        pattern?: any;
    }){
        if(field){
            this.linkId = field.linkId;
            this.value = field.value;
            this.type = field.type;
            this.placeHolder = field.placeHolder;
            this.option = field.option;
            this.text = field.text;
            this.required = field. required;
            this.errorMessage = field.errorMessage;
            this.validationMessage = field.validationMessage;
            this.pattern = field.pattern;
        }

    }
}

class DropdownOption {
    valueCoding: {
        system: string;
        code : string
        display: string
    }   
}