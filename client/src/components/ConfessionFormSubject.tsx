import { useState } from "react";

interface ConfessionFormSubjectProps {
    validSubject: boolean;
    setValidSubject: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfessionFormSubject : React.FC<ConfessionFormSubjectProps> = ({validSubject, setValidSubject}) => {
    
    const [subjectFocused, setSubjectFocused] = useState<boolean>(false);

    const checkValidSubject = (value: string) => {
        if (value.length > 0) {
          setValidSubject(true);
        } else {
          setValidSubject(false);
        }
      };

    return(
    <div className="confession__formElementOuterContainer">
    <label
      className="confession__text confession__label"
      htmlFor="subjectInput"
    >
      Subject
    </label>

    <p className="confession__formElementInnerContainer">
      <input
        className={
          validSubject
            ? "confession__formElement--valid"
            : subjectFocused
            ? "confession__formElement--focus-invalid"
            : "confession__formElement--invalid"
        }
        onChange={(e) => checkValidSubject(e.target.value)}
        onFocus={(e) => setSubjectFocused(true)}
        onBlur={(e) => setSubjectFocused(false)}
        type="text"
        id="subjectInput"
      ></input>{" "}
      {!validSubject && (
        <span className="confession__validation">
          Subject is required.
        </span>
      )}
    </p>
  </div>
    );
}

export default ConfessionFormSubject;