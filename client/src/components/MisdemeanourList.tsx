import React from "react";
import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS } from "../types/misdemeanours.types";

const MisdemeanourList: React.FC = () => {
    const { misdemeanours, setMisdemeanours } = useMisdemeanours();
    return(
        <>
{misdemeanours
.filter(m => {
    const selectBox: HTMLSelectElement | null =  document.getElementById('filterMisdemeanourKind') as HTMLSelectElement;
    if (!selectBox) return true;
    return selectBox.value==='all' || selectBox.value === '' || selectBox.value===m.misdemeanour})
.map((m, index) => (<React.Fragment key={'gridItem' + index}>
<p className='grid__item grid__line grid__column1'>{m.citizenId}</p>
<p className='grid__item grid__line grid__column2'>{m.date}</p>
<p className='grid__item grid__line grid__column3'>{m.misdemeanour} {MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
<p className='grid__item grid__column4'><img src={`https://picsum.photos/130/90?random=${m.citizenId}`} /></p>
</React.Fragment>))}   
</>
    );
 
}

export default MisdemeanourList;