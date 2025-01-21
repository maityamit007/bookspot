import ActionCard from "@/components/ActionCard";
import style from "./style.module.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function Home() {

    return (
        <main>
            <BreadCrumb navigationText={`Cancel Booking`} navIcon={`refresh.svg`} includeNavigate={true}/>
            <div class={`min-h-screen relative ${style.homeContainer}`}>
                <div class="absolute inset-0 flex row items-center justify-center">
                    <ActionCard
                        altName={"Cancle Booking"}
                        imageSrc={"/cancel.svg"}
                        imgHeight={56}
                        imgWidth={56}
                        labelName={`Cancel`}
                        titleText={`Cancel My Booking`}
                        titleDescription={`Your booking with Okay Diagnostics Center will be cancelled`}
                        timerText={`No don't cancel`}
                        backgroundColor={"#FF4343"}
                        titleTextAdditionalCSS={'addtionalCSS'}
                    />
                </div>
            </div >
        </main>
    );
}
