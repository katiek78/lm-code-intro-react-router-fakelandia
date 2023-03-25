import React, { useState } from "react";
import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../types/misdemeanours.types";
import MisdemeanourFilter from "./MisdemeanourFilter";
import MisdemeanourList from "./MisdemeanourList";

const MisdemeanourDisplay : React.FC = () => {    
    const [ filterKind, setFilterKind ] = useState<string>('');    

    return(
    <>
    <div className="misdemeanour__container container">
        <p className='misdemeanour__filter'>
            <MisdemeanourFilter filterKind={filterKind} setFilterKind={setFilterKind} />
    </p></div>
    <div id='misdemeanourTable' className='misdemeanour__container container'>                      
            <p className='grid__line heading citizenId__heading'>Citizen ID</p>                  
            <p className='grid__line heading date__heading'>Date</p>                    
            
            <p className='grid__line heading misdemeanour__heading'>Misdemeanour</p>            
            <p className='heading punishment__heading'>Punishment idea</p>
            
            <MisdemeanourList />
    </div>

    <div>
     
        </div>
    </>
    )
}

export default MisdemeanourDisplay;