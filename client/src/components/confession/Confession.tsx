import ConfessionForm from "./ConfessionForm";

const Confession: React.FC = () => {
  return (
    <>
      <div className="confession__container container">
        <p className="confession__text">
          It's very difficult to catch people committing misdemeanours so we
          appreciate it when citizens confess to us directly.
        </p>

        <p className="confession__text">
          However, if you're just having a hard day and need to vent then you're
          welcome to contact us here too. Up to you!
        </p>

        <ConfessionForm />
      </div>
    </>
  );
};

export default Confession;
