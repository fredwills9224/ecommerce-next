// Validating [prop]'s [type] in [Person] interface
    interface Person {
        name: string
        age: number
    }
// Validating [prop]'s [type] in [Person] interface

// Validating [prop]'s [type] in [Person] object
    // type Person = {
    //     name: string
    //     age: number
    // };
// Validating [prop]'s [type] in [Person] object

export default function play (){
    
    const name = 'Fred';
    const age = 30;

    const person : Person = {
        name: 'Janay',
        age: 34
    };

    function logPersonInfo(personName:string, personAge:number){

        //const info = 'Name: ' +personName+ ', age: ' +personAge;
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info);
        return info;

    };

    function logPersonInfo2(person : Person){

        //const info = 'Name: ' +personName+ ', age: ' +personAge;
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info);
        return info;

    };

    logPersonInfo(name, age);
    logPersonInfo2(person);

};