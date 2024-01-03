import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { getAllQuery } from 'utils/filter';

const useFilterCalendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initSelectedDates = searchParams
    .get('date')
    ?.split('~')
    .map((date) => date.trim());

  const [selectedDates, setSelectedDates] = useState<string[]>(
    initSelectedDates || [],
  );

  const selectedDate = selectedDates[0]
    ? `${selectedDates[0]} ~ ${selectedDates[selectedDates.length - 1]}`
    : '';

  const handleChangeFilterDate = useCallback(
    (date: dayjs.Dayjs[] | []) => {
      if (date.length === 0) {
        setSelectedDates(['']);
      } else {
        const days = date.map((item) => item.format('YYYY/MM/DD'));
        setSelectedDates(days);

        setSearchParams({
          ...getAllQuery(searchParams),
          date: `${days[0]} ~ ${days[1] || days[0]}`,
          page: '1',
        });
      }
    },
    [selectedDates, searchParams],
  );

  useEffect(() => {
    if (searchParams.get('date') !== null) return;

    setSelectedDates([]);
  }, [searchParams.get('date')]);

  return {
    selectedDates,
    selectedDate,
    handleChangeFilterDate,
  };
};

export default useFilterCalendar;
