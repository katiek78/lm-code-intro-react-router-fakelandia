import React, { useContext, useState } from "react";
import { Misdemeanour } from '../types/misdemeanours.types';

interface MisdemeanourContext {
    misdemeanours: Misdemeanour[],
    setMisdemeanours: React.Dispatch<React.SetStateAction<Misdemeanour[]>>
}

const MisdemeanourContext = React.createContext<MisdemeanourContext>({misdemeanours: [], setMisdemeanours: () => {}});

export function useMisdemeanours() {
    return useContext(MisdemeanourContext)
  }

export default MisdemeanourContext;