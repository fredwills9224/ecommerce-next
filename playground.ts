interface Person {
    kind: 'business' | 'academic' | 'otherType',
    name: string,
    age: number
};

interface BusinessPerson extends Person {
    kind: 'business',
    salary: number
};

interface AcademicPerson extends Person {
    kind: 'academic',
    publications: string[]
};

// Declaration merging can only be performed on interfaces
    interface Person {
        prop1: string,
        prop2: number
    };
// Declaration merging can only be performed on interfaces



export default function play (){

    function iterate(items: Array<string>){

        items.forEach((item)=>{
            console.log(item.toUpperCase());
        });

    };

    iterate(['fred', 'janay', 'harmony',]);

};












