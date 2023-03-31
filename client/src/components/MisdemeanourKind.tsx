import { Misdemeanour } from "../types/misdemeanours.types";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../types/misdemeanours.types";

interface MisdemeanourKindProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourKind: React.FC<MisdemeanourKindProps> = ({
  misdemeanour,
}) => {
  return (
    <p className={`grid__item grid__line grid__column3`}>
      <span
        className={`misdemeanour__kind ${
          misdemeanour.details ? "misdemeanour--self-confessed" : ""
        }`}
      >
        {misdemeanour.misdemeanour}{" "}
      </span>
      {MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(misdemeanour.misdemeanour)]}
    </p>
  );
};
export default MisdemeanourKind;
