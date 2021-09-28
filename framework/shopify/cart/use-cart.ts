import useCart from "@common/cart/use-cart";

export default useCart;
export const handler = {

    fetchOptions: {
        // get checkout query
        query: 'query { hello }'
    },
    async fetcher({fetch, options, input:{ checkoutId }}: any){
        
        const data = await fetch({ ...options });
        // we nee checkout Id
            console.log(checkoutId);
            debugger;
        // we nee checkout Id
        // get checkout

        // if there is no checkout then create checkout
        return { data };

    },
    useHook: ({useData}: any)=> {
        
        const data = useData();
        return {
            data
        };

    }

};





