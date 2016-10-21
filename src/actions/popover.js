export default {
  showPopover,
  hidePopover,
  showUpdate,
  hideUpdate
}

export function showPopover(payload) {
  return {
    type: "SHOW_POPOVER",
    payload: true
  }
}

export function hidePopover(payload) {
  return {
    type: "HIDE_POPOVER",
    payload: false
  }
}

export function showUpdate(payupdate) {
  return {
    type: "SHOW_UPDATEPOPOVER",
    payupdate: true
  }
}

export function hideUpdate(payupdate) {
  return {
    type: "HIDE_UPDATEPOPOVER",
    payupdate: false
  }
}