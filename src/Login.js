import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // validation
    const [isEmail, setIsEmail] = useState(false)
    const [isValidation, setIsValidation] = useState(false)

    const [isPassword, setIsPassword] = useState(false)
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

    const handleSumit = async (e) => {
        console.log("=>", e)
        e.preventDefault()
        let item = { email, password }
        console.warn("signup", item)
        let result = await fetch("https://useapi.herokuapp.com/api/login", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                // mode: 'no-cors',
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        if (result.success === true) {
            setIsValidation(true)
        } else {
            setIsValidation(false)
        }

    }
    return (
        <>
            <form>
                <input type='email' value={email} placeholder="Email" onChange={handleEmail} />
                <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-170px' }}>{!isEmail ? "" : "Enter Email"}</span>

                <input type='password' value={password} placeholder="Password" onChange={handlePassword} />
                <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-145px' }}>{!isPassword ? "" : "Enter Password"}</span>

                <button type="submit" onClick={handleSumit}>submit</button>
                <span style={{ color: '#ff0000', display: 'flex', justifyContent: 'start', marginLeft: '-146px' }}>
                    {!isValidation ?
                        // (<span style={{ color: '#7cb444', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-37px' }}><img src="https://i.ibb.co/VTMM3P0/Spinner-5.gif" width='30px' height='30px' alt="Spinner-5" border="0" /> Wait a while...</span>)
                        ""
                        :
                        (<span style={{ color: 'green', display: 'flex', justifyContent: 'start', marginLeft: '-7px', fontSize: '13px', fontVariant: 'small-caps' }}>Registration Success</span>)
                    }
                </span>
            </form>

        </>
    )
}

export default Login;