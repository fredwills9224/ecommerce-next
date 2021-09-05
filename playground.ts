interface Driver{
    name: string
};

// [CustomObject] with [key] value pairs
    type CustomObject = {
        [key: string]: string | number | Driver
    };
// [CustomObject] with [key] value pairs


const car: CustomObject = {
    age: 4,
    driver: {name:'fred'},
    city: 'Cincinnati'
};

export default function play (){
    
    console.log(car);

};

