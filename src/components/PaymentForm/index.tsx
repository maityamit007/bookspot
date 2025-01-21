"use client";
import { Divider } from "@nextui-org/react";
import { NUIInput } from "../Input";
import style from './style.module.css';
import ButtonLink from "../Divider/ButtonLink";
import { NUIButton } from "../Button";

type PaymentFormProps = {
}

const PaymentForm = ({
}: PaymentFormProps) => {

    return (
        <div className={``}>
            <div className="flex flex-col p-6 pt-2 pl-4">
                <span className={`pt-2 pb-2 ${style.amountTitle}`}>{`Amount to be paid`}</span>
                <span className={`mt-2 ${style.amount}`}>{`$2,147.50`}</span>
            </div>
            <Divider />
            <div className="pt-6 pl-4">
                <NUIInput label="Select Payment Method" placeholder="Cash" value="Maity The DON" disabled={true} />
            </div>
            <div className="flex items-center justify-center mb-2 pl-4 pr-4"><NUIButton label="Make Payment" onclick={() => { }} /></div>
            <ButtonLink desc={"Cancel"} />
        </div>
    );
}

export default PaymentForm;