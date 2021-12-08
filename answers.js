db.restaurants.find({name:"Caffe Dante"},{restaurent_id:1});
db.restaurants.find({name:{$regex:"Steak"}},{restaurent_id:1,name:1});