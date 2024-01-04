import React from 'react';
import { useTranslation } from 'react-i18next';

import type { FilterCondition } from 'types';
import useFilterInput from '../hooks/useFilterInput';
import * as S from './FilterInput.styled';

interface FilterInputProps {
  condition: FilterCondition;
  handleFocusCondition: () => void;
  handleBlurCondition: () => void;
  handleCreateConditionError: () => void;
  handleDeleteConditionError: () => void;
}

const FilterInput = ({
  condition,
  handleFocusCondition,
  handleBlurCondition,
  handleCreateConditionError,
  handleDeleteConditionError,
}: FilterInputProps) => {
  const { t } = useTranslation();

  const {
    inputValue,
    isFocus,
    inputRef,
    applyBtnRef,
    handleChangeValue,
    handleClickApply,
    handleFocusInput,
    handleBlurInput,
  } = useFilterInput(
    condition,
    handleFocusCondition,
    handleBlurCondition,
    handleCreateConditionError,
    handleDeleteConditionError,
  );

  return (
    <S.FilterInputWrapper onSubmit={handleClickApply}>
      <S.FilterInput
        ref={inputRef}
        value={inputValue}
        placeholder={condition.placeholder}
        maxLength={condition.key === 'mobileNumber' ? 20 : 100}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        onChange={handleChangeValue}
      />
      {isFocus && (
        <S.FilterInputApply ref={applyBtnRef} onBlur={handleBlurInput}>
          {'Apply'}
        </S.FilterInputApply>
      )}
    </S.FilterInputWrapper>
  );
};

export default FilterInput;
