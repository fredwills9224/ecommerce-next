type RaceCar = {
    name: string
    maxSpeed: number
}

type CityCar = {
    name: string,
    space: string
};

export default function play (){

    const blueCar: CityCar = {
        name: 'blueCar',
        space:'5seater'
    }
    const redCar: RaceCar = {
        name: 'redCar',
        maxSpeed: 140
    }
    // Union of arguments -> can only access attributes that both arguments share 
        function logCarInfo(car: RaceCar | CityCar){
            console.log(car.name);
        };
    // Union of arguments -> can only access attributes that both arguments share 
    logCarInfo(blueCar);
    logCarInfo(redCar);

};