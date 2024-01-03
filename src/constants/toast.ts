export const TOAST_MSG = {
  SUCCESS: {
    SETTLEMENT_COMPLETE: {
      type: 'success',
      content: 'The payment has been settled.',
    },
    PINNED: {
      type: 'success',
      content: 'The notice has been pinned.',
    },
    UNPINNED: {
      type: 'success',
      content: 'The notice has been unpinned.',
    },
    NOTICE_DELETED: {
      type: 'success',
      content: 'The notice has been deleted.',
    },
    NOTICE_ADD: {
      type: 'success',
      content: 'The notice has been added.',
    },
    NOTICE_EDIT: {
      type: 'success',
      content: 'The notice has been changed.',
    },
    MOBILE_CHANGE: {
      type: 'success',
      content: 'Mobile number has been changed',
    },
    DRIVER_APPROVE: {
      type: 'success',
      content: 'Verification is complete',
    },
    STATUS_CHANGE: {
      type: 'success',
      content: 'Status has been changed',
    },
    ADMIN_CREATE: {
      type: 'success',
      content: 'The administrator account has been added.',
    },
    ADMIN_UPDATE: {
      type: 'success',
      content: 'The administrator account information has been changed.',
    },
    ADMIN_DELETE: {
      type: 'success',
      content: 'The administrator account has been deleted.',
    },
    ACCOUNT_UPDATE: {
      type: 'success',
      content: 'Account information has been changed.',
    },
    PASSWORD_CHANGE: {
      type: 'success',
      content: 'The password has been changed.',
    },
    LOGISTICS_CREATE: {
      type: 'success',
      content: 'The order has been added.',
    },
    LOGISTICS_UPDATE: {
      type: 'success',
      content: 'The order has been updated.',
    },
    ROOT_COMPLETE: {
      type: 'success',
      content: 'The root setting is completed.',
    },
    ARRIVE_GOODS: {
      type: 'success',
      content: 'The selected item has been\nreceived.',
    },
    FORWARD_COMPLETE: {
      type: 'success',
      content: 'The selected order has been\nforwarded.',
    },
    SHIPPING_REQUEST: {
      type: 'success',
      content:
        'The shipping request for the\nselected order(s) has been\ncompleted.',
    },
    CLIENT_DELETE: {
      type: 'success',
      content: 'Client account has been deleted.',
    },
    DRIVER_DELETE: {
      type: 'success',
      content: 'Driver account has been deleted',
    },
    REPLY_ADD: {
      type: 'success',
      content: 'The reply has been added.',
    },
    REPLY_CHANGE: {
      type: 'success',
      content: 'The reply has been changed.',
    },
    DISPATCH_COMPLETE: {
      type: 'success',
      content: 'The dispatch has been completed',
    },
    DISPATCH_CANCEL: {
      type: 'success',
      content: 'Dispatch has been canceled',
    },
    POINT_CHARGING_COMPLETE: {
      type: 'success',
      content: 'Point charging completed.',
    },
    POINTS_REJECT_COMPLETE: {
      type: 'success',
      content: 'The point charge request has rejected.',
    },
    WITHDRAWAL_COMPLETE: {
      type: 'success',
      content: 'The withdrawal has completed.',
    },
    WITHDRAWAL_REJECT_COMPLETE: {
      type: 'success',
      content: 'The withdrawal request has rejected.',
    },
    HUB_SETTING_CREATE: {
      type: 'success',
      content: 'Hub has been added.',
    },
  },
  WARNING: {
    PIN_FAIL: {
      type: 'warning',
      content: 'You can pin up to 5 posts.',
    },
    FILTER_MAX_NUM: {
      type: 'warning',
      content: 'Each filter can only be applied up to 5',
    },
    ROUTE_OVERLAP: {
      type: 'warning',
      content: 'The route is already set',
    },
    ROUTE_SET_FAIL: {
      type: 'warning',
      content: 'The route is not set.',
    },
    HUB_PROCESS_FAIL: {
      type: 'warning',
      content:
        'Processing is possible at once only\nif the departure hub and arrival\nhub are the same.',
    },
    FORWARDING_FAIL: {
      type: 'warning',
      content:
        'Processing is possible at once only \n if the next hub is the same.',
    },
    POINT_INSUFFICIENT_DISPATCH_FAIL: {
      type: 'warning',
      content:
        'We are unable to proceed with this shipment due to insufficient driver points.',
    },
    VEHICLE_IDNUMBER_CONDITION_FAIL: {
      type: 'warning',
      content: 'Vehicle ID number is 17 characters.',
    },
  },
} as const;
