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

type Noop = ()=> any;
type Noop2 = ()=> void;

export default function play (){

    function fn1(x: Noop): any{
        const result = x();
        result();
    };    
    function fn2(x: Noop2): void{
        const result = x();
        // result(); {'error': 'Expression not callable. Void has no call signatures.'}
    };    

};












