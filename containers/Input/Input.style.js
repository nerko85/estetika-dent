import styled from "styled-components";

const InputRoot = styled.div`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const InputContent = styled.input`
  padding: 1.8rem 3rem;
  color: ${({ theme }) => theme.darkGray};
  border: ${({ hasError, theme }) =>
    hasError ? "1px solid rgb(234, 0, 40)" : theme.gold};
  transition-timing-function: ease;
  transition-duration: 0.2s;
  transition-property: box-shadow, color, border-color;
  &:focus {
    border-color: rgb(36, 120, 204);
    box-shadow: rgb(47 107 195) 0px 0px 5px;
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

const TextArea = styled.textarea`
  min-height: 150px;
  padding: 1.8rem 3rem;
  color: ${({ theme }) => theme.text};
  border: ${({ hasError, theme }) =>
    hasError ? "1px solid rgb(234, 0, 40)" : theme.gold};
  transition-timing-function: ease;
  transition-duration: 0.2s;
  transition-property: box-shadow, color, border-color;
  &:focus {
    border-color: rgb(36, 120, 204);
    box-shadow: rgb(47 107 195) 0px 0px 5px;
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

const InputErrorBox = styled.span`
  color: #ff6271;
  font-size: 12px;
  font-weight: 700;
  margin: 4px 0;
  text-align: center;
`;

export { InputRoot, InputContent, InputErrorBox, TextArea };
