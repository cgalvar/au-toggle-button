
import { bindable, bindingMode, autoinject } from "aurelia-framework";
import { DOM } from "aurelia-pal";

@autoinject
export class ToggleButton {

    element: any;
    constructor(element:HTMLElement){
        this.element = element;
    }

    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
    @bindable disabled;

    bind(){
        if(this.checked === undefined){
            this.checked = false;
        }
    }

    change(e){
        let event = DOM.createCustomEvent('change', {});

        this.element.dispatchEvent(event);        

    }

}