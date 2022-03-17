import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Stack } from "../Stack/Stack";

const StyledInputTitle = styled.p(
  () => css`
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.extrabold};
    font-size: 20px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${theme.colors["purple-2"]};
    margin-top: 5%;
  `
);

const StyledInputField = styled.input(
  () => css`
    border-style: solid;
    border-radius: 8px;
    border-width: 3px;
    min-width: 1000px;
    padding: 12px;
    box-sizing: border-box;
    background-color: ${theme.colors["purple-0"]};
    border-color: ${theme.colors["purple-2"]};
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights.bold};
    font-size: 18px;
    color: ${theme.colors["grey-1"]};

    &:focus {
      outline: none;
      border-color: ${theme.colors["purple-2"]};
    }
  `
);

interface InputProps {
  title: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  info?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  value,
  type,
  placeholder,
  required,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <Stack direction="column" spacing={-2}>
      <StyledInputTitle>{title}</StyledInputTitle>
      <StyledInputField
        type={type}
        value={value}
        placeholder={placeholder}
        spellCheck={false}
        autoComplete="off"
        required={required}
        onChange={onChange}
      ></StyledInputField>
    </Stack>
  );
};

export { Input };
export type { InputProps };
