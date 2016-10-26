// loadColorApi () {
  //   return $.ajax({
  //     url: "http://www.colr.org/json/colors/random/8"
  //   });
  // }

  //   this.loadColorApi()
  //     .then(function (data) {
  //       var colorsObject = JSON.parse(data);
  //       var colorPalette = [];
  //       var palette = [];
  //       var palette2 = [];
  //       colorsObject.colors.map(function (elem, i) {
  //         var colorName = null;
  //         var colorHex = null;
  //         if (i < 4) {
  //           elem.tags.length > 0 ? colorName = elem.tags[0].name : colorName = "NO COLOR";
  //           elem.hex.length > 0 ? colorHex = "#" + elem.hex : colorHex = "#FFF";
  //           return palette.push({label: colorName, value: colorHex});
  //         }
  //         elem.tags.length > 0 ? colorName = elem.tags[0].name : colorName = "NO COLOR";
  //         elem.hex.length > 0 ? colorHex = "#" + elem.hex : colorHex = "#FFF";
  //         return palette2.push({label: colorName, value: colorHex});
  //       })
  //       colorPalette.push(palette, palette2);
  //       return colorPalette;
  //     })
  //     .then((colors) => {
  //       return this.props.getColorPalette(colors)
  //     })