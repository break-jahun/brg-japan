/* eslint-disable max-len */
import * as React from 'react';
import { useSelect, ClickAwayListener } from '@mui/base';
import { styled } from '@mui/system';
import { useRef, useState } from 'react';
import { Box } from '@mui/material';
import useHeaderLight from '@/common/bridges/Header/modules/hooks/useHeaderLight';
import { useTranslation } from 'react-i18next';
import { LocaleType, Locale } from '@/common/types/common';

type LanguageType = {
  [key in LocaleType]: keyof typeof Locale;
};

const Language: LanguageType = {
  ko: 'KR',
  en: 'EN',
  tw: 'TW',
};

function LanguageSelect() {
  const listboxRef = useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = useState(false);
  const { i18n } = useTranslation();

  const isHeaderLight = useHeaderLight();

  const options = Object.entries(Language).map(([key, value], index) => ({
    label: value,
    value: key,
  }));

  const handleChange = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
      localStorage.setItem('language', value);
    }
    setListboxVisible(false);
  };

  const { getButtonProps, getListboxProps, getOptionProps, value }: any =
    useSelect({
      listboxRef,
      options,
      onChange: handleChange as any,
    });

  const handleClickAway = () => {
    setListboxVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box position="relative">
        <StyledButton
          {...getButtonProps()}
          onClick={() => setListboxVisible((prev) => !prev)}
          isExpanded={listboxVisible}
          isLight={isHeaderLight}
        >
          {Language[i18n.language as LocaleType]}
        </StyledButton>
        <StyledListbox
          {...getListboxProps()}
          isExpanded={listboxVisible}
          isLight={isHeaderLight}
        >
          {options.map((option) => (
            <StyledListItem key={option.value} {...getOptionProps(option)}>
              {option.label}
            </StyledListItem>
          ))}
        </StyledListbox>
      </Box>
    </ClickAwayListener>
  );
}

const StyledButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isExpanded' && prop !== 'isLight',
})<{
  isExpanded: boolean;
  isLight: boolean;
}>(
  ({ theme, isExpanded, isLight }) => `
        box-sizing: border-box;
        background: inherit;
        line-height: 1.5;
        padding: 6px 8px;
        color: ${isLight ? 'black' : 'white'};
        font-weight: 700;
        font-family: Pretendard;
        font-size: 0.875rem;
        letter-spacing: 1px;
        align-items: flex-start;
    
        &:hover {
            opacity: .6;
        }
    
        &::before {
            margin-right: 3px;
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20'%3E%3Cpath fill='${
              isLight ? 'black' : 'white'
            }' d='M10 18.333q-1.708 0-3.229-.656-1.521-.656-2.656-1.792-1.136-1.135-1.792-2.656-.656-1.521-.656-3.229 0-1.729.656-3.24.656-1.51 1.792-2.645Q5.25 2.979 6.771 2.323 8.292 1.667 10 1.667q1.729 0 3.24.656 1.51.656 2.645 1.792 1.136 1.135 1.792 2.645.656 1.511.656 3.24 0 1.708-.656 3.229-.656 1.521-1.792 2.656-1.135 1.136-2.645 1.792-1.511.656-3.24.656Zm3.312-11.687h2.355q-.605-1-1.479-1.74-.876-.739-1.938-1.094.354.626.625 1.355t.437 1.479Zm-4.812 0h3q-.229-.875-.604-1.698T10 3.396Q9.479 4.188 9.104 5T8.5 6.646Zm-4.896 4.937h2.75q-.042-.416-.073-.812-.031-.396-.031-.792 0-.375.031-.771t.073-.812h-2.75q-.104.479-.146.864-.041.386-.041.74t.041.729q.042.375.146.854Zm4.146 4.605q-.333-.605-.604-1.334-.271-.729-.438-1.521H4.354q.563 1 1.438 1.729.875.73 1.958 1.126ZM4.354 6.646h2.354q.188-.792.448-1.511.261-.718.594-1.323-1.062.355-1.938 1.094-.874.74-1.458 1.74ZM10 16.583q.521-.729.896-1.552.375-.823.604-1.698h-3q.229.834.604 1.646.375.813.896 1.604Zm-1.896-5h3.792q.062-.541.094-.906.031-.365.031-.698 0-.312-.031-.677-.032-.364-.094-.906H8.104q-.042.416-.073.812Q8 9.604 8 9.979q0 .396.031.792t.073.812Zm4.146 4.605q1.083-.396 1.969-1.126.885-.729 1.448-1.729h-2.355q-.166.75-.437 1.479-.271.73-.625 1.376Zm1.396-4.605h2.75q.104-.375.146-.771.041-.395.041-.833 0-.417-.041-.812-.042-.396-.146-.771h-2.75q.062.542.094.906.031.365.031.677 0 .333-.031.698-.032.365-.094.906Z'/%3E%3C/svg%3E")
        }
    
        &::after {
            ${
              isExpanded
                ? `
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20'%3E%3Cpath fill='${
              isLight ? 'black' : 'white'
            }' d='m6 12 4-4 4 4Z'/%3E%3C/svg%3E");
            `
                : `
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20'%3E%3Cpath fill='${
              isLight ? 'black' : 'white'
            }' d='M10 12 6 8h8Z'/%3E%3C/svg%3E");
            `
            }
            }
        `
);

const StyledListbox = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'isExpanded' && prop !== 'isLight',
})<{ isExpanded: boolean; isLight: boolean }>(
  ({ theme, isExpanded, isLight }) => `
        box-sizing: border-box;
        overflow: auto;
        outline: 0px;
        color: ${isLight ? 'black' : 'white'};
        position: absolute;
        z-index: 1;
        border: 1px solid ${isLight ? 'black' : 'white'};
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-family: Pretendard;
        font-size: 0.875rem;
        letter-spacing: 1px;

        ${
          isLight &&
          `
            background: white;
        `
        }
  
        ${
          !isExpanded &&
          `
          opacity: 0;
          visibility: hidden;
        `
        }
      `
);

const StyledListItem = styled('li')(
  ({ theme }) => `
    padding: 10px 5px;
    cursor: pointer;
    &:hover {
        opacity: .6;
    }
  `
);

export default LanguageSelect;
