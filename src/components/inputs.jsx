import React from "react";
function Input(params){
 
    return(
        <div>
        <label htmlFor={params.name}>{params.labelText}</label>
        <input type={params.type} id={params.id} name={params.name} onChange={params.onChange} />
      </div> 
    )
}
export default Input;


