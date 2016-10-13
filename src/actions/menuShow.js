export default {
  showMenu
};

export function showMenu (show) {
  return {
    type: "SHOW_MENU",
    show: show
  }
}