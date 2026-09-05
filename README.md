# WhatsApp Bot Grup 🤖

Bot WhatsApp canggih dengan fitur lengkap untuk grup, termasuk game, admin panel, dan AI assistant menggunakan Gemini AI.
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
grok=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
## ✨ Fitur Utama

### 🎮 Game Features
- **Kuis** - Pertanyaan umum dengan berbagai kategori
- **Tebak Kata** - Game menebak kata dengan clue
- **Siapakah Aku** - Game tebak tokoh/karakter
- **Teka-teki** - Berbagai teka-teki menarik
- **Asah Otak** - Soal logika dan matematika
- **Cak Lontong** - Teka-teki khas Indonesia
- **Susun Kata** - Game menyusun huruf menjadi kata
- **Math Game** - Soal matematika
- **Suit** - Batu gunting kertas
- **Slot Machine** - Game slot sederhana

### 👑 Admin Features
- Manajemen admin (tambah/hapus admin)
- Tambah konten custom (soal kuis, teka-teki, dll)
- Statistik bot dan database
- Monitoring aktivitas user

### 🤖 AI Assistant
- Powered by Google Gemini AI
- Memory lokal per chat
- Bahasa informal dan santai
- Riwayat percakapan tersimpan

### 📊 Database Features
- User management dengan level & exp
- Leaderboard sistem
- Message analytics
- Sentiment analysis
- Word frequency tracking

## 🚀 Installation

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd BOTGRUP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment**
   - Copy `.env.example` to `.env`
   - Dapatkan API key dari [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Isi `GEMINI_API_KEY` di file `.env`
   - Atur `SUPER_ADMIN` dengan nomor WhatsApp Anda

4. **Run bot**
   ```bash
   npm start
   ```

5. **Scan QR Code**
   - QR code akan muncul di terminal
   - Scan dengan WhatsApp di HP Anda

## 📱 Commands

### 🎮 Game Commands
```
/kuis - Mulai game kuis
/tebakkata - Game tebak kata
/siapakahaku - Game tebak tokoh
/tekateki - Teka-teki
/asahotak - Asah otak
/caklontong - Cak lontong
/susunkata - Susun kata
/math - Soal matematika
/suit [pilihan] - Batu gunting kertas
/slot - Slot machine
```

### 👑 Admin Commands
```
/admin help - Bantuan admin
/admin add [user] - Tambah admin
/admin remove [user] - Hapus admin
/admin stats - Statistik bot
/admin addkuis [soal|jawaban|a|b|c|d] - Tambah soal kuis
/admin addkata [kata] - Tambah kata untuk tebak kata
/admin addteka [soal|jawaban] - Tambah teka-teki
```

### 🤖 AI Commands
```
/ai [pertanyaan] - Chat dengan AI
/gemini [pertanyaan] - Chat dengan Gemini AI
```

### 📊 Utility Commands
```
/menu - Menu utama
/profile - Profil user
/leaderboard - Papan peringkat
/stats - Statistik bot
/help - Bantuan
```

## 🔧 Configuration

### Environment Variables
```env
GEMINI_API_KEY=your_api_key_here
BOT_NAME=WhatsApp Bot
BOT_PREFIX=/
DB_PATH=./bot_data.db
SUPER_ADMIN=628123456789
AI_MAX_HISTORY=50
AI_RESPONSE_LIMIT=1000
```

### Database Tables
- `users` - Data pengguna
- `messages` - Riwayat pesan
- `games` - Data game
- `groups` - Data grup
- `admin_users` - Data admin
- `custom_questions` - Konten custom
- `ai_conversations` - Riwayat AI chat

## 🛠️ Development

### Project Structure
```
BOTGRUP/
├── app.js          # Main application
├── database.js     # Database management
├── games.js        # Game engine
├── menu.js         # Menu system
├── admin.js        # Admin system
├── ai.js           # AI system
├── sentiment.js    # Sentiment analysis
├── utils.js        # Utilities
├── api.js          # API management
├── config.js       # Configuration
├── package.json    # Dependencies
├── .env            # Environment variables
└── README.md       # Documentation
```

### Adding New Games
1. Tambah data game di `games.js`
2. Implementasi logic di method yang sesuai
3. Tambah command handler di `app.js`
4. Update menu di `menu.js`

### Adding Admin Features
1. Tambah method di `AdminSystem` class
2. Update command handler di `handleCommand`
3. Tambah database method jika diperlukan

## 🔒 Security

- API keys disimpan di environment variables
- Admin system dengan validasi
- Rate limiting untuk commands
- Input sanitization
- Database prepared statements

## 📈 Performance

- SQLite database untuk performa optimal
- Caching system untuk data yang sering diakses
- Async/await untuk non-blocking operations
- Memory management untuk AI conversations

## 🐛 Troubleshooting

### Common Issues

1. **QR Code tidak muncul**
   - Pastikan terminal mendukung QR code
   - Coba restart aplikasi

2. **Database error**
   - Hapus file `bot_data.db` dan restart
   - Periksa permission folder

3. **AI tidak merespon**
   - Periksa API key Gemini
   - Cek koneksi internet
   - Lihat log error di console

4. **Command tidak berfungsi**
   - Periksa prefix command
   - Pastikan bot sudah terhubung
   - Cek cooldown command

## 📝 License

MIT License - Lihat file LICENSE untuk detail.

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah:
- Buat issue di GitHub
- Contact developer

---

**Dibuat dengan ❤️ untuk komunitas WhatsApp Indonesia**