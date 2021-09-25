import { FC } from "react";
import s from './Swatch.module.css';
import { Check } from '@components/icons';
import cn from 'classnames';
import { isDark } from '@lib/color';

interface Props {
    color?: string,
    lable?: string,
    variant?: 'size' | 'color'| string,
    active?: boolean,
    onClick: ()=> void
}

const Swatch: FC<Props> = ({color, lable, variant, active, ...rest})=>{
    
    lable = lable?.toLocaleLowerCase();
    variant = variant?.toLocaleLowerCase();
    const rootClassName = cn(
        s.root, {
            [s.active]: active,
            [s.color]: color,
            [s.size]: variant === 'size',
            [s.dark]: color && isDark(color)
        }
    )
    return(
        <button 
            style={color ? {backgroundColor: color} : {}}
            className={rootClassName}
            {...rest}
        >

            {variant === 'color' && active &&
                <span>
                    <Check/>
                </span>
            }
            { variant === 'size' ? lable : null}

        </button>
    );

};

export default Swatch;