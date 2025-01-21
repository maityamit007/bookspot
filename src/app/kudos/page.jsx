import ActionCard from "@/components/ActionCard";
import style from "./style.module.css";

export default function Home() { 

    return (
        <main class={`min-h-screen relative ${style.homeContainer}`}>
            <div class="absolute inset-0 flex items-center justify-center">
                <ActionCard
                    altName={"Like"}
                    imageSrc={"/like.svg"}
                    imgHeight={56}
                    imgWidth={56}
                    labelName={`Done`}
                    titleText={`Kudos 🎉`}
                    titleDescription={`Your account has been registered!`}
                    timerText={`You'll be redirected to home screen in 5`}
                />
            </div>
        </main>
    );
}
