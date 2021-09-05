// matching return types
    // type ReturnType<T> = 
    //     T extends T ? 
    //     T : false
    // ;
// matching return types
// matching return types with infer
    type ReturnType<T> =
        T extends infer R ?
        R : false
    ;
// matching return types with infer
//type ReturnType<T> = T extends ()=> infer R? R: number;

// original return types
    function loggerType(){
        return 'hello world';
    };
    function logger1Type(){
        return 2;
    };
    function add2TypeLogger(a:number){
        a += 2;
        return a;
    };
    function addParametersTypeLogger(a1: number, b: number){
        const c:number = a1 + b
        return c;
    };
// original return types

// return types matched once

    const loggerReturnLoggerType: ReturnType <typeof loggerType> = 
        ()=> 'hi there'
    ;
    const loggerReturnLogger1Type: ReturnType <typeof logger1Type> = 
        ()=> 22;
    ;
    const loggerReturnAdd2TypeLogger: ReturnType <typeof add2TypeLogger> = 
        
        (a2: number)=>{
            a2 += 2
            return a2;
        }

    ;
    const loggerReturnAddParametersTypeLogger: ReturnType<typeof addParametersTypeLogger> =
        
        (a3: number, b1:number)=>{
            const c1:number = a3 + b1;
            return c1;
        }

    ;
    
// return types matched once

// return types matched twice
    const addParameters: typeof loggerReturnAddParametersTypeLogger = (a4:number, b2:number)=>{
        const c2:number = a4 + b2;
        return c2;
    };
// return types matched twice

export default function play(){

    console.log(loggerType());
    console.log(logger1Type());
    console.log(add2TypeLogger(1));
    console.log(addParametersTypeLogger(2,3));

    console.log(loggerReturnLoggerType());
    console.log(loggerReturnLogger1Type());
    console.log(loggerReturnAdd2TypeLogger(4));
    console.log(loggerReturnAddParametersTypeLogger(5,6));
    
    console.log(addParameters(7,8));

};

