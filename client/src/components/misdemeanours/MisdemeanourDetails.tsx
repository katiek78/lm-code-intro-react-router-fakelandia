import { Misdemeanour } from "../../types/misdemeanours.types";

interface MisdemeanourDetailsProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourDetails: React.FC<MisdemeanourDetailsProps> = ({
  misdemeanour,
}) => {
  return (
    <p className={`grid__item grid__line grid__column4`}>
      <span
        className={`${
          misdemeanour.details ? "misdemeanour--self-confessed" : ""
        }`}
      >
        {misdemeanour.details}
      </span>
    </p>
  );
};
export default MisdemeanourDetails;
