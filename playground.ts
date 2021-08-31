// Validating [prop]'s [type] in [Person] interface
    // interface Person {
    //     name: string
    //     age: number
    // }
// Validating [prop]'s [type] in [Person] interface

// [Person] as a class
    class Person{

        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name
            this.age = age
        };

    };
// [Person] as a class 

// [interface] function
    // interface PersonLoggerFn{
    //     (name: string, age: number): string;
    // };
// [interface] function

// [type] function
    type PersonLoggerFn = (name: string, age: number) => string;
// [type] function

export default function play (){
    
    const name : string = 'Fred';
    const age = 30;

    // [Person] hardcoded
    // const person : Person = {
        //     name: 'Janay',
        //     age: 34
        // };
    // [Person] hardcoded

    const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number): string =>{
        
        const info = 'Name: ' +personName+ ', age: ' +personAge;
        console.log(info);
        return info;

    };

    function logPersonInfo2(person : Person){

        //const info = 'Name: ' +personName+ ', age: ' +personAge;
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info);
        return info;

    };

    const log = logPersonInfo(name, age);
    const person = new Person('Edward', 50);

    logPersonInfo2(person);

};