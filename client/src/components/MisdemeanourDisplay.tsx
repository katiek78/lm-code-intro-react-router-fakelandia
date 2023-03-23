import React, { useState } from "react";
import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../../types/misdemeanours.types";

const MisdemeanourDisplay : React.FC = () => {
    const misdemeanours = useMisdemeanours();
    const [ filterKind, setFilterKind ] = useState<string>('');
    const changeFilter = (value: string) => setFilterKind(value)

    return(
    <>
    <div className="misdemeanour__container container"><p className='misdemeanour__filter'><select id='filterMisdemeanourKind' defaultValue="" placeholder="Filter" onChange={(e) => changeFilter(e.target.value)}>
    <option value="" disabled>Filter</option>
    {MISDEMEANOURS.map((m, index) => <option key={'option' + index} value={m}>{m}</option>)}
    <option value="all">** show all **</option>
    </select></p></div>
    <div id='misdemeanourTable' className='misdemeanour__container container'>                      
            <p className='grid__line heading citizenId__heading'>Citizen ID</p>                  
            <p className='grid__line heading date__heading'>Date</p>                    
            
            <p className='grid__line heading misdemeanour__heading'>Misdemeanour</p>            
            <p className='heading punishment__heading'>Punishment idea</p>
            {misdemeanours
            .filter(m => {
                const selectBox: HTMLSelectElement | null =  document.getElementsByTagName('select')[0];
                if (!selectBox) return true;
                return selectBox.value==='all' || selectBox.value === '' || selectBox.value===m.misdemeanour})
            .map((m, index) => (<React.Fragment key={'gridItem' + index}>
            <p className='grid__item grid__line grid__column1'>{m.citizenId}</p>
            <p className='grid__item grid__line grid__column2'>{m.date}</p>
            <p className='grid__item grid__line grid__column3'>{m.misdemeanour} {MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
            <p className='grid__item grid__column4'><img src={`https://picsum.photos/150/100?random=${m.citizenId}`} /></p>
            </React.Fragment>))}    
    </div>

    <div>
     
        </div>
    </>
    )
}

export default MisdemeanourDisplay;