import { useState, useEffect } from "react";
import postConfession from "./postConfession";
import {
  JustTalk,  
  MisdemeanourKind,
  isMisdemeanourKindorJustTalk
} from "../types/misdemeanours.types";
import { ConfessionType } from "../types/confession.types";
import { useMisdemeanours } from "./MisdemeanourContext";
import ConfessionFormSubject from "./ConfessionFormSubject";
import ConfessionFormReason from "./ConfessionFormReason";
import ConfessionFormDetails from "./ConfessionFormDetails";
import ConfessionFormButton from "./ConfessionFormButton";

const ConfessionForm: React.FC = () => {

    const [confessionEnabled, setConfessionEnabled] = useState<boolean>(false);
    const [validSubject, setValidSubject] = useState<boolean>(false);
    const [validDetails, setValidDetails] = useState<boolean>(false);
    const [validReason, setValidReason] = useState<boolean>(false);      
    const [postConfessionMessage, setPostConfessionMessage] =
      useState<string>("");
    const { misdemeanours, setMisdemeanours } = useMisdemeanours();
  
    const confess = async () => {
      const subjectInput: HTMLInputElement | null =
        document.getElementsByTagName("input")[0];
      if (!subjectInput) return;
      const subject = subjectInput.value;
  
      const reasonInput: HTMLSelectElement | null =
        document.getElementsByTagName("select")[0];
      if (!reasonInput) return;
  
      if (!isMisdemeanourKindorJustTalk(reasonInput.value)) return;
      const reason: MisdemeanourKind | JustTalk = reasonInput.value;
  
      const detailsInput: HTMLTextAreaElement | null =
        document.getElementsByTagName("textarea")[0];
      if (!detailsInput) return;
      const details = detailsInput.value;
  
      const confession: ConfessionType = {
        subject,
        reason,
        details,
      };
  
      const postingResult = await postConfession(confession);
      if (!postingResult.success) {
        setPostConfessionMessage(`Error: ${postingResult.message}`);
      } else if (!postingResult.justTalked) {
        if (reason === "just-talk") return;
        //Add new misdemeanour to list
        setMisdemeanours(
          misdemeanours.concat([
            {
              misdemeanour: reason,
              citizenId: Math.floor(Math.random() * 10000),
              date: new Date().toLocaleDateString("en-GB"),
            },
          ])
        );
        setPostConfessionMessage(
          `Thanks for submitting your confession. Rest assured it's been added to our list.`
        );
      } else {
        setPostConfessionMessage(
          `Thanks for talking to us. We appreciate it and are always ready to listen.`
        );
      }
    };
  
    useEffect(() => {
      if (validSubject && validDetails && validReason) {
        setConfessionEnabled(true);
      } else setConfessionEnabled(false);
    }, [validSubject, validDetails, validReason]);

        return(
<form className="confession__form">
          <ConfessionFormSubject validSubject={validSubject} setValidSubject={setValidSubject} />
          <ConfessionFormReason validReason={validReason} setValidReason={setValidReason} />
          <ConfessionFormDetails validDetails={validDetails} setValidDetails={setValidDetails} /> 
          <ConfessionFormButton confessionEnabled={confessionEnabled} confess={confess} />                    
          <p className="confession__message">{postConfessionMessage}</p>
        </form>

        );

}

export default ConfessionForm;