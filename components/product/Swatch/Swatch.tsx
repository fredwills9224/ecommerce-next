import { FC } from "react";
import s from './Swatch.module.css';

interface Props {
    color?: string,
    lable?: string
}

const Swatch: FC<Props> = ({color, lable})=>{
    
    lable = lable?.toLocaleLowerCase();
    return(
        <>
            {/* only displas when [color] is defined */}
                { color && <>Color: {color}</>}
            {/* only displas when [color] is defined */}
            Lable: {lable} {` , `}
        </>
    );

};

export default Swatch;