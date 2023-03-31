import React from "react";
import { useMisdemeanours } from "./MisdemeanourContext";
import MisdemeanourCitizenID from "./MisdemeanourCitizenID";
import MisdemeanourDate from "./MisdemeanourDate";
import MisdemeanourDetails from "./MisdemeanourDetails";
import MisdemeanourKind from "./MisdemeanourKind";
import MisdemeanourPunishment from "./MisdemeanourPunishment";
import MisdemeanourForgiveness from "./MisdemeanourForgiveness";

const MisdemeanourList: React.FC = () => {
  const { misdemeanours, setMisdemeanours } = useMisdemeanours();

  return (
    <>
      {misdemeanours
        .filter((m) => {
          const selectBox: HTMLSelectElement | null = document.getElementById(
            "filterMisdemeanourKind"
          ) as HTMLSelectElement;
          if (!selectBox) return true;
          return (
            selectBox.value === "all" ||
            selectBox.value === "" ||
            selectBox.value === m.misdemeanour
          );
        })
        .map((m, index) => (
          <React.Fragment key={"gridItem" + index}>
            <MisdemeanourCitizenID misdemeanour={m} />
            <MisdemeanourDate misdemeanour={m} />
            <MisdemeanourKind misdemeanour={m} />
            <MisdemeanourDetails misdemeanour={m} />
            <MisdemeanourPunishment misdemeanour={m} />
            <MisdemeanourForgiveness misdemeanour={m} />
          </React.Fragment>
        ))}
    </>
  );
};

export default MisdemeanourList;
