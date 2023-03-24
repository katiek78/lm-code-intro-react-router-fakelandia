import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourContext from "./MisdemeanourContext";
import MisdemeanourDisplay from "./MisdemeanourDisplay";
import loadMisdemeanours from "./loadMisdemeanour";

const Misdemeanours: React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {  
    const getMisdemeanours = async () => {
        const result = await loadMisdemeanours();
        setMisdemeanours(result.misdemeanours);           
        console.log('called API');                                            
    };    
    getMisdemeanours();    
  }, []);
 
  return (    
        <MisdemeanourContext.Provider value={misdemeanours}>
        {misdemeanours.length > 0 &&  <MisdemeanourDisplay /> }
        </MisdemeanourContext.Provider>               
  );
};
export default Misdemeanours;
