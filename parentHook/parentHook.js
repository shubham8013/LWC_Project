import { LightningElement,api,wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

import fname from '@salesforce/schema/Account.Name';

export default class ParentHook extends LightningElement {

    displayChild=false;
    firstname='shubham';

    recordid='0015i000005Kj86AAC';

    @api name='singh';

    @wire (getRecord,{ recordId:'$recordid', fields: [fname]}) record;

    constructor(){  //when component is created in DOM
        super(); //this statement is mandatory
        console.log('constructor from parent')
        console.log('Access private property',this.firstname);
        this.firstname='sh';
        console.log('set private property',this.firstname); 
        console.log('access api property',this.name); //undefined
        this.name='s';
        console.log('set api property in constructor',this.name); //undefined

        console.log('access wire property',JSON.stringify(this.record)); //undefined
       
        
    }

    connectedCallback() {  //when component is inserted into DOM
        console.log('parent connected callback')
        console.log('access wire property from parent',JSON.stringify(this.record));
    //     console.log('access api property',this.name);
    //     this.name='s';
    //     console.log('set api property in constructor',this.name);
     console.log('access wire property',JSON.stringify(this.record.data)); //undefined
    //
     }

    renderedCallback(){  //when any property's value gets changed
        console.log('Parent rendered callback')
        console.log('access wire property',JSON.stringify(this.record.data));  //when rendered will get invoked for the first time still wire will have undefinedbut when it get invoked 2nd time then wire will have value
    }

    errorCallback(error, stack) {
        console.log('parent error callback')
    }

    disconnectedCallback() {
        console.log('disconnected callback from parent')
    }

    handleChange(event)
    {
        this.displayChild=event.target.checked;
    }
}