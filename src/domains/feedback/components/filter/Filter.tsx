/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import type { FilterCondition } from 'types';
import FilterInput from './input/FilterInput';
import FilterSearchLabel from './searchLabel/FilterSearchLabel';
import useCheckBtnFilter from './hooks/useCheckBtnFilter';
import useSearchLabel from './hooks/useSearchLabel';
import useFilterCalendar from './hooks/useFilterCalendar';
import useCondition from './hooks/useCondition';
import useRadioBtnFilter from './hooks/useRadioBtnFilter';
import * as S from './Filter.styled';

interface FilterProps {
  className?: string;
  filterCondition: FilterCondition[][];
}

const Filter = ({ className, filterCondition }: FilterProps) => {
  const [searchParams] = useSearchParams();

  const { selectedDates, selectedDate, handleChangeFilterDate } =
    useFilterCalendar();
  const { handleClickCheckBtn, handleClickAllCheckBtn } = useCheckBtnFilter();
  const { handleClickRadioBtn, handleClickAllRadioBtn } = useRadioBtnFilter();
  const {
    isEmptyLabel,
    filterKeyNames,
    searchLabel,
    handleDeleteSearchLabel,
    handleClickReset,
  } = useSearchLabel(filterCondition);

  const isCheckAll = (conditionKey: string) => {
    return searchParams.getAll(conditionKey).length === 0;
  };

  const isChecked = (
    conditionKey: string,
    checkItemKey: string,
    defaultValue?: string,
  ) => {
    return (
      searchParams.getAll(conditionKey).includes(checkItemKey) ||
      isCheckDefaultValue(conditionKey, checkItemKey, defaultValue)
    );
  };

  const isCheckDefaultValue = (
    conditionKey: string,
    checkItemKey: string,
    defaultValue?: string,
  ) => !searchParams.get(conditionKey) && checkItemKey === defaultValue;

  const conditionRender = (condition: FilterCondition, i: number) => {
    const {
      isConditionFocus,
      isConditionError,
      handleCreateConditionError,
      handleDeleteConditionError,
      handleFocusCondition,
      handleBlurCondition,
    } = useCondition();

    const uuid = uuidv4();

    switch (condition.type) {
      case 'input':
        return (
          <S.Condition
            key={i}
            data-isconditionfocus={isConditionFocus}
            data-isconditionerror={isConditionError}
          >
            <S.ConditionName
              data-isconditionfocus={isConditionFocus}
              data-isconditionerror={isConditionError}
            >
              {condition.name}
            </S.ConditionName>
            <S.ConditionChildrenWapper>
              <FilterInput
                condition={condition}
                handleFocusCondition={handleFocusCondition}
                handleBlurCondition={handleBlurCondition}
                handleCreateConditionError={handleCreateConditionError}
                handleDeleteConditionError={handleDeleteConditionError}
              />
            </S.ConditionChildrenWapper>
          </S.Condition>
        );

      case 'notice':
        return (
          <S.Condition key={i}>
            <S.ConditionName>{condition.name}</S.ConditionName>
            <S.ConditionChildrenWapper>
              <S.FilterListWapper>
                {condition.filterList && (
                  <>
                    {condition.filterList.map((item, i) => (
                      <S.FilterListItem key={item.key + i}>
                        <input
                          id={item.label}
                          type="radio"
                          name={uuid + condition.key}
                          checked={isChecked(
                            condition.key,
                            item.key,
                            'shipper',
                          )}
                          value={item.key}
                          onChange={handleClickRadioBtn(
                            condition.key,
                            item.key,
                          )}
                        />
                        <label htmlFor={item.label} tabIndex={0}>
                          {item.label}
                        </label>
                      </S.FilterListItem>
                    ))}
                  </>
                )}
              </S.FilterListWapper>
            </S.ConditionChildrenWapper>
          </S.Condition>
        );

      case 'check':
        return (
          <S.Condition key={i}>
            <S.ConditionName>{condition.name}</S.ConditionName>
            <S.ConditionChildrenWapper>
              <S.FilterListWapper>
                {condition.filterList && (
                  <>
                    <S.FilterAllBtn>
                      <input
                        id={condition.key}
                        type="checkbox"
                        checked={isCheckAll(condition.key)}
                        value="all"
                        onChange={handleClickAllCheckBtn(condition.key)}
                      />
                      <label htmlFor={condition.key} tabIndex={0}>
                        {'All'}
                      </label>
                    </S.FilterAllBtn>
                    {condition.filterList.map((item, i) => (
                      <S.FilterListItem key={item.key + i}>
                        <input
                          id={item.label}
                          type="checkbox"
                          checked={isChecked(condition.key, item.key)}
                          value={item.key}
                          onChange={handleClickCheckBtn(
                            condition.key,
                            item.key,
                          )}
                        />
                        <label htmlFor={item.label} tabIndex={0}>
                          {item.label}
                        </label>
                      </S.FilterListItem>
                    ))}
                  </>
                )}
              </S.FilterListWapper>
            </S.ConditionChildrenWapper>
          </S.Condition>
        );

      case 'radio':
        return (
          <S.Condition key={i}>
            <S.ConditionName>{condition.name}</S.ConditionName>
            <S.ConditionChildrenWapper>
              <S.FilterListWapper>
                {condition.filterList && (
                  <>
                    <S.FilterAllBtn>
                      <input
                        id={condition.key}
                        type="radio"
                        name={uuid + condition.key}
                        checked={isCheckAll(condition.key)}
                        value="all"
                        onChange={handleClickAllRadioBtn(condition.key)}
                      />
                      <label htmlFor={condition.key} tabIndex={0}>
                        {'All'}
                      </label>
                    </S.FilterAllBtn>
                    {condition.filterList.map((item, i) => (
                      <S.FilterListItem key={item.key + i}>
                        <input
                          id={item.label}
                          type="radio"
                          name={uuid + condition.key}
                          checked={isChecked(condition.key, item.key)}
                          value={item.key}
                          onChange={handleClickRadioBtn(
                            condition.key,
                            item.key,
                          )}
                        />
                        <label htmlFor={item.label} tabIndex={0}>
                          {item.label}
                        </label>
                      </S.FilterListItem>
                    ))}
                  </>
                )}
              </S.FilterListWapper>
            </S.ConditionChildrenWapper>
          </S.Condition>
        );

      case 'calendar':
        return (
          <S.Condition key={i} data-isconditionfocus={isConditionFocus}>
            <S.ConditionName data-isconditionfocus={isConditionFocus}>
              {condition.name}
            </S.ConditionName>
            <S.CalendarWrapper>
              <S.Calendar
                type="free"
                selectedDate={selectedDates}
                value={selectedDate}
                handleChange={handleChangeFilterDate}
                handleFocusCondition={handleFocusCondition}
                handleBlurCondition={handleBlurCondition}
              />
            </S.CalendarWrapper>
          </S.Condition>
        );

      case 'null':
        return <S.Condition key={i} />;
    }
  };

  return (
    <S.Filter className={className}>
      {filterCondition.map((conditionArr, i) => (
        <S.ConditionWrapper key={i} columnCount={conditionArr.length}>
          {conditionArr.map((condition, i) => conditionRender(condition, i))}
        </S.ConditionWrapper>
      ))}
      {!isEmptyLabel && (
        <FilterSearchLabel
          filterKeyNames={filterKeyNames}
          searchLabel={searchLabel}
          handleClickReset={handleClickReset}
          handleDeleteSearchLabel={handleDeleteSearchLabel}
        />
      )}
    </S.Filter>
  );
};

export default Filter;
