interface ConfessionFormButtonProps {
    confessionEnabled: boolean;
    confess: () => void;
}

const ConfessionFormButton : React.FC<ConfessionFormButtonProps> = ({confessionEnabled, confess}) => {
    return(
<button
            disabled={!confessionEnabled}
            className="confession__button confession__button-text"
            onClick={(e) => {
              e.preventDefault();
              confess();
            }}
          >
            Confess
          </button>

    );

}

export default ConfessionFormButton;