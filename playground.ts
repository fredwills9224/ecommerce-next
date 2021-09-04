interface Person {
    name: string,
    age: number,
    city: string
};

class Student implements Person{
    name = '';
    age = 0;
    city = '';
};

class Logger<T extends Person> {
    log(items: Array<T>, callback: (item: T)=> void){
        
        items.forEach((item)=>{
            callback(item);
        });

    };
};

export default function play (){

    const logger = new Logger<Student>();
    const people = [{name: 'fred', age: 30, city: 'Cincinnati'},{name: 'janay', age: 29, city: 'Cindinnati'}]
    logger.log(people, (person)=>{
        console.log(person);
    });

};












