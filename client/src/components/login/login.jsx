import React from "react";
import {
  Container,
  ImgWrap,
  FormWrapper,
  TextWrap,
  Greeting,
  Descr,
  InputWrap
} from "./style";
import TextField from '@mui/material/TextField';

const Login = () => {
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
        <TextField id="outlined-basic" label="Outlined" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="filled" />
        </InputWrap>
      </FormWrapper>
    </Container>
  );
};

export default Login;
