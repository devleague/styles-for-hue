conn = new Mongo();
db = conn.getDB("styles-for-hue");

db.dropDatabase();

db.createCollection("docs");

print("docs");
db.docs.insert(
  {
    "doc" : {
      "_id" : ObjectId("57fc994396ee4215990d9091"),
      elements: [
        {
          "_id" : ObjectId("57fc9789aa00d38a26228229"),
          "elementId" : 1,
          "tag" : "div",
          "className" : "template-1",
          "style": {},
          "children":
          [
            {
              "_id" : ObjectId("57fc9789aa00d38a26228230"),
              "elementId" : 2,
              "tag" : "Header",
              "className" : "t1-header-container",
              "style" : {
                // "fontFamily" : "Lato",
                // "width" : "100%",
                // "height" : "42px",
                // "backgroundColor" : "#30B3AA"
              }
            },
            {
              "_id" : ObjectId("57fc9789aa00d38a26228231"),
              "elementId" : 3,
              "tag" : "img",
              // "src" : "https://static.pexels.com/photos/130991/pexels-photo-130991.jpeg",
              "className" : "t1-hero-container",
              "children" : [
                {
                  "elementId" : 25,
                  "tag" : "h1",
                  "text" : "We Are A Company",
                  "style" : {}
                },
                {
                  "elementId" : 26,
                  "tag" : "p",
                  "text" : "We make music and you can make music too! It's easy!",
                  "style" : {}
                },
                {
                  "elementId" : 27,
                  "tag" : "p",
                  "linkText": "Get Started",
                  "style" : {}
                }
              ],
              "style" : {
                "backgroundImage" : "url(https://static.pexels.com/photos/130991/pexels-photo-130991.jpeg)",
                "justifyContent" : "center"
              }
            },
            {
              "_id" : ObjectId("57fc9789aa00d38a26228232"),
              "elementId" : 4,
              "tag" : "div",
              "className" : "t1-row-container-first",
              "children" : [
                {
                  "elementId" : 5,
                  "tag" : "div",
                  "className" : "t1-column-container",
                  "children" : [
                    {
                      "elementId" : 6,
                      "tag" : "div",
                      "className" : "t1-col-100",
                      "children" : [
                        // {
                        //   "elementId" : 7,
                        //   "tag" : "h1",
                        //   "text" : "This Is An H1 Tag",
                        //   "style" : {
                        //     // "backgroundColor" : "orange"
                        //   }
                        // },
                        {
                          "elementId" : 8,
                          "tag" : "h2",
                          "text" : "This Is An H2 Tag",
                          "style" : {
                            // "backgroundColor" : "yellow"
                          }
                        },
                        {
                          "elementId" : 9,
                          "tag" : "p",
                          "text" : "This is a p tag. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                          "style" : {
                            // "backgroundColor" : "pink"
                          }
                        }
                      ],
                      "style" : {
                        // "backgroundColor" : "blue"
                      }
                    }
                  ],
                  "style": {
                    // "backgroundColor" : "red"
                  }
                }
              ],
              "style" :
              {
                // "backgroundColor" : "green",
                // "fontFamily" : "arial"
              }
            },
            {
              "_id" : ObjectId("57fc9789aa00d38a26228233"),
              "elementId" : 10,
              "tag" : "div",
              "className" : "t1-row-container-second",
              "children" : [
                {
                  "elementId" : 11,
                  "tag" : "div",
                  "className" : "t1-column-container",
                  "children" : [
                    {
                      "elementId" : 12,
                      "tag" : "div",
                      "className" : "t1-col-third",
                      "children" : [
                        {
                          "elementId" : 13,
                          "tag" : "h3",
                          "text" : "This Is An H3 Tag",
                          "style" : {
                            // "backgroundColor" : "orange"
                          }
                        },
                        {
                          "elementId" : 14,
                          "tag" : "p",
                          "text" : "This is a p tag. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
                          "style" : {
                            // "backgroundColor" : "yellow"
                          }
                        },
                        {
                          "elementId" : 15,
                          "tag" : "p",
                          // "text" : "Click the",
                          "linkText": "Read More",
                          "style" : {
                            // "backgroundColor" : "pink"
                          }
                        }
                      ],
                      "style" : {
                        // "backgroundColor" : "blue"
                      }
                    },
                    {
                      "elementId" : 16,
                      "tag" : "div",
                      "className" : "t1-col-third",
                      "children" : [
                        {
                          "elementId" : 17,
                          "tag" : "h3",
                          "text" : "This Is An H3 Tag",
                          "style" : {
                            // "backgroundColor" : "orange"
                          }
                        },
                        {
                          "elementId" : 18,
                          "tag" : "p",
                          "text" : "This is a p tag. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
                          "style" : {
                            // "backgroundColor" : "yellow"
                          }
                        },
                        {
                          "elementId" : 19,
                          "tag" : "p",
                          // "text" : "Click the",
                          "linkText": "Read More",
                          "style" : {
                            // "backgroundColor" : "pink"
                          }
                        }
                      ],
                      "style" : {
                        // "backgroundColor" : "blue"
                      }
                    },
                    {
                      "elementId" : 20,
                      "tag" : "div",
                      "className" : "t1-col-third",
                      "children" : [
                        {
                          "elementId" : 21,
                          "tag" : "h3",
                          "text" : "This Is An H3 Tag",
                          "style" : {
                            // "backgroundColor" : "orange"
                          }
                        },
                        {
                          "elementId" : 22,
                          "tag" : "p",
                          "text" : "This is a p tag. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
                          "style" : {
                            // "backgroundColor" : "yellow"
                          }
                        },
                        {
                          "elementId" : 23,
                          "tag" : "p",
                          // "text" : "Click the",
                          "linkText": "Read More",
                          "style" : {
                            // "backgroundColor" : "pink"
                          }
                        }
                      ],
                      "style" : {
                        // "backgroundColor" : "blue"
                      }
                    }
                  ],
                  "style": {
                    // "backgroundColor" : "red"
                  }
                }
              ],
              "style" :
              {
                // "backgroundColor" : "green",
                // "fontFamily" : "arial"
              }
            },
            {
              "_id" : ObjectId("57fc9789aa00d38a26228230"),
              "elementId" : 24,
              "tag" : "Footer",
              "className" : "t1-footer-container",
              "style" : {
                // "fontFamily" : "Lato",
                // "width" : "100%",
                // "height" : "42px",
                // "backgroundColor" : "#30B3AA"
              }
            }
          ]
        }
      ]
    }
  }
)

print('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();

db.createCollection("styles");
db.styles.insert(
  {
    style1: {
      name: 'Default',
      backgroundColor: [
        {'label': 'Hello Yellow', 'value': '#fcca03'},
        {'label': 'Whisper', 'value':'#ececec'},
        {'label': 'White', 'value': '#FFFFFF'},
        {'label': 'Gray20', 'value': '#333333'},
        {'label': 'Outer Space', 'value': '#494949'}
      ],
    },
    style2: {
      name: 'Hueville',
      backgroundColor: [
        {'label': 'Dark Pastel Red', 'value':'#BF431C'},
        {'label': 'Grey Skies', 'value': '#E8E8E8'},
        {'label': 'White', 'value': '#FFFFFF'},
        {'label': 'Tangerine', 'value': '#F2722E'},
        {'label': 'Dark Green', 'value': '#0c1915'},
        {'label': 'Black', 'value': 'black'},
      ],
    },
    style3: {
      name: 'Shady',
      backgroundColor: [
        {'label': 'Dirty Orange', 'value':'#B57351'},
        {'label': 'Muted Yellow', 'value': '#DED7D1'},
        {'label': 'White', 'value': '#FFFFFF'},
        {'label': 'Between Grey', 'value': '#4B4844'},
        {'label': 'Grullo', 'value': '#AF9C92'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    style4: {
      name: 'Neutrals',
      backgroundColor: [
        {'label': 'Neutral Grey', 'value':'#CAC4BF'},
        {'label': 'Cornsilk', 'value': '#FDF1DC'},
        {'label': 'White', 'value': '#ffffff'},
        {'label': 'Dark Grey', 'value': '#565857'},
        {'label': 'Dark Vanilla', 'value': '#CECA9F'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    style5: {
      name: 'Whipped',
      backgroundColor: [
        {'label': 'Yellow Mellow', 'value':'#DE835B'},
        {'label': 'Poison Ivory', 'value': '#F4F59'},
        {'label': 'White', 'value': '#ffffff'},
        {'label': 'Shades of Black', 'value': '#252525'},
        {'label': 'Grayter Than Thou', 'value': '#959273'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    style6: {
      name: 'Pumpkin Spice',
      backgroundColor: [
        {'label': 'Pumpkin Spice', 'value': '#FCC160'},
        {'label': 'Muted Pumpkin', 'value':'#E5DAC3'},
        {'label': 'White', 'value': 'white'},
        {'label': 'Marigold', 'value': '#EDAB31'},
        {'label': 'black', 'value': 'black'}
      ],
    },
    style7: {
      name: 'Cherry Blossoms',
      backgroundColor: [
        {'label': 'Young Bloom', 'value':'#E3A9AA'},
        {'label': 'Snow', 'value': '#FFF7F7'},
        {'label': 'White', 'value': '#ffffff'},
        {'label': 'Branches', 'value': '#2F1412'},
        {'label': 'Parrot Pink', 'value': '#D897AC'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    style8: {
      name: 'Smokey Blue',
      backgroundColor: [
        {'label': 'Welding Blue', 'value':'#7499B2'},
        {'label': 'Alabaster', 'value': '#F2E6E6'},
        {'label': 'White', 'value': '#ffffff'},
        {'label': 'Black Olive', 'value': '#3A3A3A'},
        {'label': 'Auqa Dim', 'value': '#3A6D7C'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    style9: {
      name: 'Aqua Mint',
      backgroundColor: [
        {'label': 'Persian Green', 'value':'#00A79D'},
        {'label': 'Eggshell', 'value': '#F3E6D8'},
        {'label': 'White', 'value': '#ffffff'},
        {'label': 'Onyx', 'value': '#383A39'},
        {'label': 'Middle Blue Green', 'value': '#94CECC'},
        {'label': 'Black', 'value': 'black'}
      ],
    },
    fontFamily: ['Times New Roman', 'ABeeZee', 'Abel', 'Acme', 'Actor', 'Advent Pro'],
    fontSize: '1em'
  }
);

db.createCollection("templates");
db.templates.insert({
  id: "template-1",
  html: '<div class="template-1"> <div class="header-container"> <img src="http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/logo_placeholder.png" style="height: 50px;"> </div><div class="hero-container"> <img src="http://placehold.it/800x250"> </div><div class="row-container"> <div class="column-container"> <div class="col-100"> <h1>This Is An H1 Tag</h1> <h2>This Is An H2 Tag</h2> <p>This is a p tag. Oat cake dragée cheesecake chocolate cake. Jelly dessert dessert chocolate liquorice caramels sweet ice cream liquorice. Gummi bears tart topping gummies jelly bear claw. Lemon drops tootsie roll topping. Dragée gingerbread jelly beans cake dragée cake caramels. Icing sesame snaps bonbon sweet roll.</p></div></div></div><div class="row-container"> <div class="column-container"> <div class="col-third"> <h3>This Is An H3 Tag</h3> <p>This is a p tag. Marzipan bear claw sweet donut. Jujubes croissant candy wafer cheesecake caramels carrot cake tart.</p><p>Click the <a href="#">a tag</a>.</p></div><div class="col-third"> <h3>This Is An H3 Tag</h3> <p>This is a p tag. Apple pie chocolate apple pie gummi bears. Candy biscuit cheesecake gummi bears powder.</p><p>Click the <a href="#">a tag</a>.</p></div><div class="col-third"> <h3>This Is An H3 Tag</h3> <p>This is a p tag. Tootsie roll sugar plum chocolate cake jelly beans chupa chups bear claw apple pie.</p><p>Click the <a href="#">a tag</a>.</p></div></div></div><div class="footer-container"> <h6>Copyright Footer</h6> </div></div>'
});
db.createCollection("themes");
db.themes.insert({
  id: "template-1-theme",
  css: '<style type="text/css"> /* RESET CSS DEFAULTS */ html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}/* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{display: block;}body{line-height: 1;}ol, ul{list-style: none;}blockquote, q{quotes: none;}blockquote:before, blockquote:after, q:before, q:after{content: ""; content: none;}table{border-collapse: collapse; border-spacing: 0;}*{box-sizing: border-box;}/* CONTAINER TO HOLD TEMPLATE */ #template-container{width: 900px; margin: 0 auto; padding: 25px; border: 1px solid #000;}/* BASIC CSS FOR TEMPLATE*/ .template-1{width: 800px; margin: 0 auto; background-color: pink;}.header-container{height: 50px; padding-left: 20px}.row-container{margin: 15px 20px;}.column-container{display:flex; flex-flow: row wrap; justify-content: space-between;}.col-100{flex: 0 0 760px; border: 1px #000 solid; padding: 10px; background-color: white;}.col-third{flex: 0 0 240px; border: 1px #000 solid; padding: 10px; background-color: white;}.footer-container{height: 50px; line-height: 50px; padding-left: 20px;}</style>'
});