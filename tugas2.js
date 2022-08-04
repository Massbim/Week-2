// prettier-ignore
const name = [
  "Abigail", "Alexandra", "Alison", "Amanda", 
  "Angela", "Bella", "Carol", "Caroline", 
  "Carolyn", "Deirdre", "Diana", "Elizabeth", 
  "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(subString, limit, callback) {
  const lowerCased = name.map((names) => names.toLowerCase());
  const match = lowerCased.filter((element) => {
    return element.includes(subString);
  });
  const upperCased = match.map((names) => names[0].toUpperCase() + names.slice(1));
  upperCased.length = limit;
  callback(upperCased);
}
function print(value) {
  console.log(value);
}

searchName("an", 3, print);
