conn = new Mongo();
db = conn.getDB("styles-for-hue");

db.dropDatabase();

db.createCollection("styles");

print("styles");
db.styles.insert([
  {
    elementId: 1,
    type: 'div',
    style: {
      backgroundColor: 'blue',
      fontFamily: 'sans-serif',
      display: 'inline-block'
    }
  },
  {
    elementId: 2,
    type: 'p',
    style: {
      backgroundColor: 'green',
      fontFamily: 'arial',
    }
  },
  {
    elementId: 3,
    type: 'img',
    style: {
      border: '15px black solid'
    }
  },
  {
    elementId: 4,
    type: 'ul',
    style: {
      color: 'red'
    }
  },
  {
    elementId: 5,
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

