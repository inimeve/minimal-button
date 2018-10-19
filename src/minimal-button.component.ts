import { MinimalButtonController } from "./minimal-button.controller";

export class MinimalButtonComponent implements ng.IComponentOptions {
 
    public template: string;

    public controller: any;

    public transclude: boolean;

    public bindings: {[binding: string]: string};

    constructor() {
        this.transclude = true;

        this.bindings = {
            id: '@',
            cssClass: '@'
        };

        this.template = require('./minimal-button.html');
        
        this.controller = MinimalButtonController;
    }

}