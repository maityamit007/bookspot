import SettingCard from "@/components/SettingCard";

import style from "@/app/dashboard/style.module.css";
import ProfileCard from "@/components/ProfileCard";
import BreadCrumb from "@/components/BreadCrumb";

const ProfilePage = () => {
  return (
    <main
      className={`flex max-h-screen flex-col ${style.container} grid grid-row-2`}
    >
      <BreadCrumb navigationText={`My Profile`} includeNavigate={true} />
      <div className="overflow-auto h-[calc(100vh-72px)]">
        <ProfileCard />

        <SettingCard
          icon={"/settings.svg"}
          title={"Settings"}
          path="/"
          subTitle={"Personal details, security and communications"}
        />
        <SettingCard
          icon={"/booking.svg"}
          title={"Booking History"}
          path="/booking-history"
          subTitle={"Check your past booking status"}
        />
        <SettingCard
          icon={"/payments.svg"}
          title={"Payments"}
          path="/payments"
          subTitle={"Manage your saved payment methods"}
        />
        <SettingCard
          icon={"/saved-address.svg"}
          path="/saved-address"
          title={"Saved Address"}
          subTitle={"Manage your saved addresses"}
        />
        <SettingCard
          icon={"/headphones-colored.svg"}
          path="/help-and-support"
          title={"Help & Support"}
          subTitle={"Get help for your account or bookings"}
        />
        <SettingCard
          path="/about"
          icon={"/about.svg"}
          title={"About"}
          subTitle={"About the app’s version & history"}
        />
        <SettingCard
          path="/privacy-policy"
          icon={"/privacypolicy.svg"}
          title={"Privacy Policy"}
          subTitle={"Terms & conditions , policies and regulations"}
        />
        <SettingCard
          path="/"
          icon={"/share-2.svg"}
          title={"Share App"}
          subTitle={"Share on social media or via link"}
        />
        <SettingCard
          path="/logout"
          icon={"/logout.svg"}
          title={"Log Out"}
          subTitle={"Personal details, security and communications"}
        />
        <SettingCard
          icon={"/thumbs-up.svg"}
          path="/"
          title={"Give Feedback"}
          subTitle={""}
        />
      </div>
    </main>
  );
};

export default ProfilePage;
