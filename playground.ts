interface Person{
    personName: string;
    age: number;
};

interface BusinessPerson extends Person{
    salary: number;
};

interface AcademicPerson extends Person{
    publications: string[];
};

type Car = {
    carName: string
};

type RaceCar = {
    speed: number
} & Car & { bestLap: string } & BusinessPerson;

type DragRaceCar = {
    parashootDeployed: boolean 
} & Car & RaceCar;

export default function play (){

    const person: AcademicPerson = {
        personName: 'fred',
        age: 23,
        publications: ['pub','pub1']
    };
    const person1: BusinessPerson = {
        personName: 'fred',
        age: 23,
        salary: 1000
    };
    function logPerson(person: Person){
        console.log(person);
    };
    logPerson(person);
    logPerson(person1);
    const car: RaceCar = {
        carName: 'my car',
        speed: 100,
        bestLap: '01:17:02',
        personName: 'my race car driver',
        salary: 2000,
        age: 24
    };
    const car1: DragRaceCar = {
        carName: 'my car1',
        speed: 170,
        bestLap: '00:58:67',
        personName: 'my drag-race car driver',
        salary: 4000,
        age: 29,
        parashootDeployed: false
    };
    function logCar(car: Car){
        console.log(car);
    };
    logCar(car);
    logCar(car1);

};