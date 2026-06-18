var jmlAngkot = 10;
var angkotSehat = 6;
for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= 6 && angkot !== 5) {
        console.log('Angkot no ' + angkot + ' adalah sehat');
    } else if (angkot === 8 || angkot === 10 || angkot ===5) {
        console.log('angkot no ' + angkot + ' lembur');
    } else {
        console.log('angkot no ' + angkot + " rusak");
    }
}