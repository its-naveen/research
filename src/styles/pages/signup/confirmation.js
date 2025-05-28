import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // background-color: #f0f0f0;
  width: 350px;
  margin: 0 auto;
`;

export const ConfirmationHeader = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 20px;
`;

export const ImageIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  color: green;
`;
