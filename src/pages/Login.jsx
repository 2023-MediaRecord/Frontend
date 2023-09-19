import { styled } from "styled-components";

const Login = () => {
  return (

      <LoginForm>
          <LoginTitle>LOGIN2</LoginTitle>
          <LoginIdPw>ID</LoginIdPw>
          <InputLogin type="text" name="id" placeholder="아이디" />
          <LoginIdPw>PASSWORD</LoginIdPw>
          <InputLogin type="password" name="password" placeholder="비밀번호" />
          <LoginBtn type="submit" value="로그인" className="submit-btn" />
      </LoginForm>
  
  );
};

export default Login;

const LoginBtn = styled.input`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #8cd5ff;
  border: none;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;

const InputLogin = styled.input`
  color: #111111;
  font-size: 14px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #dbdbdb;
  border-radius: 5px;
  padding: 10px;
  width: 280px;
`;

const LoginForm = styled.div`
  width: 300px;
  border: 0;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.25);
  //position: absolute;
  margin-left: auto;
  margin-top: auto;
`;

const LoginTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;

const LoginIdPw = styled.label`
  font-size: 14px;
  color: #a3a3a3;
  padding-left: 5px;
`;
