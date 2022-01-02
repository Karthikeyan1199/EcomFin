 import React from 'react';
 import './InputField.css'
interface InputfieldProps{
    type:string;
    label:string;
    required:boolean;
    value:string;
    onChange:(value:string)=>void;
}
const InputField=(props:InputfieldProps)=>{
    return ( <div className="txt_field">
    <input type={props.type} required={props.required} value={props.value} onChange={props.onChange}/>
    <span></span>
    <label>{props.label}</label>
  </div>)
}
export default InputField;