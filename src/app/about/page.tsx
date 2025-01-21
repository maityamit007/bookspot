import style from "@/app/dashboard/style.module.css";
import AboutCard from "@/components/AboutCard";
import BreadCrumb from "@/components/BreadCrumb";

const AboutPage = () => {
  return (
    <main className={`flex min-h-screen flex-col ${style.container}`}>
      <BreadCrumb navigationText={`About`} includeNavigate={true} />
      <AboutCard
        title="About US"
        titleR="v15.55.3"
        subTitle="Lorem ipsum dolor sit amet consectetur. Arcu posuere quam pharetra ut augue massa tristique. Cursus vulputate magna et erat dignissim nulla nisl molestie et. Et massa accumsan vulputate laoreet ultrices nisl eu aliquam. Varius orci dui felis cursus eu metus et. Malesuada eros semper a nisl mauris.
        Faucibus sit integer adipiscing vestibulum ultricies dignissim justo. Fames auctor lorem fames quam aliquam senectus vitae. Natoque mauris ut faucibus tellus. Diam velit ullamcorper commodo faucibus sem ac a. Dui egestas magna lacus donec. Viverra iaculis tempus enim eget suspendisse. Facilisis mattis quis a lorem semper. Faucibus condimentum malesuada habitasse suspendisse ultrices lacus aliquet aliquet fusce. Eu lorem consectetur molestie bibendum interdum rhoncus at at. Risus vestibulum adipiscing leo nisi ipsum. Nec nullam lectus consectetur purus scelerisque euismod ac et condimentum. Platea ullamcorper enim viverra id cras leo in amet.
        Facilisi malesuada lectus quisque ante orci condimentum rhoncus. Pretium duis porttitor risus lectus augue. Gravida tortor venenatis purus gravida ultricies. Velit sed viverra pellentesque urna."
      />
    </main>
  );
};
export default AboutPage;
