import { useMisdemeanours } from "./MisdemeanourContext";
import { Misdemeanour, MISDEMEANOUR_LONG_TEXTS, MISDEMEANOURS } from "../types/misdemeanours.types";
import pigeon from "../assets/icons8-peace-pigeon-80.png";

interface MisdemeanourForgivenessProps {
    misdemeanour: Misdemeanour;
  }

const MisdemeanourForgiveness: React.FC<MisdemeanourForgivenessProps> = ({misdemeanour}) => {
    const {misdemeanours, setMisdemeanours} = useMisdemeanours();
    const handleForgive = (citizenId: number) => {
        setMisdemeanours(misdemeanours.map(m => {
            if (m.citizenId === citizenId) {
                if (m.forgivenessesNeeded === 1) {
                    alert(`Citizen ${m.citizenId} forgiven for ${MISDEMEANOUR_LONG_TEXTS[MISDEMEANOURS.indexOf(m.misdemeanour)]}`)
                }
                return {...m, forgivenessesNeeded: m.forgivenessesNeeded ? m.forgivenessesNeeded - 1 : null};
            } else return m;
        }).filter(m => m.forgivenessesNeeded === null || m.forgivenessesNeeded > 0)
        );                
    }

  return (
    <p className={`grid__item grid__column6`}>
      <span className={`${misdemeanour.details ? "misdemeanour--self-confessed" : ""}`}>
        {misdemeanour.forgivenessesNeeded}{" "}
        {misdemeanour.forgivenessesNeeded !== null && misdemeanour.forgivenessesNeeded > 0 && (
          <img
            onClick={(e) => handleForgive(misdemeanour.citizenId)}
            height={30}
            alt="peace pigeon icon"
            src={pigeon}
          />
        )}
      </span>
    </p>
  );
};

export default MisdemeanourForgiveness;