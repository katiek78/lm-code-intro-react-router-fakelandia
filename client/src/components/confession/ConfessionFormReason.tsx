import { useState } from "react";
import { MISDEMEANOURS } from "../../types/misdemeanours.types";

interface ConfessionFormReasonProps {
  validReason: boolean;
  setValidReason: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfessionFormReason: React.FC<ConfessionFormReasonProps> = ({
  validReason,
  setValidReason,
}) => {
  const [reasonFocused, setReasonFocused] = useState<boolean>(false);

  const checkValidReason = (value: string) => {
    if (value !== "") {
      setValidReason(true);
    } else setValidReason(false);
  };

  return (
    <div className="confession__formElementOuterContainer">
      <label
        className="confession__text confession__label"
        htmlFor="reasonSelect"
      >
        Reason for contact:
      </label>
      <p className="confession__formElementInnerContainer">
        <select
          className={
            validReason
              ? "confession__formElement--valid"
              : reasonFocused
              ? "confession__formElement--focus-invalid"
              : "confession__formElement--invalid"
          }
          defaultValue=""
          placeholder="Please select a reason..."
          onChange={(e) => checkValidReason(e.target.value)}
          onFocus={(e) => setReasonFocused(true)}
          onBlur={(e) => setReasonFocused(false)}
          id="reasonSelect"
        >
          <option value="" disabled>
            Please select a reason...
          </option>
          {MISDEMEANOURS.map((m, index) => (
            <option key={"option" + index} value={m}>
              {m}
            </option>
          ))}
          <option value="just-talk">I just want to talk</option>
        </select>
        {!validReason && (
          <span className="confession__validation">
            A reason must be selected.
          </span>
        )}
      </p>
    </div>
  );
};

export default ConfessionFormReason;
