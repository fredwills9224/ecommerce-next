interface Person {
    name: string,
    age: number
};

class Logger<Type> {
    log(items: Array<Type>, callback: (item: Type)=> void){
        
        items.forEach((item)=>{
            callback(item);
        });

    };
};

export default function play (){

    const logger = new Logger<string>();
    const cars = ['audi', 'skoda', 'citroen'];
    logger.log(cars, (car)=>{
        console.log(car);
    });

    const logger2 = new Logger<number>();
    const numbers = [1,2,3,4,5,6,7,8];
    logger2.log(numbers, (number)=>{
        console.log(number);
    });

    const logger3 = new Logger<Person>();
    const people = [{name: 'fred', age: 30},{name: 'janay', age: 29}]
    logger3.log(people, (person)=>{
        console.log(person);
    });

};












