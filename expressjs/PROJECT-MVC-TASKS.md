# Project MVC - Task List

Ini adalah project **Level 2** - kamu akan buat aplikasi Express.js dengan struktur folder yang benar (seperti di dunia kerja).

## 📋 Checklist Project MVC

### Setup Project
- [ ] Buat folder `project-mvc` di dalam folder `expressjs`
- [ ] Jalankan `npm init -y` di dalam folder `project-mvc`
- [ ] Install Express: `npm install express`
- [ ] Buat file `app.js` sebagai entry point

### Struktur Folder
- [ ] Buat folder `routes/` untuk menyimpan semua route
- [ ] Buat folder `controllers/` untuk menyimpan logic bisnis
- [ ] Buat folder `models/` untuk menyimpan data structure

### Routes (Routing Layer)
- [ ] Buat file `routes/userRoutes.js`
- [ ] Define routes: GET /users, GET /users/:id, POST /users, PUT /users/:id, DELETE /users/:id
- [ ] Import dan gunakan di `app.js`

### Controllers (Business Logic Layer)
- [ ] Buat file `controllers/userController.js`
- [ ] Buat function `getAllUsers`
- [ ] Buat function `getUserById`
- [ ] Buat function `createUser`
- [ ] Buat function `updateUser`
- [ ] Buat function `deleteUser`
- [ ] Export semua functions

### Models (Data Layer)
- [ ] Buat file `models/userModel.js`
- [ ] Buat array `users` sebagai database simulasi
- [ ] Export data users

### Testing
- [ ] Test GET /users (ambil semua users)
- [ ] Test GET /users/:id (ambil satu user)
- [ ] Test POST /users (buat user baru)
- [ ] Test PUT /users/:id (update user)
- [ ] Test DELETE /users/:id (hapus user)

### Bonus Challenge
- [ ] Tambahkan error handling middleware
- [ ] Tambahkan validation untuk POST dan PUT
- [ ] Buat resource baru (misal: `products`) dengan struktur MVC yang sama

## 🎯 Tujuan Pembelajaran

Setelah selesai project ini, kamu akan paham:
- Kenapa kita pisah-pisah code ke folder berbeda (Separation of Concerns)
- Apa itu MVC pattern dan kenapa penting
- Bagaimana struktur project Express.js yang profesional
- Cara maintain code yang lebih besar dan kompleks

## 💡 Tips

- Mulai dari `app.js` → `routes` → `controllers` → `models`
- Jangan skip step, ikuti urutan checklist
- Test setiap endpoint setelah dibuat
- Kalau bingung, tanya AI dengan prompt yang ada di file sebelumnya
