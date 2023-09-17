// Kelas Lingkaran
class Lingkaran {
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  hitungLuas() {
    return 22/7 * this.jariJari * this.jariJari;
  }

  hitungKeliling() {
    return 2 * 22/7 * this.jariJari;
  }
}

const lingkaran1 = new Lingkaran(7);
console.log('Luas Lingkaran:', lingkaran1.hitungLuas());
console.log('Keliling Lingkaran:', lingkaran1.hitungKeliling());