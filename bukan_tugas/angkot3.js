var jmlAngkot = 10;
var angkot = 1;
var angkotSehat = 6;
for (angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotSehat + 1) {
        console.log('Angkot no ' + angkot + ' adalah sehat');
    } else {
        console.log('angkot no '+ angkot +" rusak");
    }
}