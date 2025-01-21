"use client";
import { useRouter } from "next/navigation";
import style from "@/app/login/style.module.css";
import { NUIInput } from "../Input";
import { NUIButton } from "../Button";
import ButtonLink from "../Divider/ButtonLink";

type ModifyBookingProps = {
}

const ModifyBooking = ({
}: ModifyBookingProps) => {
    const router = useRouter();

    return (
        <div className={`${style.container}`}>
            <NUIInput label="Name" placeholder="Name" value="Maity The DON" disabled={true} additionalCSS={`modifyBooking`} />
            <NUIInput label="Mobile Number" placeholder="Mobile Number" additionalCSS={`modifyBooking`} />
            <NUIInput label="Age" placeholder="Age" additionalCSS={`modifyBooking`} />
            <NUIInput label="Shift" placeholder="Shift" additionalCSS={`modifyBooking`} />
            <NUIInput label="Queue" placeholder="Queue" additionalCSS={`modifyBooking`} />
            <NUIInput label="Service" placeholder="Service" additionalCSS={`modifyBooking`} />
            <NUIInput label="Modify Token No." placeholder="Modify Token No." additionalCSS={`modifyBooking`} />
            <div className="flex items-center justify-center mb-2"><NUIButton label="Continue" onclick={() => { }} /></div>
            <ButtonLink desc={"Cancel Booking"} />
        </div>
    );
}

export default ModifyBooking;