import { useMisdemeanours } from "./MisdemeanourContext";

const MisdemeanourDisplay : React.FC = () => {
    const misdemeanours = useMisdemeanours();

    return(
    <>
    <p>Misdemeanours: </p>
    <div>  
        {misdemeanours.map((m) => (<p>Misdemeanour: {m.misdemeanour}</p>))}    
    </div>
    </>
    )
}

export default MisdemeanourDisplay;