export default {
  showCss
};

export function showCss (show) {
  return {
    type: "SHOW_CSS",
    show: show
  }
}