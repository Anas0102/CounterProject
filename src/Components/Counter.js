import {  useState } from "react"

function Counter(){
    const [conteur,setconteur]=useState(0);
   
    
    return(<div className="Counter">
    <h1 className="h1" style={{color:conteur>0 ?'blue':conteur<0 ? 'red':'black'}}>{conteur}</h1>
    <button onClick={()=>setconteur(conteur-1)} className="Decreasebutton">-</button>
    <button onClick={()=>setconteur(conteur+1)} className="Increasebutton" >+</button>
    </div>)
}
export default Counter