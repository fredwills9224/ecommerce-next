interface Person{
    name: string;
    age: number;
};

interface BusinessPerson extends Person{
    salary: number;
};

interface AcademicPerson extends Person{
    publications: string[];
};

export default function play (){

    const person: AcademicPerson = {
        name: 'fred',
        age: 23,
        publications: ['pub','pub1']
    };
    const person1: BusinessPerson = {
        name: 'fred',
        age: 23,
        salary: 1000
    };
    function logPerson(person: Person){
        console.log(person);
    };
    logPerson(person);
    logPerson(person1);

};