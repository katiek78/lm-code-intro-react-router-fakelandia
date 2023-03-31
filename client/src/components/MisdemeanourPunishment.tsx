import { Misdemeanour } from "../types/misdemeanours.types";
import lfc from '../assets/soccer-g374b8d6df_640.jpg'

interface MisdemeanourPunishmentProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourPunishment: React.FC<MisdemeanourPunishmentProps> = ({
  misdemeanour,
}) => {
  return (
    <p className={`grid__item grid__line grid__column5`}>
      <img
        src={
          misdemeanour.misdemeanour === "united"
            ? lfc
            : `https://picsum.photos/150/90?random=${misdemeanour.citizenId}`
        }
        alt="Lorem Picsum image"
      />
    </p>
  );
};
export default MisdemeanourPunishment;
