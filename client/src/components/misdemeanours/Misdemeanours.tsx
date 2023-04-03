import { useMisdemeanours } from "./MisdemeanourContext";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

const Misdemeanours: React.FC = () => {
  const {misdemeanours} = useMisdemeanours();

  return <>{misdemeanours.length > 0 && <MisdemeanourDisplay />}{misdemeanours.length === 0 && <p className="misdemeanour__loading">Loading misdemeanours...</p>}</>;
};
export default Misdemeanours;
