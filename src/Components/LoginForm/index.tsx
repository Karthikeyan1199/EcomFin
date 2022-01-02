import React,{useCallback,useState} from 'react';
import InputField from '../Custom/InputField';
import  './Login.css'
enum LoginForm{
    userName='userName',
    passWord='passWord'
}
const Login=()=>{
    const [loginState,setLoginState]=useState({userName:'karthi',passWord:''})
    console.log(loginState);
    return(
       <div class="center">
      <h1>Login</h1>
      <div className='centerForm'>
        <InputField type={'text'} label={'Username'} required={true} value={loginState.userName||''} onChange={e=>setLoginState({...loginState,[LoginForm.userName]:e['target'].value})}
                 ></InputField>
        <InputField type={'password'} label={'Password'} required={true} value={loginState.passWord||''} onChange={e=>setLoginState({...loginState,[LoginForm.passWord]:e['target'].value})}></InputField>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login"/>
        <div className="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
        </div>
    </div>
    )
}
export default Login;
