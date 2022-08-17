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
  padding: 4px 0px;
  margin-top: 40px;
  input {
    padding: 30px 25px 5px 25px;
    font-family: "SF Medium";
    font-size: 18px;
    line-height: 14px;
    color: #2f2f2f;
    width: 100%;
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
