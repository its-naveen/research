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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 350px;
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