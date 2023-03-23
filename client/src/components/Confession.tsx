const Confession : React.FC = () => <>
    <div className="confession__container">
        <p className="confession__intro-text">It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>

        <p className="confession__intro-text">However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>


        <form>
            <label htmlFor='subjectInput'>Subject</label>
            <input type="text" id="subjectInput"></input>

        </form>
    </div>
</>;

export default Confession;