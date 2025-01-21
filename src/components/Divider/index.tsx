import React from 'react';
import style from './style.module.css';

type DividerProps = {
    additionalCSS?: string;
}

const Divider = ({
    additionalCSS = ''
}: DividerProps) => {
    return (
        <div className={`${style.divider} ${style[additionalCSS]}`}></div>

    );
}

export default Divider;
