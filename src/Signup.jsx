import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';


let data={
        name:'rishav',
        second:'kumar',
        email:'rishavkumar27113@gmail.com'
    }
function Signup(){
    const [input1,setinput1]=useState('');

    const [input2,setinput2]=useState('');

    const [input3,setinput3]=useState('')
    
    const [input4,setinput4]=useState('');
    
    const [sms1,setsms1]=useState(false);
    
    const [sms2,setsms2]=useState(false);
    
    const [sms3,setsms3]=useState(false);
    
    const [sms4,setsms4]=useState(false);
    
    const [invalid,setinvalid]=useState(false)

    const Navigate = useNavigate();
    const Submit =()=>{
        let userfound = data.find(
            (user)=>user.toLowerCase() === input1.toLowerCase() && 
            input2.toLowerCase() && input3.toLowerCase() && 
            input4.toLowerCase()
        )
        if(input1 ===''){
            setsms1(true);
        }else{
            setsms1(false);
        }
        if(input2===''){
            setsms2(true)
        }else{
            setsms2(false)
        }
        if(input3===''){
            setsms3(true)
        }else{
            setsms3(false)
        }
        if(input4===''){
            setsms4(true)
        }else{
            setsms4(false)
        }
        if(input1 !== '' && input2 !== '' && input3 !== ''){
            if(userfound){
                setinvalid(false);
                Navigate('/App');
            }else{
                setinvalid(true);
                setTimeout(()=>setinvalid(false),5000)
            }
        } 
    };
    const navigate=useNavigate();
    const handleLoginClick=()=>{
        navigate("/");
    } 
    return(
        <div className='main'>
            <div className='header-box'>
                <h1 className='Sign'>Signup</h1>
                {invalid && <p>Invalid Details</p>}
                <input type="text" 
                value={input1} 
                onChange={(e)=>
                setinput1(e.target.value)} 
                placeholder='Enter First Name' 
                className='input-box-1'/>
                
                <input type="text" 
                value={input2} 
                onChange={(e)=>
                setinput2(e.target.value)} 
                placeholder='Enter Second Name' 
                className='input-box-2'/>

                <input type="email" 
                value={input3} 
                onChange={(e)=>
                setinput3(e.target.value)} 
                placeholder='Enter Email' 
                className='input-box-3'/>

                <input type="date" 
                value={input4} 
                onChange={(e)=>
                setinput4(e.target.value)} 
                className='input-box-4'/>

                <button className='Button-container' 
                onClick={Submit}>
                Submit</button>
                    
                <p>Login Your Account <strong onClick={handleLoginClick}>Login</strong></p>
            </div>
        </div>
    )
}

export default Signup;