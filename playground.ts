interface Person{
    name: string
};

type SingleType<T> = 
    T extends any[] ?
    T[number] : T
;

type Type = SingleType<string[]>;
type Type1 = SingleType<number[]>;
type Type2 = SingleType<Person[]>;

export default function play (){

    const stringList = ['1', '2', '3'];
    const numberList = [1, 2, 3];
    const personList = [
        {name: '1'},
        {name: '2'},
        {name: '3'}
    ];
    const mixList = ['1', 2, {name: '3'}];
 
    function logStringArray(arrayInfo: Type[]){
        console.log(arrayInfo);
    };
    function logNumberArray(arrayInfo: Type1[]){
        console.log(arrayInfo);
    };
    function logPersonArray(arrayInfo: Type2[]){
        console.log(arrayInfo);
    };
    

    logStringArray(stringList);
    logNumberArray(numberList);
    logPersonArray(personList);
    
    // mehtods not allowed
        // logStringArray(mixList);
        // logNumberArray(mixList);
        // logPersonArray(mixList);
    // mehtods not allowed

};












