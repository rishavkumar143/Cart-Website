import { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

let data = [
  { name: 'RISHAV', pass: '123456' },
  { name: 'AMAN', pass: '234567' },
  { name: 'PRIYA', pass: '345678' },
  { name: 'ROHAN', pass: '456789' },
  { name: 'ANJALI', pass: '567890' },
  { name: 'KARAN', pass: '678901' },
  { name: 'NEHA', pass: '789012' },
  { name: 'SUMIT', pass: '890123' }
];

function Login() {
  const [input, setinput] = useState('');
  const [input2, setinput2] = useState('');
  const [sms, setsms] = useState(false);
  const [sms2, setsms2] = useState(false);
  const [invalid, setinvalid] = useState(false);
  const Navigate = useNavigate();

  const submit = () => {
    let userFound = data.find(
      (user) => user.name.toLowerCase() === input.toLowerCase() && user.pass === input2
    );

    if (input === '') {
      setsms(true);
    } else {
      setsms(false);
    }

    if (input2 === '') {
      setsms2(true);
    } else {
      setsms2(false);
    }

    if (input !== '' && input2 !== '') {
      if (userFound) {
        setinvalid(false);
        Navigate('/App');
      } else {
        setinvalid(true);
        setTimeout(() => setinvalid(false), 2000);
      }
    }
  };

  return (
    <div className='main'>
      <div className='header'>
        <p className='log'>Log-in</p>
        {invalid && <p className='text-c'>Invalid Name & Password!</p>}

        <div className='input1'>
          <input
            type='text'
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <label>Name</label>
          {sms && <p className='text-a'>Please enter name!</p>}
        </div>

        <div className='input2'>
          <input
            type='password'
            value={input2}
            onChange={(e) => setinput2(e.target.value)}
          />
          <label>Password</label>
          {sms2 && <p className='text-b'>Please enter password!</p>}
        </div>

        <div className='btn-container'>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
