import Menu from "../components/Menu/Menu";
import Main from "../components/Main/Main";
import Socials from "../components/Socials/Social";
import Work from "../components/Work/index";
import Training from "../components/Training";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <Main />
        <Menu />
        <Work />
        <Training />
        <Footer />
        <Socials />
    </>
  );
}
