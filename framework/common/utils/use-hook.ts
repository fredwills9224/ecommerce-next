import { useApiProvider } from "@common";
import { ApiHooks } from "@common/types/api";

export const useHook = (fn: (apiHooks: ApiHooks)=> any)=>{
    debugger;
    const { hooks } = useApiProvider();
    return fn(hooks);
};