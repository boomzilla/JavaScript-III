/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The default value is the Window--basically the screen of your web browser.
* 2. in the context of an object, invoking this dot function refers to the object
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
function LambdaStudent() 
{
    this.firstName = "Ian";
    this.lastName = "Ruotsala";
    //^^^above is Principle 3

    this.sayHello = function(){
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
        //^^^above is Principle 2
    }
}

let IanRuotsala = new LambdaStudent;
console.log(IanRuotsala.sayHello());

// Principle 3

// code example for New Binding
//I just realized I also did this for Principle 2: in that example, the new LambdaSchool object is assigned firstName and lastName variables using
//"this" keyword to refer to tge new object

// Principle 4

// code example for Explicit Binding