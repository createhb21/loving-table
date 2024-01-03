import React, { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllQuery } from 'utils/filter';
import { isNumber, onlyNumber } from 'utils/formatter';
import type { FilterCondition } from 'types';

const useFilterInput = (
  condition: FilterCondition,
  handleFocusCondition: () => void,
  handleBlurCondition: () => void,
  handleCreateConditionError: () => void,
  handleDeleteConditionError: () => void,
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const applyBtnRef = useRef<HTMLButtonElement>(null);

  const [inputValue, setInputValue] = useState(
    searchParams.get(condition.key) ?? '',
  );
  const [isFocus, setIsFocus] = useState(false);

  const validationNumber = (key: string, inputValue: string) => {
    if (
      (key === 'mobileNumber' && inputValue.length > 20) ||
      (key === 'orderNumber' && inputValue.length > 15)
    )
      return;

    const isValidationMobileNumber =
      inputValue.length === 1 && isNumber(inputValue);

    if (isValidationMobileNumber) {
      handleCreateConditionError();
    } else {
      handleDeleteConditionError();
      setInputValue(onlyNumber(inputValue));
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    switch (condition.key) {
      case 'mobileNumber':
      case 'orderNumber':
        validationNumber(condition.key, value);
        break;

      default:
        if (value.length > 100) return;

        setInputValue(value);
    }
  };

  const handleClickApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) return alert('Please enter a search keyword.');

    setSearchParams({
      ...getAllQuery(searchParams),
      [condition.key]: inputValue.trim(),
      page: '1',
    });

    (document.activeElement as HTMLElement).blur();
  };

  const handleFocusInput = () => {
    setIsFocus(true);
    handleFocusCondition();
  };

  const handleBlurInput = () => {
    setTimeout(() => {
      if (document.activeElement === applyBtnRef.current) return;

      setIsFocus(false);
      handleDeleteConditionError();
      handleBlurCondition();
    }, 0);
  };

  useEffect(() => {
    setInputValue(searchParams.get(condition.key) ?? '');
  }, [searchParams, condition]);

  return {
    inputValue,
    isFocus,
    inputRef,
    applyBtnRef,
    handleChangeValue,
    handleClickApply,
    handleFocusInput,
    handleBlurInput,
  };
};

export default useFilterInput;
