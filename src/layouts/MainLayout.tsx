import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const MainLayout = (props: any) => {
  return (
    <>
      <Header
        currentLocale={props.currentLocale}
        hangeChange={props.hangeChange}
      />
      <Outlet />
      <Footer />
    </>
  );
};
