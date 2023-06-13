var animals = [
  { name: "Fluffy", species: "cat", kelas: { name: "mamalia" } },
  { name: "Carlo", species: "koala", kelas: { name: "vertebrata" } },
  { name: "Nemo", species: "fish", kelas: { name: "mamalia" } },
  { name: "Hamilton", species: "koala", kelas: { name: "vertebrata" } },
  { name: "Dory", species: "fish", kelas: { name: "mamalia" } },
  { name: "Ursa", species: "cat", kelas: { name: "vertebrata" } },
];

// Fungsi OnlyCat,
// yang pertama membuat sebuah fungsi untuk mengambil object dalam array jika saat looping species == 'cat',
// masukkan kedalam variable bernama OnlyCat. didalam OnlyCat ini hanya ada object yang berspecies cat.

function OnlyCat(animal) {
  var OnlyCat = [];
  for (var i = 0; i < animal.length; i++) {
    if (animal[i].species == "cat") {
      OnlyCat.push(animal[i]);
    }
  }
  console.log(OnlyCat);
}

console.log("Only Cat");
OnlyCat(animals);

// Manipulasi string object, membuat fungsi jika saat looping di temukan object yang classname nya 'vertebrata' diubah / overwrite menjadi 'non-mamalia'.

function OnlyNonMamalia(animal) {
  for (var i = 0; i < animal.length; i++) {
    if (animal[i].kelas.name == "vertebrata") {
      animal[i].kelas.name = "non-mamalia";
    }
  }
  console.log(animal);
}

console.log("\nOnly Non Mamalia");
OnlyNonMamalia(animals);
