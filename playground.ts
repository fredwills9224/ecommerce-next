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

class BusinessPerson implements Person{
    name = '';
    age = 0;
    city = '';
    salary = 100000;
};

type WebDeveloper = {
    name: string,
    age: number,
    city: string,
    salary: number,
    fullStack: boolean,
    frontEnd: boolean,
    backEnd: boolean
};

class StudentLogger<T extends Student> {
    log(items: Array<T>, callback: (item: T)=> void){
        
        items.forEach((item)=>{
            callback(item);
        });

    };
};

class BusinessPersonLogger<T extends Person = BusinessPerson>{

    log(items: Array<T>, callback: (item: T)=> void){
        
        items.forEach((item)=>{
            callback(item);
        });

    };

};

export default function play (){

    const studentLogger = new StudentLogger<Person>();
    const businessPersonLogger = new BusinessPersonLogger<BusinessPerson>();
    const webDevelepoerLogger = new BusinessPersonLogger<WebDeveloper>();


    const people = [
        {name: 'harmony', age: 15, city: 'Cincinnati'},
        {name: 'unity', age: 7, city: 'Cincinnati'}
    ];
    const businessPeople = [
        {name: 'fred', age: 34, city: 'Cincinnati', salary: 100000},
        {name: 'janay', age: 33, city: 'Cincinnati', salary: 110000}
    ];
    const webDevelopers = [
        {name: 'fred', age: 34, city: 'Cincinnati', salary: 100000, frontEnd: true, backEnd: true, fullStack: true},
        {name: 'janay', age: 33, city: 'Cincinnati', salary: 110000, fullStack: false, backEnd: false, frontEnd: true}
    ];

    studentLogger.log(people, (person)=>{
        console.log(person);
    });
    businessPersonLogger.log(businessPeople, (businessPerson)=>{
        console.log(businessPerson);
    });
    webDevelepoerLogger.log(webDevelopers, (webDeveloper)=>{
        console.log(webDeveloper);
    });
    

};












