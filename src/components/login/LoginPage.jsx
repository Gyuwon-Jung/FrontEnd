import React from "react";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <Container>
            <Background>
                <LoginContainer>
                    <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0fb7d19420b49620e44ffec33f9f352942121ed9df81e5d43ba13a237c88fde?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Logo" />
                    <LoginContent>
                        <Divider />
                        <LoginTitle>이메일 로그인</LoginTitle>
                        <LoginForm>
                            <InputGroup>
                                <EmailInput type="email" placeholder="aaaa@gmail.com" />
                                <PasswordInput type="password" placeholder="**********" />
                            </InputGroup>
                            <LoginButton>로그인</LoginButton>
                        </LoginForm>
                        <SocialLoginSection>
                            <KakaoLoginButton>
                                <KakaoLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/66a3379e7d4746622c955ea521cf5d8bcf63b86037eabc25fd9ad363ab291199?apiKey=a9a9d68966df47cab33790d709ea20f1&" alt="Kakao Logo" />
                                <span>Kakao Login</span>
                            </KakaoLoginButton>
                            <RememberLoginCheckbox>
                                <Checkbox />
                                <label>로그인 상태 유지</label>
                            </RememberLoginCheckbox>
                        </SocialLoginSection>
                        <AdditionalOptions>
                            <ResetPasswordLink>비밀번호 재설정</ResetPasswordLink>
                            <SignUpSection>
                                <SignUpText>회원이 아니신가요?</SignUpText>
                                <SignUpLink>회원가입</SignUpLink>
                            </SignUpSection>
                        </AdditionalOptions>
                    </LoginContent>
                </LoginContainer>
            </Background>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    
`;

const LoginContainer = styled.main`
  border-radius: 5.879px;
  box-shadow: 0px 2.352px 2.352px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 708px;
  padding: 32px 0;
  margin: auto; /* 추가: 자동으로 모든 방향에서 중앙 정렬 */
  margin-top: 15% /* 나중에 전역모달 선언시 삭제 예정 */
`;

const LogoImage = styled.img`
  width: 176px;
  max-width: 100%;
`;

const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 27px;
  padding: 0 41px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Divider = styled.hr`
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LoginTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 25px 0 0 68px;
  font: 700 24px Pretendard, sans-serif;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 516px;
  margin-top: 42px;
  font-size: 19px;
  color: #000;
  font-weight: 400;
  white-space: nowrap;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const EmailInput = styled.input`
  font-family: Pretendard, sans-serif;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const PasswordInput = styled.input`
  font-family: Syncopate, sans-serif;
  padding: 10px;
  margin-top: 19px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const LoginButton = styled.button`
  font-family: Pretendard, sans-serif;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  margin-top: 11px;
  padding: 15px 35px;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const SocialLoginSection = styled.section`
  display: flex;
  gap: 20px;
  width: 333px;
  max-width: 100%;
  margin-top: 44px;
  font-size: 12px;
  color: #000;
  font-weight: 400;
  text-align: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const KakaoLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
`;

const KakaoLogo = styled.img`
  width: 32px;
`;

const RememberLoginCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  cursor: pointer;
`;

const Checkbox = styled.span`
  background-color: #e0e0e0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const AdditionalOptions = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 555px;
  margin-top: 99px;
  font-size: 18px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const ResetPasswordLink = styled.a`
  color: #000;
  font-family: Syncopate, sans-serif;
  font-weight: 400;
  flex-grow: 1;
  text-decoration: none;
  cursor: pointer;
`;

const SignUpSection = styled.div`
  display: flex;
  gap: 20px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
`;

const SignUpText = styled.span`
  font-family: Pretendard, sans-serif;
  flex-grow: 1;
`;

const SignUpLink = styled.a`
  font-family: Pretendard, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

export default LoginPage;