// Inheritance atau pewarisan

class Buku{

    constructor(nama, tahun) {
        this.nama = nama;
        this.tahun = tahun;
    }
}

// menambahkan exteds (Nama classs yang akan mewariskan)
class Komik extends Buku {
    constructor(nama, tahun, author) {
        // menggunakan "super" untuk melakukan pewarisannya
        super(nama, tahun)
        this.author = author;
    }
    Halaman(){
            return `${this.nama} ${this.tahun} ${this.author}`
    }
}

let komik1 = new Komik('Attack on Wandi', 2022, 'Wandi Apriansyah')
console.log(komik1.Halaman())

let book = new Buku('LOOKISM', 2016);
console.log(komik1);

let komik = new Komik('One Piece', 2069, 'Oda Sepeda');
console.log(komik.Halaman())


// Encapsulate/encapsulation bisa diartikan inkapsulasi adalah nkapsulasi adalah konsep di mana atribut (variabel) dan metode (fungsi) yang berkaitan dengan objek tertentu dibungkus bersama dalam objek tersebut

class AkunBank {
  constructor(balance) {
    // atribut "balance" cuma bsa diakses di dalem objek "AkunBank"
    // karna gbsa dideklarasikan sbgai properti publik 
    this._balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  pertukaran(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    }
  }

  getBalance() {
    // metod/function ini digunain buat dapet saldo, gaada akses langsung ke balance 
    return this._balance;
  }
}

const akunGwejh = new AkunBank(1000);
akunGwejh.deposit(500);
akunGwejh.pertukaran(200);

// ini bakal hasilin error/undefined karena mengakses langsung "balance" yang ada di "AkunBank"
// yg dmna seperti yg udh di jelasin tdi bahwa itu teh propertu pribadi milik si "AkunBank" yg dmna kta gbisa akses secara langsung
console.log(akunGwejh.balance) 

// kita cuman bisa ngakses saldo lewat metod/function "getBalance()"
console.log(akunGwejh.getBalance());




// Abstraction atau abstraksi, tujuann untuk nyembunyiin detail yg gaperlu dan nge ekspos data yang diperlukan azza

// pake konsep abstarksi/abstraction buat bikin class dasar "Binatang" dengan fungsi/metod abstrak "bersuara"
class Binatang {
  constructor(nama) {
    this.nama = nama;
  }

  bersuara() {
// Ini adalah fungsi/metod abstrak
    console.log(`${this.nama} bersuara.`);
  }
}

// ini juga masuk ke inheritance karena ada "extends"

//lalu mewarisi kelas "Kucing" dan "Anjing" dari kelas "Binatang"
class Kucing extends Binatang {
  bersuara() {
    //nge implementasiin fungsi/metod abstraksi tadi "bersuara" sesuai action/perilaku yang di mau
    console.log(`${this.nama} mengeluarkan suara: Meow!`);
  }
}

class Anjing extends Binatang {
  bersuara() {
    console.log(`${this.nama} mengeluarkan suara: Woof!`);
  }
}



const kucing = new Kucing('Kitty');
const anjing = new Anjing('Buddy');

kucing.bersuara();
anjing.bersuara();




// Polymorphism atau Polimorfisme memungkinkan objek dengan tipe yang berbeda untuk merespons metode yang sama dengan cara yang berbeda


class Bentuk {
  area() {
    return 0;
  }
}

class Lingkaran extends Bentuk {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    // ini kita mengoverride fungsi/metod "area()" sesuai dengan action masing masing
    return Math.PI * this.radius ** 2;
  }
}

class Segitiga extends Bentuk {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  } 

  area() {
    // ini kita mengoverride fungsi/metod "area()" sesuai dengan action masing masing
    return this.width * this.height;
  }
}

// bisa dilihat di atas ini bahwa mereka mempunyai fungsi/metod yang sama yaitu "area()", tapi hasil akhirnya beda sesuai dgn apa yang di definiskan di masing masing kelas turunan

const lingkaran = new Lingkaran(5);
const segitiga = new Segitiga(4, 6);

console.log(lingkaran.area());
console.log(segitiga.area());

