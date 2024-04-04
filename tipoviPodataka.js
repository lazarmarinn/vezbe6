//Primitivni tipovi
var godine = 5;
var ime = "lazar";
var studiram = true;
// Nizovi
var predmeti = ["epos", "klijentske", "cloud"]; //niz stringova
var ocene = [1, 2, 3, 4, 5]; // niz brojeva
// Tuples
var tuple = ["Basamake", 69];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronoskogPoslovanja"] = 0] = "TehnologijeElektronoskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.SoftverskoInzenjerstvo;
//Objekti
var student = {
    ime: "MicaHiljadarkica",
    godine: 15,
    studiram: true
};
// Unija Tipova
var brojIliString = 10;
//Any tip
var dekiSimic = "Deki reko ne moze";
//Void tip
function pozdravBrate() {
    console.log("Cao");
}
// Null i undefind
var n = null;
var u = undefined;
// Type Assertions
var nekaVrednost = "Neki string";
var duzinaMoga = nekaVrednost.length;
console.log("Duzina stringa je: ", duzinaMoga);
console.log(godine, ime, studiram);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(dekiSimic);
console.log(n, u);
