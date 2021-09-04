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

class Logger {
    log(items: Array<string>, callback: any){
        debugger;
        items.forEach((item)=>{
            debugger;
            callback(item);
        });

    };
};

export default function play (){

    const logger = new Logger();
    const cars = ['audi', 'skoda', 'citroen'];
    debugger;
    logger.log(cars, (car: any)=>{
        debugger;
        console.log(car);
    });

};












