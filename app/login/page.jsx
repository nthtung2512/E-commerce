"use client"
import "@styles/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAppContext } from "@components/PathProvider";

const LoginContent = ({ handleEmailSubmit, handleEmailChange, haveEmail, email }) => {
  return (
    <div>
      <p className="text-3xl font-bold mt-5 mb-2">Enter your email address to sign in or to create an account</p>
      <form onSubmit={handleEmailSubmit} style={{ display: haveEmail ? "none" : "" }}>
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          margin="normal"
        />

        <Button type="submit" variant="contained" color="secondary" sx={{ width: "100%", borderRadius: "20px"}}>
          Continue
        </Button>
      </form>
    </div>
  )
}

const RegisterContent = ({ handlePasswordSubmit, handlePasswordChange, haveEmail, setHaveEmail, email, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <p className="font-bold text-2xl mt-5 mb-3">Create a Password</p>
      <p>{email}</p>
      <p className="cursor-pointer text-customPurple underline" onClick={() => {setHaveEmail(false)}}>Use a Different Email</p>
      <form onSubmit={handlePasswordSubmit} style={{ display: haveEmail ? "" : "none" }}>
        <TextField
          label="Create Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          margin="normal"
          placeholder="Minimum 6 characters"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="secondary" sx={{ width: "100%", borderRadius: "20px", mt: "10px"}}>
          Create Account
        </Button>
        <p>
          By creating an account, you are agreeing to our privacy policy and terms of use.
        </p>
        <p className="mt-3">Have an account? <span className="cursor-pointer text-customPurple font-bold" onClick={() => setHaveEmail(false)}>Sign In</span></p>
      </form>
    </div>
  )
}

const Login = () => {
  const {haveAccount, setHaveAccount, account, setAccount} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [haveEmail, setHaveEmail] = useState(false);
  const router = useRouter()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setHaveEmail(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const newAccount = { email: email, password: password };
    setAccount([...account, newAccount]);
    setHaveAccount(true);
    router.push('/')
  };

  return (
    <div className="flex w-full min-h-screen max-h-full flex-col" >
      <div className="flex pt-5 pb-3" style={{width: "80%", marginLeft: "10%", borderBottom: "1px solid black"}}>
        <Logo />
        <p className="flex flex-grow justify-end text-xl">Secure Login</p>
      </div>
      

      <div className="flex flex-col justify-center text-center" style={{padding: "10px 40vw"}}>
        {haveEmail ? (
          <RegisterContent
            email={email}
            password={password}
            haveEmail={haveEmail}
            setHaveEmail={setHaveEmail}
            handlePasswordSubmit={handlePasswordSubmit}
            handlePasswordChange={handlePasswordChange}
          />
        ) : (
          <LoginContent
            email={email}
            haveEmail={haveEmail}
            handleEmailSubmit={handleEmailSubmit}
            handleEmailChange={handleEmailChange}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Login;
