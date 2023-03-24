import { useMisdemeanours } from "./MisdemeanourContext";
import MisdemeanourDisplay from "./MisdemeanourDisplay";

const Misdemeanours: React.FC = () => {
  const misdemeanours = useMisdemeanours();

  return <>{misdemeanours.length > 0 && <MisdemeanourDisplay />}</>;
};
export default Misdemeanours;
