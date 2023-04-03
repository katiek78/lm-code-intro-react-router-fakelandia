import { ConfessionType } from '../../types/confession.types'

export default async function postConfession(confession: ConfessionType) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },       
        body: JSON.stringify(confession)
    };
    const response = await fetch("http://localhost:8080/api/confess", requestOptions);
    const result = await response.json();      
    return result;    
}  
