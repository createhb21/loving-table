import dayjs from 'dayjs';
import { languages } from 'assets/lang/i18n';

export interface Toast {
  id: string;
  type?: 'success' | 'warning';
  content: string;
}

export type FilterConditionType =
  | 'notice'
  | 'check'
  | 'radio'
  | 'input'
  | 'calendar'
  | 'null';

export interface FilterListItem {
  key: string;
  label: string;
}

export interface FilterCondition {
  name: string;
  key: string;
  type: FilterConditionType;
  filterList?: FilterListItem[];
  placeholder?: string;
}

export interface MonthYear {
  value: dayjs.Dayjs;
  month: string;
  year: string;
  date: string;
  currentMonth: string;
  currentYear: string;
  isCurrentMonthYear: boolean;
  startDate: dayjs.Dayjs;
  currentStartDate: dayjs.Dayjs;
  prevMonthStartDate: dayjs.Dayjs;
  nextMonthStartDate: dayjs.Dayjs;
  firstDOW: number;
  lastDate: number;
  prevMonthLastDate: number;
  firstWeekPrevMonthDate: dayjs.Dayjs;
}

export type ValueOf<T> = T[keyof T];
export type KeyOf<T> = keyof T;

export type Languages = keyof (typeof languages)[number];

export type TableBodyDataType<T> = (key: KeyOf<T>, data: T) => React.ReactNode;
export type ColumnTable = Record<string, string>;

export interface PageInfo {
  currentPage: number;
  dataPerPage: number;
  startRow: number;
  totalData: number;
  totalPages: number;
}
