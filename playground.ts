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

type Human = BusinessPerson | AcademicPerson | {kind: 'otherType', special: string};

type RaceCar = {
    name: string,
    maxSpeed: 200,
    team: string
};

type CityCar = {
    name: string,
    space: string,
    maxSpeed: 100
};

type SUVCar = {
    name: string,
    maxSpeed: 150,
    isCarbonFree: boolean
};

type Car = RaceCar | CityCar | SUVCar;

export default function play (){

    const car: RaceCar = {
        name: 'Race Car',
        maxSpeed:200,
        team: 'ferari'
    };

    const car1: SUVCar ={
        name: 'Suv car',
        maxSpeed: 150,
        isCarbonFree: true
    }

    const fred: BusinessPerson = {
        kind: 'business',
        name: 'fred',
        age: 34,
        salary: 200,
        prop1: 'prop1',
        prop2: 2
    };

    function logPersonInfo(human : Human){

        if(human.kind === 'academic'){
            console.log(human);
        }else if(human.kind === 'business') {
            console.log(human);
        }else if(human.kind === 'otherType'){
            console.log(human);
        }else{
            console.log(human);
        }

    };

    // Union of argument's type -> can only access attributes that both arguments share unless type has been cased 
        function logCarInfo(car: Car){

            switch(car.maxSpeed){
                
                case 200:
                    console.log(car.team);
                    break
                ;
                case 100:
                    console.log(car);
                    break
                ;
                case 150:
                    console.log(car);
                    break
                ;
                default:
                    const _never: never = car;
                    return _never
                ;

            };

        };
    // Union of argument's type -> can only access attributes that both arguments share unless type has been cased

    // Generic function using [unknown] instead of [any]
        function printInfo(someObject: {[key: string]: unknown}){
            
            if(typeof someObject.age === 'string'){
                console.log(someObject.age.toUpperCase());
            }else{
                console.log(someObject);
            }

        };
    // Generic function using [unknown] instead of [any]

    printInfo({ age: 'twenty years and four months', isMarried: true, name: 'fred1' });
    logCarInfo(car);
    logCarInfo(car1);
    logPersonInfo(fred);

};












