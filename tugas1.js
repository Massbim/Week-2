const animal = ["Tiger", "Lion", "Horse", "Cat"];
// 1. menambahkan elemen baru ke dalam array index terakhir
// animal.push("Fish");

// 2. menambahkan elemen baru ke array dari index pertama
// animal.unshift("Sheep");

// 3. menghapus elemen pertama pada array
// animal.shift();

// 4. menghapus elemen terakhir pada sebuah array
// animal.pop();

// 5. mengurutkan array sesuai abjad
// animal.sort();

// 6. bisa untuk menambahkan atau menghapus elemen pada array (index, howMany, ...,itemx)
// animal.splice(2, 2);
// animal.splice(2, 0, "Monkey", "Cheetah");

// 7. meng "cut" elemen dan memindahkan ke variabelnya (start, end(not included))
const citrus = animal.slice(1, 3);
console.log(citrus);

// console.log(animal);

// 8. filter menseleksi sebuah array yang sesuai dengan kondisi ke dalam array baru
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age > 18;
}
// console.log(result);

// 9. mengubah tipe data number menjadi string
let text = ages.toString();
// console.log(text);

// 10/11 mengubah string menjadi uppercase/lowercase
let txt = "Hello World!";
let lowerCased = txt.toLowerCase();
let upperCased = txt.toUpperCase();
// console.log(lowerCased);
// console.log(upperCased);
