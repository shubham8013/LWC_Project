import { LightningElement } from 'lwc';
export default class ChildHook extends LightningElement {

    constructor(){  //when component is created in DOM
        super(); //this statement is mandatory
        console.log('constructor from child')
    }

    connectedCallback() {  //when component is inserted into DOM
        console.log('child connected callback')
    }

    renderedCallback(){  //when any property's value gets changed
        console.log('child rendered callback')
    }

    errorCallback(error, stack) {
        console.log('child error callback')
    }

    disconnectedCallback() {
        console.log('disconnected callback from child')
    }
}