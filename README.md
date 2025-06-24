# Portfolio Website dengan Tailwind CSS di Termux

Sebuah website portfolio responsif yang dibangun menggunakan HTML, Tailwind CSS, dan JavaScript vanilla, dirancang khusus untuk dapat dikembangkan di lingkungan Termux Android dan di-deploy ke Vercel.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi di Termux](#instalasi-di-termux)
- [Struktur Proyek](#struktur-proyek)
- [Panduan Pengembangan](#panduan-pengembangan)
- [Kustomisasi](#kustomisasi)
- [Deployment ke Vercel](#deployment-ke-vercel)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

### Desain dan UI/UX
- **Desain Responsif**: Website secara otomatis menyesuaikan tampilan untuk berbagai ukuran layar, mulai dari smartphone hingga desktop
- **Mode Gelap/Terang**: Toggle yang memungkinkan pengguna beralih antara tema gelap dan terang dengan transisi yang halus
- **Animasi Modern**: Implementasi animasi scroll reveal, hover effects, dan micro-interactions yang meningkatkan pengalaman pengguna
- **Gradient Backgrounds**: Penggunaan gradient yang menarik untuk memberikan kesan modern dan profesional

### Navigasi dan Interaktivitas
- **Navigasi Responsif**: Header dengan menu hamburger untuk tampilan mobile dan navigasi horizontal untuk desktop
- **Smooth Scrolling**: Navigasi antar section dengan efek scroll yang halus
- **Active Section Highlighting**: Indikator visual yang menunjukkan section mana yang sedang dilihat pengguna
- **Back to Top Button**: Tombol yang muncul saat scroll untuk kembali ke atas halaman

### Konten dan Fungsionalitas
- **Hero Section**: Bagian pembuka dengan foto profil, tagline, dan call-to-action buttons
- **About Section**: Informasi tentang background, pengalaman, dan statistik pencapaian
- **Projects Showcase**: Grid layout untuk menampilkan portfolio proyek dengan hover effects
- **Skills Visualization**: Progress bars yang menunjukkan tingkat keahlian dalam berbagai teknologi
- **Contact Form**: Formulir kontak dengan validasi real-time dan feedback visual
- **Social Media Integration**: Link ke berbagai platform media sosial

### Optimasi dan Performa
- **SEO Friendly**: Meta tags yang lengkap untuk optimasi mesin pencari
- **Fast Loading**: CSS yang di-minify dan struktur HTML yang optimal
- **Cross-browser Compatibility**: Kompatibilitas dengan berbagai browser modern
- **Accessibility**: Implementasi best practices untuk aksesibilitas web

## 🛠 Teknologi yang Digunakan

### Frontend Technologies
- **HTML5**: Struktur semantik dengan markup yang clean dan accessible
- **Tailwind CSS v3.4**: Framework CSS utility-first untuk styling yang efisien dan konsisten
- **JavaScript ES6+**: Vanilla JavaScript untuk interaktivitas tanpa dependency framework
- **CSS Grid & Flexbox**: Layout modern untuk responsivitas yang optimal

### Development Tools
- **Node.js**: Runtime JavaScript untuk menjalankan build tools
- **PostCSS**: Processor CSS untuk optimasi dan autoprefixer
- **Autoprefixer**: Otomatis menambahkan vendor prefixes untuk kompatibilitas browser
- **Git**: Version control system untuk tracking perubahan kode

### Deployment & Hosting
- **Vercel**: Platform hosting modern dengan deployment otomatis dari Git
- **GitHub**: Repository hosting untuk version control dan kolaborasi

### Development Environment
- **Termux**: Terminal emulator Android untuk development mobile
- **Python HTTP Server**: Server lokal untuk testing dan development

## 📱 Persyaratan Sistem

### Untuk Termux (Android)
- **Android Version**: Android 7.0 (API level 24) atau lebih tinggi
- **RAM**: Minimal 2GB, disarankan 4GB atau lebih
- **Storage**: Minimal 1GB ruang kosong untuk instalasi dependencies
- **Termux Version**: Versi terbaru dari F-Droid (bukan dari Google Play Store)
- **Internet Connection**: Koneksi internet stabil untuk download packages

### Untuk Desktop Development
- **Operating System**: Windows 10+, macOS 10.14+, atau Linux Ubuntu 18.04+
- **Node.js**: Version 16.0 atau lebih tinggi
- **Git**: Version 2.20 atau lebih tinggi
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, atau Edge 90+

## 🚀 Instalasi di Termux

### Langkah 1: Persiapan Termux

Pastikan Anda menggunakan Termux dari F-Droid, bukan dari Google Play Store, karena versi F-Droid lebih up-to-date dan memiliki akses penuh ke packages yang diperlukan.

```bash
# Update package list dan upgrade existing packages
pkg update && pkg upgrade -y

# Install packages dasar yang diperlukan
pkg install nodejs git curl python -y

# Setup akses ke storage device
termux-setup-storage
```

### Langkah 2: Verifikasi Instalasi

```bash
# Cek versi Node.js (harus 16.0+)
node --version

# Cek versi npm
npm --version

# Cek versi Git
git --version

# Cek versi Python
python --version
```

### Langkah 3: Clone atau Download Proyek

```bash
# Jika menggunakan Git (recommended)
git clone <repository-url>
cd my-portfolio

# Atau jika download manual
# Extract file zip ke direktori my-portfolio
```

### Langkah 4: Instalasi Dependencies

```bash
# Install dependencies npm
npm install

# Verifikasi instalasi
npm list --depth=0
```

### Langkah 5: Build dan Testing

```bash
# Build CSS dari Tailwind
npm run build

# Start development server
npm run dev

# Di terminal lain, jalankan HTTP server
npm run serve
```

### Langkah 6: Akses Website

Buka browser di Android dan navigasi ke:
```
http://localhost:8000
```

## 📁 Struktur Proyek

```
my-portfolio/
├── index.html              # Halaman utama website
├── package.json            # Dependencies dan scripts npm
├── package-lock.json       # Lock file untuk dependencies
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── postcss.config.js       # Konfigurasi PostCSS
├── vercel.json            # Konfigurasi deployment Vercel
├── .gitignore             # File yang diabaikan Git
├── README.md              # Dokumentasi proyek
├── src/                   # Source files
│   ├── input.css          # Input CSS dengan direktif Tailwind
│   └── js/
│       └── main.js        # JavaScript utama untuk interaktivitas
├── dist/                  # Generated files
│   └── output.css         # CSS yang di-generate Tailwind
└── assets/                # Asset files
    └── img/               # Direktori untuk gambar
        └── (gambar-gambar)
```

### Penjelasan File Utama

#### `index.html`
File HTML utama yang berisi struktur lengkap website dengan semantic markup. Menggunakan meta tags yang lengkap untuk SEO dan responsive design. Struktur terdiri dari:
- Header dengan navigasi responsif
- Hero section dengan call-to-action
- About section dengan informasi personal
- Projects section dengan showcase portfolio
- Skills section dengan progress indicators
- Contact section dengan form dan informasi kontak
- Footer dengan links dan informasi tambahan

#### `src/input.css`
File CSS input yang berisi direktif Tailwind CSS dan custom styles. Mencakup:
- Import direktif Tailwind (@tailwind base, components, utilities)
- Custom component classes menggunakan @layer
- Google Fonts import
- Custom scrollbar styling
- Dark mode transitions

#### `src/js/main.js`
File JavaScript utama yang menghandle semua interaktivitas website:
- Navigation menu toggle dan smooth scrolling
- Dark mode functionality dengan localStorage
- Form validation dan submission handling
- Scroll effects dan animations
- Intersection Observer untuk lazy loading
- Accessibility improvements

#### `tailwind.config.js`
Konfigurasi Tailwind CSS yang mencakup:
- Content paths untuk purging unused CSS
- Custom color palette (primary, secondary, accent)
- Extended theme dengan custom fonts dan animations
- Dark mode configuration
- Custom keyframes untuk animations

## 🔧 Panduan Pengembangan

### Development Workflow

#### 1. Setup Development Environment
```bash
# Clone repository
git clone <repository-url>
cd my-portfolio

# Install dependencies
npm install

# Start development mode
npm run dev
```

#### 2. Development Commands
```bash
# Build CSS (production)
npm run build

# Build CSS dengan watch mode
npm run build:watch
# atau
npm run dev

# Start local server
npm run serve

# Build dan start server sekaligus
npm run start
```

#### 3. File Watching dan Hot Reload
Saat development, gunakan dua terminal:

Terminal 1 (CSS watching):
```bash
npm run dev
```

Terminal 2 (HTTP server):
```bash
npm run serve
```

### Customization Guidelines

#### Mengubah Warna Tema
Edit file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Ganti dengan warna primary pilihan Anda
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
      // ... warna lainnya
    }
  }
}
```

#### Menambah Font Custom
1. Tambahkan import di `src/input.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap');
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  'custom': ['YourFont', 'sans-serif'],
}
```

#### Menambah Animasi Custom
Di `tailwind.config.js`:
```javascript
animation: {
  'custom-fade': 'customFade 0.5s ease-in-out',
},
keyframes: {
  customFade: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  }
}
```

### Adding New Sections

#### 1. HTML Structure
Tambahkan section baru di `index.html`:
```html
<section id="new-section" class="section-padding bg-white dark:bg-secondary-900">
  <div class="container-custom">
    <!-- Konten section -->
  </div>
</section>
```

#### 2. Navigation Link
Tambahkan link di navigation:
```html
<a href="#new-section" class="nav-link">New Section</a>
```

#### 3. JavaScript Integration
Jika perlu interaktivitas, tambahkan di `src/js/main.js`:
```javascript
function initializeNewSection() {
  // Logic untuk section baru
}

// Panggil di DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... existing code
  initializeNewSection();
});
```

### Performance Optimization

#### CSS Optimization
- Tailwind secara otomatis melakukan purging unused CSS
- Gunakan `npm run build` untuk production build yang di-minify
- Hindari inline styles, gunakan Tailwind classes

#### JavaScript Optimization
- Gunakan event delegation untuk event handlers
- Implement throttling untuk scroll events
- Lazy load images dan content yang tidak immediately visible

#### Image Optimization
- Gunakan format WebP untuk browser yang support
- Implement lazy loading untuk images
- Compress images sebelum upload

## 🎨 Kustomisasi

### Mengubah Konten

#### Personal Information
Edit bagian hero dan about di `index.html`:
```html
<!-- Hero Section -->
<h1 class="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
  Halo, Saya <span class="text-gradient">Your Name</span>
</h1>
<p class="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8">
  Your personal tagline and description
</p>
```

#### Projects Section
Ganti project cards dengan proyek Anda sendiri:
```html
<div class="card group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
  <div class="relative overflow-hidden rounded-lg mb-6">
    <div class="bg-gradient-to-br from-your-color to-your-color h-48 flex items-center justify-center">
      <i class="fas fa-your-icon text-4xl text-white"></i>
    </div>
  </div>
  <h3 class="font-heading font-semibold text-xl mb-3">Your Project Name</h3>
  <p class="text-secondary-600 dark:text-secondary-400 mb-4">
    Your project description
  </p>
  <div class="flex flex-wrap gap-2">
    <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">Tech 1</span>
    <!-- More tech tags -->
  </div>
</div>
```

#### Skills Section
Update skill levels dan technologies:
```html
<div class="skill-item">
  <div class="flex justify-between items-center mb-2">
    <span class="text-secondary-700 dark:text-secondary-300">Your Skill</span>
    <span class="text-primary-600 dark:text-primary-400 font-medium">90%</span>
  </div>
  <div class="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
    <div class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style="width: 90%"></div>
  </div>
</div>
```

### Mengubah Layout

#### Grid Layout
Untuk mengubah layout projects dari 3 kolom menjadi 2 kolom:
```html
<!-- Dari -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- Menjadi -->
<div class="grid md:grid-cols-2 gap-8">
```

#### Section Spacing
Untuk mengubah spacing antar section:
```css
/* Di src/input.css */
.section-padding {
  @apply py-20 px-4 sm:px-6 lg:px-8; /* Dari py-16 menjadi py-20 */
}
```

### Adding Custom Components

#### Custom Button Styles
Di `src/input.css`:
```css
@layer components {
  .btn-custom {
    @apply bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105;
  }
}
```

#### Custom Card Variants
```css
@layer components {
  .card-highlight {
    @apply card border-2 border-primary-200 dark:border-primary-800 shadow-xl;
  }
  
  .card-minimal {
    @apply bg-transparent border border-secondary-200 dark:border-secondary-700 rounded-lg p-4;
  }
}
```

## 🚀 Deployment ke Vercel

### Persiapan Deployment

#### 1. Pastikan Build Berhasil
```bash
# Test build lokal
npm run build

# Test server lokal
npm run serve
```

#### 2. Commit Changes ke Git
```bash
git add .
git commit -m "Ready for deployment"
```

### Deployment via Vercel CLI

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login ke Vercel
```bash
vercel login
```

#### 3. Deploy Project
```bash
# Deploy untuk pertama kali
vercel

# Deploy dengan custom domain
vercel --prod
```

### Deployment via GitHub

#### 1. Push ke GitHub
```bash
# Tambahkan remote repository
git remote add origin https://github.com/username/my-portfolio.git

# Push ke GitHub
git push -u origin main
```

#### 2. Connect ke Vercel
1. Login ke [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import dari GitHub repository
4. Configure build settings (biasanya auto-detect)
5. Deploy

### Environment Variables (Jika Diperlukan)

Jika menggunakan API keys atau environment variables:

#### 1. Local Development
Buat file `.env.local`:
```
NEXT_PUBLIC_API_KEY=your_api_key
CONTACT_EMAIL=your_email@example.com
```

#### 2. Vercel Dashboard
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add your variables

### Custom Domain Setup

#### 1. Via Vercel Dashboard
1. Go to Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Follow DNS configuration instructions

#### 2. DNS Configuration
Tambahkan CNAME record di DNS provider:
```
Type: CNAME
Name: www (atau subdomain lain)
Value: your-project.vercel.app
```

## 🔧 Troubleshooting

### Masalah Umum di Termux

#### 1. Node.js Installation Issues
**Problem**: Error saat install Node.js
```bash
# Solution: Update repositories dan install ulang
pkg update
pkg upgrade
pkg install nodejs -y
```

#### 2. Permission Denied Errors
**Problem**: Permission denied saat menjalankan commands
```bash
# Solution: Setup storage permissions
termux-setup-storage

# Atau pindah ke direktori home
cd $HOME
```

#### 3. npm Install Failures
**Problem**: Dependencies gagal install
```bash
# Solution: Clear npm cache dan install ulang
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 4. Python Server Issues
**Problem**: HTTP server tidak bisa start
```bash
# Solution: Gunakan port yang berbeda
python -m http.server 3000

# Atau gunakan Node.js server
npx http-server -p 8080
```

### Masalah Build dan Development

#### 1. Tailwind CSS Not Working
**Problem**: Styles tidak muncul atau tidak ter-apply

**Solutions**:
```bash
# 1. Pastikan build command berjalan
npm run build

# 2. Check content paths di tailwind.config.js
# Pastikan path mengarah ke file HTML/JS yang benar

# 3. Restart development server
# Stop current process dan jalankan ulang
npm run dev
```

#### 2. JavaScript Errors
**Problem**: Console errors atau functionality tidak bekerja

**Solutions**:
```javascript
// 1. Check browser console untuk error details
// 2. Pastikan semua DOM elements ada sebelum diakses
if (element) {
  // Your code here
}

// 3. Wrap code dalam DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Your initialization code
});
```

#### 3. Dark Mode Not Persisting
**Problem**: Dark mode setting tidak tersimpan

**Solution**:
```javascript
// Check localStorage support
if (typeof(Storage) !== "undefined") {
  localStorage.setItem('theme', 'dark');
} else {
  // Fallback untuk browser yang tidak support localStorage
  document.documentElement.classList.add('dark');
}
```

### Masalah Deployment

#### 1. Vercel Build Failures
**Problem**: Build gagal di Vercel

**Solutions**:
```bash
# 1. Test build lokal terlebih dahulu
npm run build

# 2. Check vercel.json configuration
# 3. Pastikan semua dependencies ada di package.json
# 4. Check build logs di Vercel dashboard
```

#### 2. CSS Not Loading in Production
**Problem**: Styles tidak muncul setelah deploy

**Solutions**:
```html
<!-- 1. Pastikan path CSS benar -->
<link rel="stylesheet" href="./dist/output.css">

<!-- 2. Check network tab di browser developer tools -->
<!-- 3. Pastikan file CSS ter-generate dan ter-commit ke Git -->
```

#### 3. 404 Errors on Refresh
**Problem**: Page refresh menghasilkan 404

**Solution**: Update `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Performance Issues

#### 1. Slow Loading Times
**Solutions**:
```bash
# 1. Optimize images
# Compress dan convert ke WebP format

# 2. Minify CSS dan JS
npm run build

# 3. Enable Gzip compression di server
# Vercel automatically handles this
```

#### 2. Large Bundle Size
**Solutions**:
```javascript
// 1. Remove unused CSS classes
// Tailwind automatically purges unused styles

// 2. Optimize JavaScript
// Remove console.logs dan unused functions

// 3. Lazy load images
const images = document.querySelectorAll('img[data-src]');
// Implement intersection observer
```

### Browser Compatibility Issues

#### 1. CSS Grid/Flexbox Issues
**Problem**: Layout broken di browser lama

**Solution**:
```css
/* Fallback untuk browser lama */
.grid-fallback {
  display: block;
}

@supports (display: grid) {
  .grid-fallback {
    display: grid;
  }
}
```

#### 2. JavaScript ES6+ Issues
**Problem**: JavaScript tidak bekerja di browser lama

**Solution**:
```javascript
// Gunakan polyfills atau transpile dengan Babel
// Atau gunakan syntax yang lebih compatible

// Dari:
const element = document.querySelector('.class');

// Ke:
var element = document.querySelector('.class');
```

## ❓ FAQ

### General Questions

**Q: Apakah bisa menggunakan framework lain selain Tailwind CSS?**
A: Ya, Anda bisa mengganti Tailwind CSS dengan framework lain seperti Bootstrap atau Bulma. Namun, Anda perlu mengubah konfigurasi build dan mengganti semua class names di HTML.

**Q: Bisakah menambahkan backend untuk contact form?**
A: Ya, Anda bisa menambahkan backend menggunakan Node.js/Express, PHP, atau serverless functions. Untuk Vercel, Anda bisa menggunakan Vercel Functions atau integrasi dengan service seperti Formspree atau Netlify Forms.

**Q: Apakah website ini SEO-friendly?**
A: Ya, website sudah include meta tags yang lengkap, semantic HTML, dan struktur yang SEO-friendly. Untuk optimasi lebih lanjut, Anda bisa menambahkan sitemap.xml dan robots.txt.

### Termux Specific

**Q: Kenapa harus menggunakan Termux dari F-Droid?**
A: Versi Termux di Google Play Store sudah tidak di-update dan memiliki keterbatasan akses. Versi F-Droid lebih up-to-date dan memiliki akses penuh ke package repositories.

**Q: Apakah bisa development di tablet?**
A: Ya, bahkan lebih nyaman karena layar yang lebih besar. Anda juga bisa menggunakan keyboard eksternal untuk pengalaman development yang lebih baik.

**Q: Bagaimana cara backup project di Termux?**
A: Gunakan Git untuk version control dan push ke GitHub/GitLab. Anda juga bisa backup ke cloud storage atau copy ke external storage.

### Development

**Q: Bagaimana cara menambahkan animasi yang lebih kompleks?**
A: Anda bisa menggunakan library seperti GSAP, Framer Motion, atau AOS (Animate On Scroll). Install via npm dan import di JavaScript file.

**Q: Bisakah menggunakan TypeScript?**
A: Ya, Anda bisa setup TypeScript dengan menambahkan TypeScript compiler dan mengubah file .js menjadi .ts. Namun, untuk simplicity, project ini menggunakan vanilla JavaScript.

**Q: Bagaimana cara menambahkan blog section?**
A: Anda bisa menambahkan static blog dengan Markdown files atau integrate dengan headless CMS seperti Contentful atau Strapi.

### Deployment

**Q: Apakah bisa deploy ke platform lain selain Vercel?**
A: Ya, Anda bisa deploy ke Netlify, GitHub Pages, Firebase Hosting, atau hosting provider lainnya. Mungkin perlu sedikit adjustment pada konfigurasi build.

**Q: Bagaimana cara setup custom domain?**
A: Beli domain dari registrar, kemudian setup DNS records sesuai instruksi hosting provider. Untuk Vercel, tambahkan CNAME record yang mengarah ke project URL.

**Q: Apakah ada biaya untuk hosting?**
A: Vercel, Netlify, dan GitHub Pages menyediakan tier gratis yang cukup untuk personal portfolio. Biaya mungkin timbul jika traffic sangat tinggi atau butuh fitur premium.

## 🤝 Kontribusi

Kami menyambut kontribusi dari komunitas! Berikut cara untuk berkontribusi:

### Reporting Issues
1. Check existing issues terlebih dahulu
2. Buat issue baru dengan template yang disediakan
3. Include steps to reproduce, expected behavior, dan actual behavior
4. Tambahkan screenshots jika memungkinkan

### Submitting Pull Requests
1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request dengan description yang detail

### Development Guidelines
- Follow existing code style dan conventions
- Test changes di multiple browsers dan devices
- Update documentation jika diperlukan
- Ensure responsive design works properly

### Code of Conduct
- Be respectful dan inclusive
- Provide constructive feedback
- Help others learn dan grow
- Follow community guidelines

## 📄 Lisensi

Project ini dilisensikan under MIT License - lihat file [LICENSE](LICENSE) untuk details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---

## 📞 Support dan Kontak

Jika Anda memiliki pertanyaan atau butuh bantuan:

- **Email**: hello@portfolio.com
- **GitHub Issues**: [Create an issue](https://github.com/username/my-portfolio/issues)
- **Documentation**: [Wiki](https://github.com/username/my-portfolio/wiki)

---

**Dibuat dengan ❤️ menggunakan Tailwind CSS dan Termux**

*Happy coding! 🚀*

