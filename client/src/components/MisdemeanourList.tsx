import React from "react";
import { useMisdemeanours } from "./MisdemeanourContext";
import { MISDEMEANOURS, MISDEMEANOUR_EMOJIS, MISDEMEANOUR_LONG_TEXTS } from "../types/misdemeanours.types";
import MisdemeanourCitizenID from "./MisdemeanourCitizenID";
import MisdemeanourDate from "./MisdemeanourDate";
import pigeon from '../assets/icons8-peace-pigeon-80.png'
import lfc from '../assets/soccer-g374b8d6df_640.jpg'

const MisdemeanourList: React.FC = () => {
    const { misdemeanours, setMisdemeanours } = useMisdemeanours();

    const handleForgive = (citizenId: number) => {
        setMisdemeanours(misdemeanours.map(m => {
            if (m.citizenId === citizenId) {
                if (m.forgivenessesNeeded === 1) {
                    alert(`Citizen ${m.citizenId} forgiven for ${MISDEMEANOUR_LONG_TEXTS[MISDEMEANOURS.indexOf(m.misdemeanour)]}`)
                }
                return {...m, forgivenessesNeeded: m.forgivenessesNeeded ? m.forgivenessesNeeded - 1 : null};
            } else return m;
        }).filter(m => m.forgivenessesNeeded === null || m.forgivenessesNeeded > 0)
        );                
    }

    return(
        <>
{misdemeanours
.filter(m => {
    const selectBox: HTMLSelectElement | null =  document.getElementById('filterMisdemeanourKind') as HTMLSelectElement;
    if (!selectBox) return true;
    return selectBox.value==='all' || selectBox.value === '' || selectBox.value===m.misdemeanour})
.map((m, index) => (<React.Fragment key={'gridItem' + index}>
<MisdemeanourCitizenID misdemeanour={m} />
<MisdemeanourDate misdemeanour={m} />
<p className={`grid__item grid__line grid__column3`}><span className={`misdemeanour__kind ${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.misdemeanour} </span>{MISDEMEANOUR_EMOJIS[MISDEMEANOURS.indexOf(m.misdemeanour)]}</p>
<p className={`grid__item grid__line grid__column4`}><span className={`{m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.details}</span></p>
<p className={`grid__item grid__line grid__column5`}><img src={m.misdemeanour === 'united' ? lfc : `https://picsum.photos/150/90?random=${m.citizenId}`} alt="Lorem Picsum image" /></p>
<p className={`grid__item grid__column6`}><span className={`${m.details ? 'misdemeanour--self-confessed' : ''}`}>{m.forgivenessesNeeded} {m.forgivenessesNeeded !== null && m.forgivenessesNeeded > 0 && <img onClick={(e) => handleForgive(m.citizenId)} height={30} alt="peace pigeon icon" src={pigeon} />}</span></p>
</React.Fragment>))}   
</>
    );
 
}

export default MisdemeanourList;