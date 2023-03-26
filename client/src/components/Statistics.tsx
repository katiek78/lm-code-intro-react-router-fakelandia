import { useMisdemeanours } from "./MisdemeanourContext";

const Statistics: React.FC = () => {
    const {misdemeanours} = useMisdemeanours();
  return <>
    <div className="statistics">
        <p>Total misdemeanours so far: {misdemeanours.length}</p>
    </div>
  </>;
};

export default Statistics;