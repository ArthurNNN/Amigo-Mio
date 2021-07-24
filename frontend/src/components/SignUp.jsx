import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = ()=> {
    // state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setState = [setName, setEmail, setPassword];

    // api
    const API = "";

    // functions
    const handleOnChange = event => {
        let id = event.target.id;
        let value = event.target.value;
        switch (id) {
            case "name":
                setName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)        
                break;
            default:
                console.error('id does not exist')
                break;
        };
    };

    const handleOnSubmit = event => {
        event.preventDefault();

        const newUser = {
            "name": name,
            "email": email,
            "password": password
        };
        // console.log(newUser)
        fetch(API, {
            method: 'POST', 
            headers: {
                'Content-Type': 'appliclation/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.isAutheticated) {
                alert('User created successfully')
            }else {
                alert(data.messageError)
            }
        });

        setState.forEach(state => state(""))
    }

    return(
        <main className="main-sign-up">
            <div className="div-sign-up">
                <center><h1>Register With Us</h1></center>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input onChange={handleOnChange} type="text" 
                               className="form-control" id="name" 
                               placeholder="name" value={name} autoComplete="on"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input onChange={handleOnChange} type="email" 
                               className="form-control" id="email" 
                               placeholder="email@email.com" value={email} autoComplete="on"/>
                    </div>
                    <div className="mb-5">
                        <label  className="form-label">Password</label>
                        <input onChange={handleOnChange} type="password" 
                               className="form-control" id="password" 
                               placeholder="passsword" value={password} autoComplete="on"/>
                    </div>
                    <div className="mb-4">
                        <button className="btn btn-primary form-control" type="submit">Submit</button>
                    </div>
                    <div className="mb-3">
                        <center>Already hace an count? <Link to="/login">Login</Link></center>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignUp;