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
<p className={`grid__item grid__line grid__column1`}><span className={`${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.citizenId}</span></p>
<p className={`grid__item grid__line grid__column2`}><span className={`${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.date}</span></p>
<p className={`grid__item grid__line grid__column3`}><span className={`misdemeanour__kind ${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.misdemeanour} </span>{MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
<p className={`grid__item grid__line grid__column4`}><span className={`{m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.details}</span></p>
<p className={`grid__item grid__line grid__column5`}><img src={`https://picsum.photos/150/90?random=${m.citizenId}`} alt="Lorem Picsum image" /></p>
<p className={`grid__item grid__column6`}><span className={`${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.forgivenessesNeeded}</span></p>
</React.Fragment>))}   
</>
    );
 
}

export default MisdemeanourList;