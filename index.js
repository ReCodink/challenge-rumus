class BangunDatar {
    constructor() {
      this.luas = 0;
      this.keliling = 0;
    }
  
    hitungLuas() {}
    hitungKeliling() {}
  }
  
  class Persegi extends BangunDatar {
    constructor(sisi) {
      super();
      this.sisi = sisi;
    }
  
    hitungLuas() {
      this.luas = this.sisi * this.sisi;
    }
  
    hitungKeliling() {
      this.keliling = 4 * this.sisi;
    }
  }
  
  class PersegiPanjang extends BangunDatar {
    constructor(panjang, lebar) {
      super();
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    hitungLuas() {
      this.luas = this.panjang * this.lebar;
    }
  
    hitungKeliling() {
      this.keliling = 2 * (this.panjang + this.lebar);
    }
  }
  
  class Lingkaran extends BangunDatar {
    constructor(jariJari) {
      super();
      this.jariJari = jariJari;
    }
  
    hitungLuas() {
      this.luas = Math.PI * this.jariJari * this.jariJari;
    }
  
    hitungKeliling() {
      this.keliling = 2 * Math.PI * this.jariJari;
    }
  }
  
  class Segitiga extends BangunDatar {
    constructor(sisi1, sisi2, sisi3, tinggi) {
      super();
      this.sisi1 = sisi1;
      this.sisi2 = sisi2;
      this.sisi3 = sisi3;
      this.tinggi = tinggi;
    }
  
    hitungLuas() {
      this.luas = (0.5 * this.sisi1 * this.tinggi);
    }
  
    hitungKeliling() {
      this.keliling = this.sisi1 + this.sisi2 + this.sisi3;
    }
  }
  
  class Trapesium extends BangunDatar {
    constructor(sisiAtas, sisiBawah, tinggi, sisiMiring1, sisiMiring2) {
      super();
      this.sisiAtas = sisiAtas;
      this.sisiBawah = sisiBawah;
      this.tinggi = tinggi;
      this.sisiMiring1 = sisiMiring1;
      this.sisiMiring2 = sisiMiring2;
    }
  
    hitungLuas() {
      this.luas = ((this.sisiAtas + this.sisiBawah) * this.tinggi) / 2;
    }
  
    hitungKeliling() {
      this.keliling = this.sisiAtas + this.sisiBawah + this.sisiMiring1 + this.sisiMiring2;
    }
  }
  
  // Contoh penggunaan:
  
  const persegi = new Persegi(5);
  persegi.hitungLuas();
  persegi.hitungKeliling();
  console.log("Persegi:");
  console.log("Luas:", persegi.luas);
  console.log("Keliling:", persegi.keliling);
  
  const persegiPanjang = new PersegiPanjang(4, 6);
  persegiPanjang.hitungLuas();
  persegiPanjang.hitungKeliling();
  console.log("\nPersegi Panjang:");
  console.log("Luas:", persegiPanjang.luas);
  console.log("Keliling:", persegiPanjang.keliling);
  
  const lingkaran = new Lingkaran(3);
  lingkaran.hitungLuas();
  lingkaran.hitungKeliling();
  console.log("\nLingkaran:");
  console.log("Luas:", lingkaran.luas);
  console.log("Keliling:", lingkaran.keliling);
  
  const segitiga = new Segitiga(5, 4, 3, 8);
  segitiga.hitungLuas();
  segitiga.hitungKeliling();
  console.log("\nSegitiga:");
  console.log("Luas:", segitiga.luas);
  console.log("Keliling:", segitiga.keliling);
  
  const trapesium = new Trapesium(3, 7, 4, 5, 5);
  trapesium.hitungLuas();
  trapesium.hitungKeliling();
  console.log("\nTrapesium:");
  console.log("Luas:", trapesium.luas);
  console.log("Keliling:", trapesium.keliling);
  