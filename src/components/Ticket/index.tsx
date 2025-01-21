"use client";

import Image from "next/image";
import style from "./style.module.css";
import { Button } from "@nextui-org/react";
import DetialsCard from "../DetialsCard";
import Divider from "../Divider";

type TicketProps = {
    name?: string;
}

const detailsCardData = [{
    icon: './clock.svg',
    itemTitle: '17:35'
}, {
    icon: './calendar.svg',
    itemTitle: '07.09.22'
}, {
    icon: './map-pin.svg',
    itemTitle: 'Okay diagnostics center, A1, Jaipur'
}, {
    icon: './phone-call.svg',
    itemTitle: '+91 12345 67890'
}];


const Ticket = ({
    name,
}: TicketProps) => {

    return (
        <div className={`max-h-screen flex flex-col items-center p-4 ${style.cardConatiner}`}>
            <div className={`flex flex-row ${style.titleText}`}>
                <Image
                    src="/logo.png"
                    alt="resend"
                    width={20}
                    height={18}
                    className="mr-2"
                />
                <div className={`${style.brandName}`}>{`BookSpot`}</div>
            </div>
            <Divider />
            <div className={`${style.titleText}`}>{`Hi Jhon,`}</div>
            <div className={`${style.titleDesc}`}>{`Thank you for waiting.`}</div>
            <div className={`flex flex-col ${style.tokenCircle}`}>
                <div className={`${style.tokenNumber}`}>{`20`}</div>
                <div className={`${style.tokenText}`}>{`Token No`}</div>
            </div>

            <div className={`flex flex-row`}>
                <Image
                    src="/map-pin.svg"
                    alt="resend"
                    width={18}
                    height={18}
                    className="mr-2"
                />
                <div className={`${style.pinDesc}`}>{`Okay Diagnostics Center`}</div>
            </div>
            <div className={`flex flex-row item-center justify-center absolute ${style.semiCircleContainer}`}>
                <div className={`${style.semiCircle}`}></div>
                <Image
                    src="/dotted-line.svg"
                    alt="dottedLine"
                    width={250}
                    height={18}
                />
                <div className={`${style.semiCircleRight}`}></div>
            </div>
            <Button
                variant="solid"
                color="primary"
                size="md"
                className={`mt-4 bg-primary md:px-24 w-full ${"md:w-fit"
                    } `}
                style={{
                    height: 28,
                    borderRadius: 3.2,
                    background: "#F96021",
                    width: 208,
                    fontSize: 9.6,
                    fontWeight: 500,
                    ...style,
                }}
                onClick={() => { console.log("Dummy Function") }}
            >
                <Image
                    src="/zap.svg"
                    alt="zap"
                    width={18}
                    height={18}
                />
                {`Current queue status: 5 more to go`}
            </Button>
            <div className={`underline p-3 ${style.queueText}`}>{`Wanna Move Ahead In The Queue`} </div>
            <div>
                <DetialsCard title={`Detials`} detailsCardArray={detailsCardData} />
            </div>
            <div className={`underline pt-3 ${style.titleDesc}`}>{`  Modify Booking`} </div>
        </div>
    );
}

export default Ticket;
