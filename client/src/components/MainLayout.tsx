import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import loadMisdemeanours from "./loadMisdemeanour";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourContext from "./MisdemeanourContext";

const MainLayout: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const getMisdemeanours = async () => {
      const result = await loadMisdemeanours();
      setMisdemeanours(result.misdemeanours);
    };
    getMisdemeanours();
  }, []);

  return (
    <>
      <Header />
      <main>
        <MisdemeanourContext.Provider
          value={{ misdemeanours, setMisdemeanours }}
        >
          <Outlet />
        </MisdemeanourContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
