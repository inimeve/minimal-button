export class MinimalButtonController {

    private id: string;

    private cssClass: string;

    onClick: (event: any) => void;


    constructor(){}
    

    private $onInit() {
        this.onClick = this.onClick || (() => {});
    }


    private onClickWrapper = (event: any) => {
        this.onClick(event);
    }

}