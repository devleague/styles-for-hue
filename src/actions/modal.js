export default {
  showModal,
  hideModal
}

export function showModal(message) {
  return {
    type: "SHOW_MODAL",
    message: message
  }
}

export function hideModal() {
  return {
    type: "HIDE_MODAL"
  }
}