import ActionCard from "@/components/ActionCard";
import style from "@/app/dashboard/style.module.css";
import BreadCrumb from "@/components/BreadCrumb";

const LogOutPage = () => {
  return (
    <main className={`flex min-h-screen flex-col ${style.container}`}>
      <BreadCrumb navigationText={`Log Out`} includeNavigate={true} />
      <div
        className="px-6 m-6"
        style={{
          color: "#B1B1B1",
          fontSize: 20,
          fontWeight: 400,
        }}
      >
        Leaving so soon 🙁
      </div>
      <div className={`${style.homeContainer}`}>
        <div className="flex row justify-center">
          <ActionCard
            altName={"Are you sure ?"}
            imageSrc={"/logout-c.svg"}
            imgHeight={56}
            imgWidth={56}
            labelName={`Log Out`}
            titleText={`Are you sure ?`}
            titleDescription={`You wanna Log Out from your BookSpot App.`}
            timerText={`cancel`}
            backgroundColor={"#FF4343"}
            titleTextAdditionalCSS={"addtionalCSS"}
          />
        </div>
      </div>
    </main>
  );
};
export default LogOutPage;
