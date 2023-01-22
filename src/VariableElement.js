class VariableElement extends HTMLElement {
    constructor(){
        super();
        //Get the Variable Name
        const name = this.getAttribute('name');
        //Get the Variable Value
        const value = this.getAttribute('value');

        //Assign the variable so make it accessable
        window[name] = value;
    }
}