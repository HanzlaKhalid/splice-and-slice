// This variabel copy means 'start number 2 end number 6' copy center in this word;
var pets = ["A", "B", "C", "D", "F", " G", "H"];
var copy =pets.slice(2, 6);
console.log(copy);
// This variabel insert means 'start number 2 and delete index 3 in this array;
var insert = pets.splice(2, 3, "Milli");
console.log(insert);
// And then ceck the variabel pets in consol;
console.log(pets)