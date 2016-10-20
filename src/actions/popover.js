export default {
  showPopover,
  hidePopover
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