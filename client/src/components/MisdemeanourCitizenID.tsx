import { Misdemeanour } from "../types/misdemeanours.types";

interface MisdemeanourCitizenIDProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourCitizenID: React.FC<MisdemeanourCitizenIDProps> = ({
  misdemeanour,
}) => {
  return (
    <p className={`grid__item grid__line grid__column1`}>
      <span
        className={`${
          misdemeanour.details ? "misdemeanour--self-confessed" : ""
        }`}
      >
        {misdemeanour.citizenId}
      </span>
    </p>
  );
};
export default MisdemeanourCitizenID;
