interface Driver{
    name: string,
    age: number,
    previousEmployers: Array<string>
};
const driver: Driver ={
    name: 'fred',
    age: 34,
    previousEmployers: ['FedEx', 'UPS']
};
const driver2: typeof driver= {
    name: 'janay',
    age: 33,
    previousEmployers: ['UPS']
};

function logger(){
    console.log('hello world');
};
function logger1(message: string){
    console.log(message);
};
function logger2(...args: any[]){
    console.log(args);
};

const kindOfLogger: typeof logger = 
    ()=> console.log('Hi everyone')
;
const kindOfLogger1: typeof logger1 = 
    (message1)=> console.log(message1)
;
const kindOfLogger2: typeof logger2 = 
    (...args: any[])=> console.log(...args)
;

export default function play(){

    logger();
    logger1('logger1Message');
    logger2(driver);
    logger2('from logger2');
    logger2(2);
    logger2({logger2Message: 'logger2Message'});
    logger2(driver2, 'l2 says hi', 2);

    kindOfLogger();
    kindOfLogger1(' from kindOfLogger1');
    kindOfLogger2(driver);
    kindOfLogger2('from kindOfLogger2');
    kindOfLogger2(22);
    kindOfLogger2({kindOfLogger2Message: 'Hi everyone from kindOfLogger2'});
    kindOfLogger2(driver2, 'kol2 says hi', 22);

};

