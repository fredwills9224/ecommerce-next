import { useAddItem } from "@common/cart";

export default useAddItem;

export const handler = {

    fetcher: ()=>{
        console.log('Fetching Data!')
    },
    useHook: ()=>{

        debugger
        return (input: any)=>{
            debugger;
            return{
                output: JSON.stringify(input)+ '_MODIFIED'
            };
        };

    }

};


// import { useHook } from "@common/utils/use-hook";
 
// const useAddItem = ()=>{
//     debugger;
//     const hook = useHook((hooks)=> {
//         debugger;
//         hooks.cart.useAddItem
//     });
//     debugger;
//     return hook.useHook();    
// };

// export default useAddItem;