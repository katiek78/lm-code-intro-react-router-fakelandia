import { MISDEMEANOURS } from "../../types/misdemeanours.types";

const Confession : React.FC = () => <>
    <div className="confession__container container">
        <p className="confession__text">It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>

        <p className="confession__text">However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>

        <form className='confession__form'>
            <p><label className="confession__text" htmlFor='subjectInput'>Subject</label>
            <input type="text" id="subjectInput"></input>    </p>        
            <p><label className="confession__text" htmlFor='reasonSelect'>Reason for contact:</label>
            <select id="reasonSelect">
            {MISDEMEANOURS.map((m, index) => <option key={'option' + index} value={m}>{m}</option>)}            
            <option value="just-talk">I just want to talk</option>    
            </select></p>
            <textarea className="confession__textarea" rows={15} cols={80}>

            </textarea>
            <button className="confession__button confession__button-text">Confess</button>
        </form>
    </div>
</>;

export default Confession;