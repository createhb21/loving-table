import { FilterCondition } from 'types';

export const FEEDBACK_FILTER_CONDITION: FilterCondition[][] = [
  [
    {
      name: 'Status',
      key: 'status',
      type: 'check',
      filterList: [
        { key: 'withdrawal', label: 'Withdrawal' },
        { key: 'charge', label: 'Charge' },
        { key: 'used', label: 'Used' },
        { key: 'earned', label: 'Earned' },
      ],
    },
  ],
  [{ name: 'Date', key: 'date', type: 'calendar' }],
];

export const FEEDBACK_HISTORY_HEADER = {
  created: 'Date',
  status: 'Type',
  amount: 'Amount',
  orderNumber: 'Order number',
};
