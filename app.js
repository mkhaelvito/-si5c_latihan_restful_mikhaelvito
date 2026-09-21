const express = require('express');
	const app = express();
	const PORT = 3000;
	
// 	app.get('/', (req, res) => {
// 	    res.send('Server Express.js berjalan!');
// 	});
	
// 	app.listen(PORT, () => {
// 	    console.log(`Server berjalan di http://localhost:${PORT}`);
// 	});

//     // Middleware agar req.body (JSON) dapat dibaca
app.use(express.json());

// Data sementara (disimpan di memori, hilang saat server restart)
let mahasiswa = [
    { id: 1, nama: 'Andi', jurusan: 'Sistem Informasi' },
    { id: 2, nama: 'Budi', jurusan: 'Informatika' },
];
// let nextId = 3; // penghitung id untuk data baru

// GET /mahasiswa -> menampilkan seluruh data
app.get('/mahasiswa', (req, res) => {
  const { jurusan } = req.query;

  if (jurusan) {
    const hasil = mahasiswa.filter((m) => m.jurusan === jurusan);
    return res.json(hasil);
  }

  res.json(mahasiswa);
});

// GET /mahasiswa/:id -> menampilkan satu data berdasarkan id
app.get('/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = mahasiswa.find((m) => m.id === id);

    if (!data) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.json(data);
});

// app.get('/', (req, res) => {
// 	    res.send('Server Express.js berjalan!');
// 	});
	
	app.listen(PORT, () => {
	    console.log(`Server berjalan di http://localhost:${PORT}`);
	});