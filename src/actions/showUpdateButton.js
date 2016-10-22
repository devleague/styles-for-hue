export default {
  showUpdateButton
}


export function showUpdateButton (show) {
  return {
    type: "SHOW_UPDATEBUTTON",
    show: show
  }
}