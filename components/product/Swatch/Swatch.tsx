import { FC } from "react";
import s from './Swatch.module.css';
import { Check } from '@components/icons';

interface Props {
    color?: string,
    lable?: string,
    variant?: 'size' | 'color'| string,
    onClick: ()=> void
}

const Swatch: FC<Props> = ({color, lable, variant, ...rest})=>{
    
    lable = lable?.toLocaleLowerCase();
    variant = variant?.toLocaleLowerCase();
    return(
        <button 
            style={color ? {backgroundColor: color} : {}}
            className={s.root}
            {...rest}
        >
            {/* <span>
                <Check/>
            </span> */}
            { variant === 'size' ? lable : null}
        </button>
    );

};

export default Swatch;