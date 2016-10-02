conn = new Mongo();
db = conn.getDB("styles-for-hue");

db.dropDatabase();

db.createCollection("styles");

print("styles");
db.styles.insert([
  {
    className : 'divComp',
    'border-radius': 8,
    'background-color': 'red',
    'font-family': '"Comic Sans MS", cursive, sans-serif'
  }
]);

print('styles database');

cursor = db.styles.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.styles.find();

