export default function play (){

    // const names: string[] = ['Fred', 'Janay'];
    // const numbers: Array<number> = [1,2,3,4,5];
    const random = Math.random() > 0.5 ? 'hello': [1,2]; 
    // Continue if [random] is a string
        if(typeof random === 'string'){
            const upper = random.toUpperCase()
        }else{
            console.log(random);
        }
    // Continue if [random] is a string
    console.log(random.length);

};