// Validating [prop]'s [type] in [Person] interface
    // Describing data structures in a more natural way
        // TS recomends working with [interface]s over [type]s when possible
            interface Person {
                name: string
                age: number
            }
        // TS recomends working with [interface]s over [type]s when possible
    // Describing data structures in a more natural way
// Validating [prop]'s [type] in [Person] interface

// Validating [prop]'s [type] in [Person]
    // Can be used as aliases for other types
        // to desribe function types
            // type Person = {
                //     name: string
                //     age: number
            // };
        // to desribe function types
    // Can be used as aliases for other types
// Validating [prop]'s [type] in [Person]

type Data = string;

export default function play (){
    
    const name : Data = 'Fred';
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