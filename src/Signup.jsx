import './Signup.css';

 
function Signup(){
     
    return(
        <div className='main'>
            <div className='header-box'>
                <h1 className='Sign'>Signup</h1>
                {invalid && <p>Invalid Details</p>}
                <input type="text"  
                placeholder='Enter First Name' 
                className='input-box-1'/>
                
                <input type="text"  
                placeholder='Enter Second Name' 
                className='input-box-2'/>

                <input type="email"  
                placeholder='Enter Email' 
                className='input-box-3'/>

                <input type="date"  
                className='input-box-4'/>

                <button className='Button-container' 
                onClick={Submit}>
                Submit</button>
                    
                <p>Login Your Account <strong>Login</strong></p>
            </div>
        </div>
    )
}

export default Signup;