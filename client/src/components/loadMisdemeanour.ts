export default async function loadMisdemeanours() {
    const response = await fetch("http://localhost:8080/api/misdemeanours/5");
    const result = await response.json();      
    return result;    
  }  
