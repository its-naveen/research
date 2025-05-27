import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  width: 350px;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ToastMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 15px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#dff0d8';
      case 'error':
        return '#f2dede';
      case 'warning':
        return '#fcf8e3';
      default:
        return '#d9edf7';
    }
  }};
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ToastText = styled.span`
  flex: 1;
  margin-left: 10px;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 28px;
  line-height: 1;

  &:hover {
    color: #333;
  }
`;
