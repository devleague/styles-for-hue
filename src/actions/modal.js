export default {
  showModal,
  hideModal
}

export function showModal(payload) {
  return {
    type: "SHOW_MODAL",
    payload: true
  }
}

export function hideModal(payload) {
  return {
    type: "HIDE_MODAL",
    payload: false
  }
}