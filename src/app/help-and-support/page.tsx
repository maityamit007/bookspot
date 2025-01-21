import HelpAndSupport from "@/components/HelpAndSupport";
import { helpList } from "@/components/HelpAndSupport/helpList";
import style from "@/app/dashboard/style.module.css";
import BreadCrumb from "@/components/BreadCrumb";

const HelpAndSupportPage = () => {
  return (
    <main className={`flex min-h-screen flex-col ${style.container}`}>
      <BreadCrumb navigationText={`Help & Support`} includeNavigate={true} />
      {helpList.map((item: any, index: number) => (
        <HelpAndSupport key={index} title={item.title} image={item.image} />
      ))}
    </main>
  );
};
export default HelpAndSupportPage;
