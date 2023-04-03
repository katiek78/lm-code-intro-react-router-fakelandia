import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import loadMisdemeanours from "../misdemeanours/loadMisdemeanour";
import { Misdemeanour } from "../../types/misdemeanours.types";
import MisdemeanourContext from "../misdemeanours/MisdemeanourContext";
import { STANDARD_FORGIVENESSES } from "../../types/misdemeanours.types";
import { raw } from "express";

const MainLayout: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const getMisdemeanours = async () => {
      const result = await loadMisdemeanours();
      const rawMisdemeanours: Misdemeanour[] = result.misdemeanours;
      const misdemeanoursWithForgiveness: Misdemeanour[] = rawMisdemeanours.map(m => {return { ...m, forgivenessesNeeded: m.misdemeanour === 'united' ? null : STANDARD_FORGIVENESSES }});      
      setMisdemeanours(misdemeanoursWithForgiveness);
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
