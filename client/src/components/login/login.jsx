import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import {
  Container,
  ImgWrap,
  FormWrapper,
  TextWrap,
  Greeting,
  Descr,
  InputWrap
} from "./style";

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
      .then(data => {
        console.log(data.message);
        navigate('/welcome')
      })
  }
  return (
    <Container>
      <ImgWrap main={require("../../assets/images/main.png")}></ImgWrap>
      <FormWrapper>
        <TextWrap>
          <Greeting>Tizimga xush kelibsiz !</Greeting>
          <Descr>
            Tizimga kirish uchun, login va parol orqali autentifikatsiya
            jarayonidan o’ting
          </Descr>
        </TextWrap>
        <InputWrap>
          <div className="wrap">
            <input onChange={(e) => setEmail (e.target.value)} value={email} type="text" placeholder="Email" />
          </div>
          <div className="wrap">
            <input onChange={(e) => setPassword (e.target.value)} value={password} type="text" placeholder="Parol" />
          </div>
        </InputWrap>
        <button onClick={onSubmit}>Tizimga Kirish</button>
      </FormWrapper>
    </Container>
  );
};

export default Login;
