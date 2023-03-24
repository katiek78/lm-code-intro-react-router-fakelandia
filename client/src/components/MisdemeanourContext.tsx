import React, { useContext, useState } from "react";
import { Misdemeanour } from '../types/misdemeanours.types';

const MisdemeanourContext = React.createContext<Misdemeanour[]>([]);

export function useMisdemeanours() {
    return useContext(MisdemeanourContext)
  }

export default MisdemeanourContext;