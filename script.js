const produkCards = document.querySelectorAll('.produk-card');
const detailSection = document.getElementById('produk-detail');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');

const artikelSection = document.getElementById('artikel');
const tentangSection = document.getElementById('tentang');
const kontakSection = document.getElementById('kontak');

produkCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-desc');

    // Tampilkan detail produk
    detailTitle.textContent = title;
    detailDesc.textContent = desc;
    detailSection.style.display = 'block';

    // Sembunyikan semua kartu kecuali yang diklik
    produkCards.forEach(c => {
      if (c !== card) {
        c.style.display = 'none';
      } else {
        c.classList.add('active');
      }
    });

    // Sembunyikan section lain
    artikelSection.style.display = 'none';
    tentangSection.style.display = 'none';
    kontakSection.style.display = 'none';
  });
});

function showAllProducts() {
  const detailSection = document.getElementById('produk-detail');
  
  // Sembunyikan detail produk
  if (detailSection) {
    detailSection.style.display = 'none';
  }

  // Tampilkan semua kartu produk
  produkCards.forEach(card => {
    card.style.display = 'block';
    card.classList.remove('active');
  });
}

  // Tampilkan kembali semua section
  artikelSection.style.display = 'block';
  tentangSection.style.display = 'block';
  kontakSection.style.display = 'block';

function showSection(id) {
  const sections = ['beranda', 'produk', 'artikel', 'tentang', 'kontak'];

  // Sembunyikan semua section
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) el.style.display = 'none';
  });

  // Tampilkan hanya section yang diklik
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';

  // Tambahan: Sembunyikan detail produk & tampilkan semua kartu saat pindah menu
  if (id !== 'produk') {
    document.getElementById('produk-detail').style.display = 'none';
    produkCards.forEach(card => {
      card.style.display = 'block';
      card.classList.remove('active');
    });
  } else {
    // Saat kembali ke produk, pastikan hanya daftar produk yang terlihat
    showAllProducts();
  }
}
// Saat halaman pertama dimuat, tampilkan hanya beranda
document.addEventListener("DOMContentLoaded", () => {
  showSection('beranda');
});
