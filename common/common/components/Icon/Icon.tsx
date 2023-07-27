import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import { iconBase, icons, IconNameType, IconsType } from '../../../styles/Icon';
import { color as colors } from '../../../styles/styles';

export const ICON_SIZE = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
};

export interface IconProps {
  icon: IconNameType;
  block?: boolean;
  color?: string;
  size?: keyof typeof ICON_SIZE;
  viewBox?: string;
  className?: string;
}

const SvgElement = styled.svg<{ block?: boolean }>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Icon: FunctionComponent<IconProps> = (props) => {
  const {
    icon,
    block = false,
    color = colors.black,
    size = 'lg',
    viewBox = '0 0 24 24',
    className,
    ...restProps
  } = props;

  const newIcons: IconsType = _.clone(icons);

  Object.keys(icons).forEach((key) => {
    newIcons[key as IconNameType] = {
      ...iconBase,
      ...icons[key as IconNameType],
    };
  });

  return (
    <SvgElement
      viewBox={viewBox}
      fill={color}
      width={`${ICON_SIZE[size]}px`}
      height={`${ICON_SIZE[size]}px`}
      block={block}
      className={className}
      {...restProps}
    >
      {newIcons[icon]?.content ? (
        newIcons[icon]?.content
      ) : (
        <path d={newIcons[icon].path} />
      )}
    </SvgElement>
  );
};

export default Icon;
