import { useState } from "react";
import MisdemeanourList from "./MisdemeanourList";
import MisdemeanourFilter from "./MisdemeanourFilter";

const MisdemeanourTable: React.FC = () => {
  const [filterKind, setFilterKind] = useState<string>("");
  return (
    <>
      <div className="misdemeanour__container container">
        <p className="misdemeanour__filter">
          <MisdemeanourFilter
            filterKind={filterKind}
            setFilterKind={setFilterKind}
          />
        </p>
      </div>
      <div id="misdemeanourTable" className="misdemeanour__container container">
        <p className="grid__line heading citizenId__heading">Citizen ID</p>
        <p className="grid__line heading date__heading">Date</p>
        <p className="grid__line heading misdemeanour__heading">Misdemeanour</p>
        <p className="grid__line heading details__heading">Details</p>
        <p className="grid__line heading punishment__heading">
          Punishment idea
        </p>
        <p className="heading forgivenesses__heading">Forgivenesses needed</p>

        <MisdemeanourList />
      </div>
    </>
  );
};

export default MisdemeanourTable;