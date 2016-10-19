export default {
  updatePopup
}


export function updatePopup (visibility) {
  return {
    type: "UPDATE_TEMPLATE",
    data: visibility
  }
}