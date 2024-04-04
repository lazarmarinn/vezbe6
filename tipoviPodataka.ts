//Primitivni tipovi

let godine:number = 5;
let ime:string = "lazar";
let studiram:boolean = true;
 
// Nizovi

let predmeti:string[] = ["epos", "klijentske", "cloud"]; //niz stringova

let ocene:number[] = [1,2,3,4,5]; // niz brojeva

// Tuples

let tuple:[string, number] = ["Basamake", 69];

//enum

enum Modul{
    TehnologijeElektronoskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul = Modul.SoftverskoInzenjerstvo;

//Objekti

let student:{ime:string, godine:number, studiram:boolean} = {
    ime:"MicaHiljadarkica",
    godine:15,
    studiram:true
};

// Unija Tipova

let brojIliString:number | string = 10;

//Any tip

let dekiSimic:any="Deki reko ne moze";

//Void tip


// Null i undefind

let n:null = null;
let u:undefined=undefined;

// Type Assertions

let nekaVrednost:any="Neki string";
let duzinaMoga:number = (nekaVrednost as String).length;

console.log("Duzina stringa je: ", duzinaMoga);
console.log(godine, ime, studiram);
console.log(predmeti, ocene);
console.log(tuple);
//console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(dekiSimic);
console.log(n,u);