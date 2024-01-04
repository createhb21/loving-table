const CHECKTABLE_INIT_STATE = {
  isChecked: false,
  isActive: false,
};

export const tableDataTypeGuard = (
  tableData: TableDatas,
): tableData is HubHubShipmentClientModel | BranchOngoingServerModel => {
  return (
    (tableData as HubHubShipmentClientModel | BranchOngoingServerModel)
      ?.remainHubs !== undefined
  );
};

export const makeDefaultToCheckTableInitState = (tableData?: TableDatas[]) =>
  tableData?.map(() => CHECKTABLE_INIT_STATE);

export const makeCheckTableInitState = (tableData: TableDatas[]) =>
  new Array(tableData.length).fill(false);

const isNotChangeTableType = (
  target: TableDatas,
): target is NoticeTableStatus => {
  return (target as NoticeTableStatus).num !== undefined;
};

export const getActivedCheckListDefault = (
  activeStatus: string,
  tableData?: TableDatas[],
) =>
  tableData?.map((item) => {
    if (isNotChangeTableType(item)) return CHECKTABLE_INIT_STATE;

    return {
      isChecked: false,
      isActive: activeStatus === item.status,
    };
  });

export const getMultiActivedCheckList = (
  activeStatusList: string[],
  tableData?: TableDatas[],
) =>
  tableData?.map((item) => {
    if (isNotChangeTableType(item)) return CHECKTABLE_INIT_STATE;

    return {
      isChecked: false,
      isActive: activeStatusList.includes(item.status || ''),
    };
  });

export const getActivedCheckListRecieveDestination = (
  tableData?: TableDatas[],
) =>
  tableData?.map((item) => {
    if (!tableDataTypeGuard(item)) return CHECKTABLE_INIT_STATE;

    return {
      isChecked: false,
      isActive: item.status === 'received' && !item.remainHubs,
    };
  });

export const getActivedCheckListReceivedHub = (tableData?: TableDatas[]) =>
  tableData?.map((item) => {
    if (!tableDataTypeGuard(item)) return CHECKTABLE_INIT_STATE;
    return {
      isChecked: false,
      isActive: item.status === 'received' && !!item.remainHubs,
    };
  });

export const calcTableWidth = (arr: (string[] | string)[]) => {
  const tableColumnArr = arr.map((designColumnWidth: string | string[]) =>
    typeof designColumnWidth === 'string'
      ? designColumnWidth
      : `minmax(${designColumnWidth[0]}, ${designColumnWidth[1]})`,
  );

  return tableColumnArr.join(' ');
};
