import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: #f0f0f0;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  border-radius: 5px;
  border: solid 1px #ccc;
  width: 380px;
  background-color: #fff;
  padding: 24px;
  gap: 10px;
`;

export const SignupTitle = styled.h3`
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 20px;
  text-align: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const LoginLink = styled.span`
  color: var(--text-color);
  font-size: 12px;
`;

export const LoginText = styled.span`
  color: var(--primary-color);
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;

  &:hover {
    color: var(--secondary-color);
  }
`;