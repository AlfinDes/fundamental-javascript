# 1. Portfolio
Steps to build your personal portfolio website.
## 
- [✅] **Hero / Home** - Impactful introduction and photo.
- [✅] **About Me** - Short bio and personality.
- [ ] **Projects** - Grid of your best work (Title + Image + Link).
- [ ] **Articles** - List of blog posts or thoughts.
- [✅] **Contact** - Email link and Social Media icons.
- [✅] **Footer** - Copyright and extra links.
## Deployment
<<<<<<< HEAD
- [ ] Push to GitHub.
- [ ] Deploy to Vercel. Link : taruh link hasilnya di sini

---

# 2. English Community APP
Platform untuk belajar bahasa Inggris dengan sistem pairing dan game interaktif.

## Flow Saat Ini (Current Implementation)
1. **Admin** klik tombol "Start Pairing"
2. Sistem ambil semua **user yang connected/online**
3. Sistem pair user ke **room-room** (2 user per room)
4. User dapat notifikasi: "Kamu di room X dengan [Nama Partner]"
5. **Selesai** - untuk sekarang video call masih di luar aplikasi

## Rencana Pengembangan Selanjutnya

### Phase 1: Video Call Built-in
- [ ] **Integrasi Video Call** - Video call langsung di dalam aplikasi (tidak perlu Google Meet/Zoom lagi)
- [ ] **Room System** - Setiap pair punya room sendiri dengan video call

**Tools**
`socket.io-client` + `simple-peer`

**Cara Kerja (Ringan di Server):**
1. **Pairing**: Socket.io kirim notifikasi → ringan ✅
2. **Video Call**: 
   - Socket.io cuma buat "perkenalan" (signaling)
   - Setelah connect, video langsung **browser A ↔ browser B** (peer-to-peer)
   - Server **TIDAK** lewat video data → ringan ✅
3. **Game Sync**: Socket.io kirim event (klik benar/salah, score) → ringan ✅

### Phase 2: Game System
- [ ] **List Game** - Daftar game yang bisa dipilih saat meeting
- [ ] **Game: Tebak Vocabulary** - Game default untuk latihan vocab
  - [ ] Timer & giliran otomatis
  - [ ] Sistem scoring
  - [ ] Tombol benar/salah/skip
- [ ] **Game: Topic Discussion** - Diskusi topik tertentu
- [ ] **Game: Role Play** - Simulasi percakapan situasi tertentu
- [ ] **Approval System** - Kedua user harus approve sebelum game dimulai

## Struktur Teknis
- [ ] **Modular Game System** - Setiap game dalam folder terpisah
- [ ] **Game Registry** - Central registry untuk load semua game
- [ ] **Real-time Communication** - Socket.io untuk pairing & game sync
=======
- [✅] Push to GitHub.
- [✅] Deploy to Vercel. Link :https://alfin-dev.vercel.app
>>>>>>> 43c7de9 (update expressjs topik 2 dan readme.md)
