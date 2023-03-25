import { useState } from "react";

interface ConfessionFormDetailsProps {
    validDetails: boolean;
    setValidDetails: React.Dispatch<React.SetStateAction<boolean>>;
  }

const ConfessionFormDetails: React.FC<ConfessionFormDetailsProps> = ({validDetails, setValidDetails}) => {    
  const [detailsFocused, setDetailsFocused] = useState<boolean>(false);

  const checkValidDetails = (value: string) => {
    if (value.length > 14) {
      setValidDetails(true);
    } else setValidDetails(false);
  };

  return (
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
      {!validDetails && (
        <span className="confession__validation">
          Details should be at least 15 characters.
        </span>
      )}
    </div>
  );
};

export default ConfessionFormDetails;
