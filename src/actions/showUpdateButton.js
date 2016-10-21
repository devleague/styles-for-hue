export default {
  showUpdateButton,
  hideUpdateButton
}


export function showUpdateButton (show) {
  return {
    type: "SHOW_UPDATEBUTTON",
    show: true
  }
}

export function hideUpdateButton (show) {
  return {
    type: "HIDE_UPDATEBUTTON",
    show: false
  }
}