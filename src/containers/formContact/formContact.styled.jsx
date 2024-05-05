import styled from "styled-components";

import { colors } from "@/utils/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  position: relative;
  width: 80%;
  outline: none;
  border: 1px ${colors.gray} solid;
  background: rgba(0,0,0,0.15);
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }

  @media (max-width: 650px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const ContainerError = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 80%;
    margin-top: 4px;
`;

export const Error = styled.p`
    font-size: 12px;
    font-style: italic;
    color: red;
    margin: 0;
    padding: 0;
`;

export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  background: ${colors.gray};
  margin-top: 30px;
  padding: 8px 20px;
  border: 2px ${colors.gold} solid;
  border-radius: 10px;
  color: ${colors.gold};
`;

export const InputArea = styled.textarea`
  position: relative;
  width: 80%;
  height: 200px;
  outline: none;
  border: 1px ${colors.gray} solid;
  background: rgba(0,0,0,0.15);
  margin-top: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }

  @media (max-width: 650px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

export const Notification = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  margin: 0;
  padding: 0;
`;
