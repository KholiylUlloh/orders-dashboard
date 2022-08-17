import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ImgWrap = styled.div`
  flex: 2;
  height: 100vh;
  background-image: url(${(props) => props.main});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1.2;
  height: 100vh;
  background-color: #e5e5e5;
  button {
    font-family: "SF Medium";
    font-size: 18px;
    line-height: 14px;
    color: #ffffff;
    background: #2d3a45;
    mix-blend-mode: normal;
    opacity: 0.8;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 6px;
    width: 20vw;
    padding: 30px 0;
    margin-top: 2rem;
  }
`;

const TextWrap = styled.div`
  width: 20vw;
`;

const Greeting = styled.div`
  font-family: "SF Medium";
  font-size: 24px;
  line-height: 14px;
  color: #2d3a45;
`;

const Descr = styled.div`
  font-family: "SF Light";
  font-size: 16px;
  line-height: 20px;
  color: #8d9ba8;
  margin-top: 12px;
`;

const InputWrap = styled.div`
  width: 20vw;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  padding: 4px 7px;
  margin-top: 40px;
  input {
    padding: 25px 25px;
    font-family: "SF Medium";
    font-size: 18px;
    line-height: 14px;
    color: #2f2f2f;
    width: 100%;
    outline: none;
    border: none;
  }
  .wrap {
    position: relative;
  }
  .wrap::before {
    content: "";
    position: absolute;
    border-left: 5px solid #fcb600;
    height: 4.5rem;
    bottom: 0;
    border-radius: 0px 100px 100px 0px;
  }
`;

export {
  Container,
  FormWrapper,
  ImgWrap,
  TextWrap,
  Greeting,
  Descr,
  InputWrap,
};
