import { useState, useEffect } from "react";
import { MISDEMEANOURS } from "../../types/misdemeanours.types";

const Confession: React.FC = () => {
  const [confessionEnabled, setConfessionEnabled] = useState<boolean>(false);
  const [validSubject, setValidSubject] = useState<boolean>(false);
  const [validDetails, setValidDetails] = useState<boolean>(false);
  const [validReason, setValidReason] = useState<boolean>(false);
  const [subjectFocused, setSubjectFocused] = useState<boolean>(false);
  const [reasonFocused, setReasonFocused] = useState<boolean>(false);
  const [detailsFocused, setDetailsFocused] = useState<boolean>(false);

  const checkValidSubject = (value: string) => {
    if (value.length > 0) {
      setValidSubject(true);
    } else {
      setValidSubject(false);
    }
  };

  const checkValidDetails = (value: string) => {
    if (value.length > 14) {
      setValidDetails(true);
    } else setValidDetails(false);
  };
  const checkValidReason = (value: string) => {
    if (value !== "") {
      setValidReason(true);
    } else setValidReason(false);
  };

  useEffect(() => {
    if (validSubject && validDetails && validReason) {
      setConfessionEnabled(true);
    } else setConfessionEnabled(false);
  }, [validSubject, validDetails, validReason]);

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

        <form className="confession__form">
          <div className="confession__formElementOuterContainer">
            <label className="confession__text confession__label" htmlFor="subjectInput">
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
            {!validSubject && <span className="confession__validation">Subject is required.</span>}            
            </p>            
          </div>

          <div className="confession__formElementOuterContainer">         
            <label className="confession__text confession__label" htmlFor="reasonSelect">
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
            {!validReason && <span className="confession__validation">A reason must be selected.</span>}
          </p>
          </div>

            <div className="confession__textAreaContainer">
          <textarea
            className={
              "confession__textArea " +
              (validDetails
                ? "confession__formElement--valid"
                : detailsFocused
                ? "confession__formElement--focus-invalid"
                : "confession__formElement--invalid")
            }
            onChange={(e) => checkValidDetails(e.target.value)}
            onFocus={(e) => setDetailsFocused(true)}
            onBlur={(e) => setDetailsFocused(false)}
            id="confessionDetails"
            rows={15}
            cols={80}
          ></textarea>
          {!validDetails && <span className="confession__validation">Details should be at least 15 characters.</span>}
          </div>
          <button
            disabled={!confessionEnabled}
            className="confession__button confession__button-text"
          >
            Confess
          </button>
        </form>
      </div>
    </>
  );
};

export default Confession;
