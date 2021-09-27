import useCart from "@common/cart/use-cart";

export default useCart;
export const handler = {

    fetchOptions: {
        query: ''
    },
    fetcher(){
        console.log('I am not called for now')
        return{
            data: 'cart ready!!!'
        };
    },
    useHook: ({useData}: any)=> {
        
        const data = useData();
        return {
            data
        };

    }

};






