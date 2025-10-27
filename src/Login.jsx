import { useState } from 'react'
import './Login.css';
//import App from './App'
import { useNavigate } from "react-router-dom"

let data = {
  name: 'RISHAV',
  pass: 123456
}
function Login() {
  const [input, setinput] = useState('')
  const [input2, setinput2] = useState('')
  const [sms, setsms] = useState(false)
  const [sms2, setsms2] = useState(false)
  const [invalid, setinvalid] = useState(false)
  const Navigate = useNavigate();
  // const [border, setborder] = useState(false)
  let submit = () => {
    if (input !== '') {
      setsms(false)
      if (data.name == input && data.pass == input2) {
        setinvalid(false)
        Navigate('/App')
      }
      else {
        setinvalid(true)
        setTimeout(() => {
          setinvalid(false)
        }, 2000)
      }
    }
    else {
      setsms(true)
    }
    if (input2 !== '') {
      setsms2(false)
    }
    else {
      setsms2(true)
      setinvalid(false)
    }
  }
  return (
    <div className='main'>
      <div className='header'>
        <p className='log'>Log-in</p>
        {invalid && <p className=' text-c'>Invalid Name & Password ! </p>}
        <div className='input1'>
          <input type='text' placeholder='' onChange={(e) => setinput(e.target.value)} />
          <label>Name</label>
          {sms && <p className='text-a'>Plz enter name !</p>}
        </div>
        <div className='input2'>
          <input type='password' placeholder='' required="requrired" onChange={(e) => setinput2(e.target.value)} />
          <label>Password</label>
          {sms2 && <p className='text-b'>Plz enter password !</p>}
        </div>
        <div className='btn-container'>
          <button onClick={submit}>Submit</button><br></br>
        </div>
      </div>
    </div>
  )
}
export default Login;