import { useApiProvider } from "@common";
import { MutationHook, ApiHooks } from "@common/types/hooks";
import { useState } from "react";

export const useHook = (fn: (apiHooks: ApiHooks)=> MutationHook)=>{
    const { hooks } = useApiProvider();
    return fn(hooks);
};

export const useMutationHook = (hook: MutationHook)=>{

    const { fetcher } = useApiProvider();
    return hook.useHook({
        fetch: (input: any)=>{
            
            return hook.fetcher({
                input,
                fetch: fetcher,
                options: hook.fetcherOptions
            });

        }
    });

};

const useData = ()=>{
    
    const [data, setData] = useState(null);
    debugger;
    if(!data){
        setData({data: 'Cart Ready!!!'} as any);
    }
    debugger;
    return data;

};

// stale while revalidate hook cache data first if possible
    export const useSWRHook = (hook: any)=>{
        return hook.useHook({
            
            useData(){
                debugger;
                const data = useData();
                debugger;
                return data;
            }

        });
    };
// stale while revalidate hook cache data first if possible















