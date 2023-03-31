import React, { useState } from "react";
import { STANDARD_FORGIVENESSES } from "../types/misdemeanours.types";
import MisdemeanourFilter from "./MisdemeanourFilter";
import MisdemeanourList from "./MisdemeanourList";
import pigeon from '../assets/icons8-peace-pigeon-80.png'

const MisdemeanourDisplay : React.FC = () => {    
    const [ filterKind, setFilterKind ] = useState<string>('');    

    return(
    <>
    <div className="container">
        <details><summary><strong>NEW!</strong> Forgiveness for Fakelandia citizens</summary><p className="misdemeanour__message">As we want to be a fair society, we've added the possibility of <strong>forgiving</strong> your fellow citizens. Click on the pigeon of peace (<img src={pigeon} height={20}></img>) to forgive a misdemeanour.</p>
        <p className="misdemeanour__message">Misdemeanours normally require <strong>{STANDARD_FORGIVENESSES}</strong> forgivenesses, but this is reduced to <strong>{Math.floor(STANDARD_FORGIVENESSES/2)}</strong> if you confess!</p>
        <p className="misdemeanour__message">For United fans there can be <strong>no forgiveness</strong> until you perform a Liverpool song of our choice at a public ceremony - contact us for details.</p>
        </details>
    </div>
    <div className="misdemeanour__container container">
        <p className='misdemeanour__filter'>
            <MisdemeanourFilter filterKind={filterKind} setFilterKind={setFilterKind} />
    </p></div>
    <div id='misdemeanourTable' className='misdemeanour__container container'>                      
            <p className='grid__line heading citizenId__heading'>Citizen ID</p>                  
            <p className='grid__line heading date__heading'>Date</p>                    
            
            <p className='grid__line heading misdemeanour__heading'>Misdemeanour</p>            
            <p className='grid__line heading details__heading'>Details</p>            
            <p className='grid__line heading punishment__heading'>Punishment idea</p>
            <p className='heading forgivenesses__heading'>Forgivenesses needed</p>
            
            <MisdemeanourList />
    </div>

    <div>
    <a target="_blank" href="https://icons8.com/icon/7mHfZHK9mvZw/peace-pigeon">Peace Pigeon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
    </>
    )
}

export default MisdemeanourDisplay;