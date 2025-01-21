"use client";

import style from "./style.module.css";

type ButtonLinkProps = {
    desc?: string
}

const ButtonLink = ({
    desc
}: ButtonLinkProps) => {

    return (
        <div className={`underline pt-3 ${style.buttonLink}`}>{desc} </div>
    );
}

export default ButtonLink;