export default {
  updateButtonShow,
  hideButtonShow
}


export function updateButtonShow (show) {
  return {
    type: "SHOW_UPDATEBUTTON",
    show: true
  }
}

export function hideButtonShow (show) {
  return {
    type: "HIDE_UPDATEBUTTON",
    show: false
  }
}