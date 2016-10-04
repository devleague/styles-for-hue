conn = new Mongo();
db = conn.getDB("styles-for-hue");

db.dropDatabase();

db.createCollection("styles");

print("styles");
db.styles.insert([
  {
    id: 1,
    type: 'div',
    style: {
      backgroundColor: 'blue',
      fontFamily: 'sans-serif',
      display: 'inline-block'
    }
  },
  {
    id: 2,
    type: 'p',
    style: {
      backgroundColor: 'green',
      fontFamily: 'arial',
    }
  },
  {
    id: 3,
    type: 'img',
    style: {
      border: '15px black solid'
    }
  },
  {
    id: 4,
    type: 'ul',
    style: {
      color: 'red'
    }
  },
  {
    id: 5,
    type: 'div',
    style: {
      backgroundColor: 'red',
      fontFamily: 'arial',
      display: 'inline-block'
    }
  }
]);

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