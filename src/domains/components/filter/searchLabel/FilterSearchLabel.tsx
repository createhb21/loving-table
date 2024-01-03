import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatFilterLabelValue } from 'utils/formatter';
import { selectFilterName } from 'utils/filter';
import { CloseIcon, ResetIcon } from 'assets/icon';
import type { Languages } from 'types';
import * as S from './FilterSearchLabel.styled';

interface FilterSearchLabelProps {
  filterKeyNames: { key: string; name: string }[];
  searchLabel: { [key: string]: string[] };
  handleClickReset: () => void;
  handleDeleteSearchLabel: (key: string, deleteValue: string) => () => void;
}

const FilterSearchLabel = ({
  filterKeyNames,
  searchLabel,
  handleClickReset,
  handleDeleteSearchLabel,
}: FilterSearchLabelProps) => {
  const { t } = useTranslation();

  return (
    <S.SearchLabelBoxWrapper>
      <S.ResetBtn type="button" onClick={handleClickReset}>
        <ResetIcon />
        {t('Reset' as Languages)}
      </S.ResetBtn>
      <S.SearchLabelWrapper>
        {Object.entries(searchLabel).map(([label, value], i) => {
          const searchName = selectFilterName(filterKeyNames, label);

          return value.map((item) => (
            <li key={item + i}>
              <S.SearchLabel>
                <span>
                  <S.SearchName>{t(searchName as Languages)}:</S.SearchName>
                  <S.SearchValue>
                    {t(`${formatFilterLabelValue(label, item)}` as Languages)}
                  </S.SearchValue>
                </span>
                <S.CloseBtn
                  type="button"
                  onClick={handleDeleteSearchLabel(label, item)}
                >
                  <CloseIcon />
                </S.CloseBtn>
              </S.SearchLabel>
            </li>
          ));
        })}
      </S.SearchLabelWrapper>
    </S.SearchLabelBoxWrapper>
  );
};

export default FilterSearchLabel;
