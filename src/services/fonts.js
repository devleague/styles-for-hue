  // loadFontApi () {
  //   return $.ajax({
  //     url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBifqNWX2_oCeWV1TZcsOZL-Sy1Q15eIIs"
  //   });
  // }

  //   this.loadFontApi()
  //     .then(function (data) {
  //       var fontArr = data.items;
  //       var fontList = [];
  //       fontArr
  //         .filter(function (elem, i) {
  //           return elem.category === "sans-serif" && i < 10;
  //         })
  //         .map(function (elem, i) {
  //           return fontList.push({family: elem.family});
  //         })
  //       return fontList;
  //     })
  //     .then((fonts) => {
  //       return this.props.fontTypes(fonts)
  //     })