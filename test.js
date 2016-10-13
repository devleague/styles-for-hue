conn = new Mongo();
db = conn.getDB("styles-for-hue");

db.dropDatabase();

db.createCollection("styles");

print("styles");
db.styles.insert({
  "doc" : {
    "_id" : ObjectId("57fc994396ee4215990d9091"),
    "elements": {
      "ulTags" : [
        {
          "_id" : ObjectId("57fc9789aa00d38a26228234"),
          "elementId" : 4,
          "subType": {
            "liTags" : [
              {
               "elementId" : 6,
                "style" : { "backgroundColor" : "pink"}
              },
              {
                "elementId" : 7,
                "style" : {"backgroundColor" : "orange"}
              }
            ]
          }
        } ],
        "imgTags" : [
        {
          "_id" : ObjectId("57fc9789aa00d38a26228233"),
          "elementId" : 3,
          "src" : "/images/city_night.jpg",
          "style" : { "backgroundColor" : "#3C6E71" } } ],
        "pTags" : [
        {
          "_id" : ObjectId("57fc9789aa00d38a26228232"),
          "elementId" : 2,
          "style" :
          {
            "backgroundColor" : "green",
            "fontFamily" : "arial"
          }
        } ],
        "divTags" : [
        {
          "_id" : ObjectId("57fc9789aa00d38a26228231"),
          "elementId" : 1,
          "style" : {
            "backgroundColor" : "blue",
            "fontFamily" : "sans-serif",
            "display" : "inline-block"
          }
        },
        {
          "_id" : ObjectId("57fc9789aa00d38a26228235"),
          "elementId" : 5,
          "style" : {
            "backgroundColor" : "red",
            "fontFamily" : "arial",
            "display" : "inline-block"
          }
        } ]
      }
    }
  })

print('styles database');

cursor = db.styles.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.styles.find();

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