type MotherKey = keyof Mother;
type FatherKey = keyof Father;

interface Mother{
    name: string,
    age: number,
    chromosoneX: MotherKey
};
interface Father{
    name: string,
    age: number,
    chromosoneX: MotherKey,
    chromosoneY: FatherKey
};


interface ChildPerson{
    name: string,
    age: number,
    motherKey: MotherKey,
    fatherKey: FatherKey
};

let motherKey: MotherKey = 'chromosoneX';
let fatherKey: FatherKey = 'chromosoneY';

const mother: Mother = {
    name: 'janay',
    age: 33,
    chromosoneX: 'chromosoneX'
};

const father: Father = {
    name: 'fred',
    age: 34,
    chromosoneX: 'chromosoneX',
    chromosoneY: 'chromosoneY'
};

const child: ChildPerson = {
    name: 'harmony',
    age: 15,
    motherKey: 'chromosoneX',
    fatherKey: 'chromosoneX'
}; 

export default function play(){

    console.log(mother);
    console.log(father);
    console.log(child);
    console.log(motherKey);
    console.log(fatherKey);

};

