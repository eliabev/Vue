const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
let list = [];

for (const city of cities) {
  // write your code just below here
  let city1 = city.toLowerCase();
  city1 = city1.replace(city1[0], city1[0].toUpperCase()); 
  const result = city1;
  
  let index = cities.indexOf(city);
  cities[index] = result
}

console.log(cities.join(", "))
