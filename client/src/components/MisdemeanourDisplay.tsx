import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../../types/misdemeanours.types";

const MisdemeanourDisplay : React.FC = () => {
    const misdemeanours = useMisdemeanours();

    return(
    <>
    <p className='misdemeanour__filter'>Filter</p>
    <div className='misdemeanourContainer'>                      
            <p className='grid__item heading citizenId__heading'>Citizen ID</p>                  
            <p className='grid__item heading date__heading'>Date</p>                    
            
            <p className='grid__item heading misdemeanour__heading'>Misdemeanour</p>            
            <p className='heading punishment__heading'>Punishment idea</p>
            {misdemeanours.map((m) => (<>
            <p className='grid__item grid__column1'>{m.citizenId}</p>
            <p className='grid__item grid__column2'>{m.date}</p>
            <p className='grid__item grid__column3'>{m.misdemeanour} {MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
            <p></p></>))}    
    </div>

    <div>
     
        </div>
    </>
    )
}

export default MisdemeanourDisplay;