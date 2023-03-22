import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../../types/misdemeanours.types";

const MisdemeanourDisplay : React.FC = () => {
    const misdemeanours = useMisdemeanours();

    return(
    <>
    <div className="container"><p className='misdemeanour__filter'>Filter</p></div>
    <div className='container'>                      
            <p className='grid__line heading citizenId__heading'>Citizen ID</p>                  
            <p className='grid__line heading date__heading'>Date</p>                    
            
            <p className='grid__line heading misdemeanour__heading'>Misdemeanour</p>            
            <p className='heading punishment__heading'>Punishment idea</p>
            {misdemeanours.map((m) => (<>
            <p className='grid__line grid__column1'>{m.citizenId}</p>
            <p className='grid__line grid__column2'>{m.date}</p>
            <p className='grid__line grid__column3'>{m.misdemeanour} {MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
            <p></p></>))}    
    </div>

    <div>
     
        </div>
    </>
    )
}

export default MisdemeanourDisplay;