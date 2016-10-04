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

