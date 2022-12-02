import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import './HeaderDisplay.css';
import Login from "./Login";

const HeaderDisplay = (props) => {
    const [isInput, setIsInput] = useState(false)
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    // validation
    const [isValid, setIsValid] = useState(false)
    const [isLastName, setIsLastName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPassword2, setIsPassword2] = useState(false)
    const [isValidation, setIsValidation] = useState(false)

    const history = useHistory();
    // const [firstName, setFirstName] = useState('')
    const handleSubmit = async (e) => {
        // console.log("=>", e)
        e.preventDefault()
        let data = { firstname, lastname, email, password, password2 }
        console.warn("signup", data)
        let result = await fetch("https://useapi.herokuapp.com/api/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.warn("success", result)
        if (result.success === true) {
            localStorage.setItem("register", JSON.stringify(result))
            sessionStorage.setItem("register", JSON.stringify(result))
        }



        //  history.push('/add')
        if (localStorage.getItem("register")) {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setPassword2('');
        }

        if (result.success === true) {
            setIsValidation(true)
        } else {
            setIsValidation(false)
        }

    }

    useEffect(() => {
        if (localStorage.getItem("register")) {
            history.push('/')
        }
    }, [])

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    let auth = localStorage.getItem("register")

    const handleRight = () => {
        document.querySelector(".form___boxes")?.classList.add('active')
    }
    const handleLeft = () => {
        document.querySelector(".form___boxes")?.classList.remove('active')
    }

    // validation
    const handleFirst = (e) => {
        setFirstName(e.target.value)

        if (e.target.value.length === 0) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }
    const handleLast = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length === 0) {
            setIsLastName(true)
        } else {
            setIsLastName(false)
        }

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length === 0) {
            setIsEmail(true)
        } else {
            setIsEmail(false)
        }

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setIsPassword(true)
        } else {
            setIsPassword(false)
        }

    }
    const handleConformPassword = (e) => {
        setPassword2(e.target.value)
        if (e.target.value === password) {
            setIsPassword2(true)
        } else if (e.target.value.length === 0) {
            setIsPassword2(false)
        }
        else {
            setIsPassword2(false)
        }

    }

    const styles = {
        active: {
            background: "#a31490",
            color: "#fff"
        },
        hidden: {
            transition: "all 0.5s",
            background: '#a15597',
            color: '#e8e8e8'
        }

    }
    return (
        <Fragment>

            <div className="signIn___login">
                <div className="signIn___login_2nd">
                    {/* <div className="signIn___alert">{auth? "success" : "false"}</div> */}

                    <div className="signIn___form">
                        <div className="signIn___form___2nd">
                            <div className="signUp___box">
                                <h2>Don't Have An Account ?</h2>
                                <button className="signUp___btn" onClick={handleLeft}>Sign Up</button>
                            </div>
                            <div className="signIn___box">
                                <h2>Already Have An Account ?</h2>
                                <button className="signIn___btn" onClick={handleRight}>Sign In</button>
                            </div>
                            <div className="form___boxes">

                                <div className="form___signIn">
                                    <h2>Sign Up</h2>
                                    <form>
                                        <input type='text' value={firstname} placeholder="First Name" onChange={handleFirst} />
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-146px' }}>{!isValid ? "" : "Enter First Name"}</span>
                                        <input type='text' value={lastname} placeholder="Last Name" onChange={handleLast} />
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-146px' }}>{!isLastName ? "" : "Enter Last Name"}</span>

                                        <input type='email' value={email} placeholder="Email" onChange={handleEmail} />
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-170px' }}>{!isEmail ? "" : "Enter Email"}</span>

                                        <input type='text' value={password} placeholder="Password" onChange={handlePassword} />
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-85px' }}>{!isPassword ? "" : "Enter Password(min-length: 8)"}</span>

                                        <input type='text' value={password2} placeholder="Conform Password" onChange={handleConformPassword} />
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-95px' }}>{isPassword2 ? (<span style={{ color: 'green', display: 'flex', justifyContent: 'start', marginLeft: '-57px' }}>Verify Success</span>) : password === password2 ? " " : "Your Password not matched"}</span>

                                        <button type="submit" className={!isValidation? styles.hidden: styles.active} onClick={handleSubmit}>submit</button>
                                        <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-146px' }}>
                                            {!isValidation ?
                                                // (<span style={{ color: '#7cb444', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-37px' }}><img src="https://i.ibb.co/VTMM3P0/Spinner-5.gif" width='30px' height='30px' alt="Spinner-5" border="0" /> Wait a while...</span>)
                                                ""
                                                :
                                                (<span style={{ color: 'green', display: 'flex', justifyContent: 'start', marginLeft: '-7px', fontSize: '13px', fontVariant: 'small-caps' }}>Registration Successful</span>)
                                            }
                                        </span>

                                    </form>
                                </div>

                                <div className="form___login">
                                    <h2>Sign In</h2>
                                    <Login />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </Fragment>
    )
}

export default HeaderDisplay;