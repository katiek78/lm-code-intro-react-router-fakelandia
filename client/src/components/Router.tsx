import { Routes, Route } from 'react-router-dom';
import Confession from './Confession';
import Home from './Home';
import Misdemeanours from './Misdemeanours';
import Error404 from './Error404';
import MainLayout from './MainLayout';

import { useEffect, useState } from 'react';
import loadMisdemeanours from './loadMisdemeanour';
import { Misdemeanour } from '../types/misdemeanours.types';
import MisdemeanourContext from './MisdemeanourContext';

const Router: React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

    useEffect(() => {  
      const getMisdemeanours = async () => {
          const result = await loadMisdemeanours();
          setMisdemeanours(result.misdemeanours);                                                   
      };    
      getMisdemeanours();    
    }, []);
  

   return (
    <MisdemeanourContext.Provider value={{misdemeanours, setMisdemeanours}}>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="/confession" element={<Confession />}></Route>
                <Route path="/misdemeanours" element={<Misdemeanours />}></Route>
                <Route path="*" element={<Error404></Error404>} />
            </Route>
        </Routes>
    </MisdemeanourContext.Provider>
)
    }

export default Router;