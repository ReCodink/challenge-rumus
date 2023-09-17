class Persegi {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    // Metode untuk menghitung keliling persegi
    hitungKeliling() {
      return 4 * this.sideLength;
    }
  }
  
  const persegi1 = new Persegi(5); // Buat objek persegi dengan panjang sisi 5
  const keliling1 = persegi1.hitungKeliling();
  console.log(`Keliling persegi 1: ${keliling1}`);
  
  const persegi2 = new Persegi(7); // Buat objek persegi dengan panjang sisi 7
  const keliling2 = persegi2.hitungKeliling();
  console.log(`Keliling persegi 2: ${keliling2}`);
  