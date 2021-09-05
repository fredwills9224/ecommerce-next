interface Person{
    name: string
};

// Generic [CustomArray] default [T]ype set to [string]
    type CustomArray<T = string> = {
        [index: number]: T,
        push: Function
    };
// Generic [CustomArray] default [T]ype set to [string]

// [SingleStringTypeFromCustomArray] type from [CustomArray]
    type SingleStringTypeFromCustomArray = CustomArray<string>[number];
// [SingleStringTypeFromCustomArray] type from [CustomArray]
// [SinglePersonTypeFromCustomArray] type from [CustomArray]
    type SinglePersonTypeFromCustomArray = CustomArray<Person>[number];
// [SinglePersonTypeFromCustomArray] type from [CustomArray]
// [SingleNumberTypeFromCustomArray] type from [CustomArray]
    type SingleNumberTypeFromCustomArray = CustomArray<number>[number];
// [SingleNumberTypeFromCustomArray] type from [CustomArray]


const stringItems: CustomArray = ['1', '2', '3'];
const personItems: CustomArray<Person> = [{name: 'janay'}, {name: 'harmony'}];
const numberItems: CustomArray<number> = [1, 2, 3];

const stringItem: SingleStringTypeFromCustomArray = '4';
const personItem: SinglePersonTypeFromCustomArray = {name: 'fred'};
const numberItem: SingleNumberTypeFromCustomArray = 4;

export default function play (){
    
    stringItems.push(stringItem);
    personItems.push(personItem);
    numberItems.push(numberItem);

    console.log(stringItems);
    console.log(personItems);
    console.log(numberItems);

};

