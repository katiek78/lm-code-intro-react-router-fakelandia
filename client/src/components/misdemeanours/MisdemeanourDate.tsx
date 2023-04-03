import { Misdemeanour } from "../../types/misdemeanours.types";

interface MisdemeanourDateProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourDate: React.FC<MisdemeanourDateProps> = ({
  misdemeanour,
}) => {
  return (
    <p className={`grid__item grid__line grid__column2`}>
      <span
        className={`${
          misdemeanour.details ? "misdemeanour--self-confessed" : ""
        }`}
      >
        {misdemeanour.date}
      </span>
    </p>
  );
};
export default MisdemeanourDate;
