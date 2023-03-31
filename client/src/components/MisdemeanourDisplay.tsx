import React from "react";
import { STANDARD_FORGIVENESSES } from "../types/misdemeanours.types";
import MisdemeanourTable from "./MisdemeanourTable";
import pigeon from '../assets/icons8-peace-pigeon-80.png'

const MisdemeanourDisplay : React.FC = () => {    

    return(
    <>
    <div className="container">
        <details><summary><strong>NEW!</strong> Forgiveness for Fakelandia citizens</summary><p className="misdemeanour__message">As we want to be a fair society, we've added the possibility of <strong>forgiving</strong> your fellow citizens. Click on the pigeon of peace (<img src={pigeon} height={20}></img>) to forgive a misdemeanour.</p>
        <p className="misdemeanour__message">Misdemeanours normally require <strong>{STANDARD_FORGIVENESSES}</strong> forgivenesses, but this is reduced to <strong>{Math.floor(STANDARD_FORGIVENESSES/2)}</strong> if you confess!</p>
        <p className="misdemeanour__message">For United fans there can be <strong>no forgiveness</strong> until you perform a Liverpool song of our choice at a public ceremony - contact us for details.</p>
        </details>
    </div>
    <MisdemeanourTable />

    <div>
    <a target="_blank" href="https://icons8.com/icon/7mHfZHK9mvZw/peace-pigeon">Peace Pigeon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
    </>
    )
}

export default MisdemeanourDisplay;