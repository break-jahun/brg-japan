import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from '@emotion/styled';

import { color } from '../../../styles/styles';

export interface RadioProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'A' | 'B';
  radioSize?: 'sm' | 'md';
  selected?: boolean;
  disabled?: boolean;
}

const RadioElement = styled.button<RadioProps>`
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 0 1px inset ${color.gray_2};

  ${({ radioSize, variant, selected }) =>
    variant === 'A' &&
    radioSize === 'sm' &&
    `
      width: 18px;
      height: 18px;
      box-shadow: ${selected && `0 0 0 2px inset ${color.primary}`};

      &::after {
        content: '';
        transition: 50ms ease-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${color.primary};
        opacity: ${selected ? 1 : 0};
      }
  `};

  ${({ radioSize, variant, selected }) =>
    variant === 'A' &&
    radioSize === 'md' &&
    `
      width: 24px;
      height: 24px;
      box-shadow: ${selected && `0 0 0 2px inset ${color.primary}`};

      &::after {
        content: '';
        transition: 50ms ease-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${color.primary};
        opacity: ${selected ? 1 : 0};
      }
  `};

  ${({ variant, disabled }) =>
    variant === 'A' &&
    disabled &&
    `
      box-shadow: 0 0 0 2px inset ${color.gray_2};
      background-color: ${color.gray_2};
      cursor: default;

      &::after {
        background-color: ${color.gray_3};
      }
    `};

  ${({ radioSize, variant, selected, disabled }) =>
    variant === 'B' &&
    radioSize === 'sm' &&
    !disabled &&
    `
      width: 18px;
      height: 18px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 5px inset ${color.primary}`};
  `};

  ${({ radioSize, variant, selected, disabled }) =>
    variant === 'B' &&
    radioSize === 'sm' &&
    disabled &&
    `
      width: 18px;
      height: 18px;
      transition: 50ms ease-out;
      box-shadow: ${
        selected
          ? `0 0 0 5px inset ${color.gray_2}`
          : `0 0 0 2px inset ${color.gray_2}`
      };
      background-color: ${selected ? 'transparent' : color.gray_2};
      cursor: default;
  `};

  ${({ radioSize, variant, selected, disabled }) =>
    variant === 'B' &&
    radioSize === 'md' &&
    !disabled &&
    `
      width: 24px;
      height: 24px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 7px inset ${color.primary}`};
  `};

  ${({ radioSize, variant, selected, disabled }) =>
    variant === 'B' &&
    radioSize === 'md' &&
    disabled &&
    `
      width: 24px;
      height: 24px;
      transition: 50ms ease-out;
      box-shadow: ${
        selected
          ? `0 0 0 7px inset ${color.gray_2}`
          : `0 0 0 2px inset ${color.gray_2}`
      };
      background-color: ${selected ? 'transparent' : color.gray_2};
      cursor: default;
  `};
`;

const Radio: FunctionComponent<RadioProps> = (props) => {
  const {
    type = 'button',
    variant = 'A',
    radioSize = 'md',
    selected,
    disabled,
    ...restProps
  } = props;

  return (
    <RadioElement
      type={type}
      variant={variant}
      radioSize={radioSize}
      selected={selected}
      disabled={disabled}
      {...restProps}
    />
  );
};

export default Radio;
