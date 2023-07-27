import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { color, spacing } from '../../../styles/styles';
import Icon from '../Icon/Icon';

export interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'A' | 'B';
  checkBoxSize?: 'sm' | 'md';
  selected?: boolean;
  disabled?: boolean;
}

const CheckBoxElement = styled.button<CheckBoxProps>`
  position: relative;
  border-radius: ${spacing.borderRadius.xs}px;
  box-shadow: 0 0 0 1px inset ${color.gray_2};
  background-color: transparent;

  ${({ checkBoxSize, variant, selected }) =>
    variant === 'A' &&
    checkBoxSize === 'sm' &&
    `
      width: 18px;
      height: 18px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 1px inset ${color.primary}`};
      background-color: ${selected && color.primary};

      svg {
        width: 18px;
        height: 18px;
        path:not(:first-of-type) {
          transition: 50ms ease-out;
          stroke: ${
            selected ? `${color.white}!important` : `transparent!important`
          };
        };
      };
    `};

  ${({ checkBoxSize, variant, selected }) =>
    variant === 'A' &&
    checkBoxSize === 'md' &&
    `
      width: 24px;
      height: 24px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 1px inset ${color.primary}`};
      background-color: ${selected && color.primary};

      svg {
        width: 24px;
        height: 24px;

        path:not(:first-of-type) {
          transition: 50ms ease-out;
          stroke: ${
            selected ? `${color.white}!important` : `transparent!important`
          };
        };
      };
    `};

  ${({ variant, selected, disabled }) =>
    variant === 'A' &&
    disabled &&
    `
      box-shadow: 0 0 0 1px inset ${color.gray_2};
      background-color: ${color.gray_2};
      cursor: default;
      svg {
        path:not(:first-of-type) {
          stroke: ${selected && color.gray_3}!important;
        };
      };
    `};

  ${({ checkBoxSize, variant, selected }) =>
    variant === 'B' &&
    checkBoxSize === 'sm' &&
    `
      width: 18px;
      height: 18px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 1px inset ${color.primary}`};
      
      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${selected ? color.primary : color.gray_2};
        opacity: ${selected ? 0 : 1};
      };

      svg {
        width: 18px;
        height: 18px;
        path:not(:first-of-type) {
          stroke: ${selected ? color.primary : 'transparent'}!important;
        };
      };
    `};

  ${({ checkBoxSize, variant, selected }) =>
    variant === 'B' &&
    checkBoxSize === 'md' &&
    `
      width: 24px;
      height: 24px;
      transition: 50ms ease-out;
      box-shadow: ${selected && `0 0 0 1px inset ${color.primary}`};

      &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${selected ? color.primary : color.gray_2};
        opacity: ${selected ? 0 : 1};
      };

      svg {
        path:not(:first-of-type) {
          stroke: ${selected ? color.primary : 'transparent'}!important;
        };
      };
    `};

  ${({ checkBoxSize, variant, selected, disabled }) =>
    variant === 'B' &&
    disabled &&
    `
      box-shadow: ${
        checkBoxSize === 'md' && !selected
          ? `0 0 0 1px inset ${color.gray_3}`
          : `0 0 0 1px inset ${color.gray_2}`
      };
      background-color: ${color.gray_2};
      cursor: default;
      &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${color.gray_3};
        opacity: ${selected ? 0 : 1};
      };
      
      svg {
        path:not(:first-of-type) {
          stroke: ${selected && color.gray_3}!important;
        };
      };
    `};
`;

const CheckBox: FunctionComponent<CheckBoxProps> = (props) => {
  const {
    type = 'button',
    selected,
    disabled,
    checkBoxSize = 'md',
    variant = 'A',
    ...restProps
  } = props;

  return (
    <CheckBoxElement
      type={type}
      variant={variant}
      checkBoxSize={checkBoxSize}
      selected={selected}
      disabled={disabled}
      {...restProps}
    >
      <Icon
        icon={
          checkBoxSize === 'sm' ? 'checkBoxSmallCheck' : 'checkBoxMediumCheck'
        }
        viewBox={checkBoxSize === 'sm' ? '0 0 18 18' : '0 0 24 24'}
      />
    </CheckBoxElement>
  );
};

export default CheckBox;
