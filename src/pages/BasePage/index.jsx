import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./BasePage.module.css";
import Footer from "../../components/Footer";
import logo from "./Logo.svg";
import GlobalContextProvider from "../../context/GlobalContext";


const BasePage = () => {
  return (
    <main className={styles.container}>
      <Header logo={logo} />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
      <Footer logo={logo} />
    </main>
  );
};

export default BasePage;
