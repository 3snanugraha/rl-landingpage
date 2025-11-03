import Image from "next/image";

// WhatsApp message template
const getWhatsAppURL = () => {
  const message = `Hi Rumah Laptop Bandung, saya tertarik untuk menjual laptop saya, berikut detailnya :
Merk : .....
Spesifikasi : .....`;
  return `https://wa.me/6281320692038?text=${encodeURIComponent(message)}`;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--secondary)] border-b border-[var(--border)] backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Rumah Laptop Bandung"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-[var(--primary)]">
                RUMAH LAPTOP BANDUNG
              </h1>
              <p className="text-sm text-[var(--muted)]">Solusi Terpercaya Jual Laptop</p>
            </div>
          </div>
          <a
            href={getWhatsAppURL()}
            className="btn-primary px-6 py-2 rounded-lg font-semibold text-sm flex items-center space-x-2 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📱</span>
            <span>Hubungi WA</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
              LAGI BUTUH UANG CEPAT?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--accent)]">
              LAPTOP NGANGGUR DI RUMAH?
            </h3>
            <p className="text-2xl md:text-3xl font-bold mb-8">
              <span className="text-[var(--primary)]">JUAL SEKARANG</span> DI RUMAH LAPTOP BANDUNG!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-bold text-[var(--primary)] mb-2">HARGA TERBAIK</h4>
              <p className="text-sm text-[var(--muted)]">Dijamin bayar paling tinggi</p>
            </div>
            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-[var(--primary)] mb-2">PROSES CEPAT</h4>
              <p className="text-sm text-[var(--muted)]">Selesai dalam 15 menit</p>
            </div>
            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="text-3xl mb-2">💵</div>
              <h4 className="font-bold text-[var(--primary)] mb-2">BAYAR CASH</h4>
              <p className="text-sm text-[var(--muted)]">Langsung tunai di tempat</p>
            </div>
            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold text-[var(--primary)] mb-2">TANPA RIBET</h4>
              <p className="text-sm text-[var(--muted)]">Proses mudah & aman</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href={getWhatsAppURL()}
              className="inline-block btn-primary px-12 py-4 rounded-lg text-xl font-bold hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              JUAL SEKARANG - WA: +62 813-2069-2038
            </a>
            <p className="text-[var(--accent)] font-semibold">📞 Gratis Konsultasi & Estimasi Harga</p>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 bg-[var(--secondary)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            💰 KENAPA HARUS JUAL DI KAMI?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">
                🎯 SITUASI YANG SERING DIALAMI:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)] mt-1">😔</span>
                  <span>Laptop lama menganggur di lemari?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)] mt-1">💸</span>
                  <span>Butuh dana mendadak untuk keperluan mendesak?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)] mt-1">🐌</span>
                  <span>Laptop mulai lemot dan jarang dipakai?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)] mt-1">📱</span>
                  <span>Mau upgrade ke laptop baru?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)] mt-1">🔧</span>
                  <span>Laptop rusak tapi masih bisa diperbaiki?</span>
                </li>
              </ul>
            </div>

            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">
                🏆 SOLUSI TERBAIK DARI KAMI:
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--primary)] mt-1">✨</span>
                  <span><strong>Harga Paling Tinggi</strong> - Kami berani bayar lebih mahal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--primary)] mt-1">⚡</span>
                  <span><strong>Proses Super Cepat</strong> - Dalam 15 menit uang sudah di tangan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--primary)] mt-1">🔒</span>
                  <span><strong>Aman & Terpercaya</strong> - Sudah melayani ribuan pelanggan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--primary)] mt-1">📍</span>
                  <span><strong>Lokasi Strategis</strong> - Mudah dijangkau di pusat kota Bandung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--primary)] mt-1">💵</span>
                  <span><strong>Bayar Tunai Langsung</strong> - Tidak pakai drama</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Requirements Section */}
      <section className="py-20 px-4 bg-[var(--danger)]/10 border-y-2 border-[var(--danger)]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--danger)] mb-4">
              ⚠️ SYARAT WAJIB - BARANG HALAL & KEPEMILIKAN JELAS
            </h2>
            <p className="text-xl text-[var(--accent)] font-semibold">
              🛡️ PERHATIAN PENTING: Kami hanya menerima laptop dengan dokumen lengkap!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[var(--card-bg)] p-8 rounded-lg border-2 border-[var(--success)]">
              <h3 className="text-2xl font-bold text-[var(--success)] mb-6">
                📋 WAJIB MEMILIKI DOKUMEN LENGKAP:
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--success)]">✅</span>
                  <span><strong>KTP/Identitas Resmi</strong> - Wajib membawa identitas asli</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--success)]">✅</span>
                  <span><strong>Nota Pembelian</strong> - Bukti pembelian laptop (jika masih ada)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--success)]">✅</span>
                  <span><strong>Surat Keterangan</strong> - Untuk laptop bekas hadiah/hibah</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--success)]">✅</span>
                  <span><strong>Dokumen Kepemilikan</strong> - Bukti laptop adalah milik sah Anda</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--card-bg)] p-8 rounded-lg border-2 border-[var(--danger)]">
              <h3 className="text-2xl font-bold text-[var(--danger)] mb-6">
                🚫 KAMI TOLAK TEGAS:
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)]">❌</span>
                  <span>Laptop hasil curian/tidak jelas asal usulnya</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)]">❌</span>
                  <span>Laptop tanpa dokumen kepemilikan yang jelas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)]">❌</span>
                  <span>Laptop dengan tanda-tanda mencurigakan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[var(--danger)]">❌</span>
                  <span>Transaksi yang tidak transparan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[var(--success)]/20 p-6 rounded-lg border border-[var(--success)]">
            <h4 className="text-xl font-bold text-[var(--success)] mb-4">✅ JAMINAN HALAL 100%:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>• Semua laptop yang kami beli WAJIB halal dan legal</p>
              <p>• Kami bekerja sama dengan pihak berwajib</p>
              <p>• Transaksi transparan dan dapat dipertanggungjawabkan</p>
              <p>• Melindungi pembeli dan penjual dari masalah hukum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            💻 LAPTOP YANG KAMI TERIMA
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">
                LAPTOP SEMUA KONDISI:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--success)]">🎮</span>
                    <span>Gaming Laptop</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--success)]">💼</span>
                    <span>Business Laptop</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--success)]">📱</span>
                    <span>Ultrabook</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--warning)]">🔧</span>
                    <span>Laptop Rusak</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--warning)]">💀</span>
                    <span>Mati Total</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--warning)]">📺</span>
                    <span>Layar Pecah</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--warning)]">⌨️</span>
                    <span>Keyboard Rusak</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-[var(--muted)]">🕰️</span>
                    <span>Laptop Jadul</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">
                SEMUA MERK DITERIMA:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>ASUS</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>ACER</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>LENOVO</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>HP</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>DELL</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>MSI</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--accent)]">💻</span>
                  <span><strong>MacBook</strong></span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>TOSHIBA</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>SONY</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[var(--primary)]">💻</span>
                  <span>SAMSUNG</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[var(--secondary)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            🚀 CARA KERJA SIMPLE - 3 LANGKAH MUDAH
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">
                1. HUBUNGI KAMI
              </h3>
              <div className="text-left space-y-2 text-sm">
                <p>📞 WA/Telp: <strong className="text-[var(--primary)]">+62 813-2069-2038</strong></p>
                <p>📸 Kirim foto laptop Anda</p>
                <p>📄 Kirim foto dokumen kepemilikan</p>
                <p>💰 Dapatkan estimasi harga</p>
              </div>
              <a
                href={getWhatsAppURL()}
                className="mt-6 inline-block btn-primary px-6 py-2 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat WhatsApp
              </a>
            </div>

            <div className="text-center card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <div className="text-6xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">
                2. DATANG KE TOKO
              </h3>
              <div className="text-left space-y-2 text-sm">
                <p>📍 <strong>Alamat:</strong></p>
                <p className="text-[var(--primary)]">Jl. Babakan Kajaksan No.7</p>
                <p className="text-[var(--primary)]">Ciseureuh, Kec. Regol, Bandung</p>
                <p>📋 Bawa laptop + KTP + dokumen</p>
                <p>🚗 Atau kami bisa jemput (area tertentu)</p>
              </div>
              <a
                href="https://maps.app.goo.gl/DLN9eU3N9DcM6sxX6"
                className="mt-6 inline-block btn-secondary px-6 py-2 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Maps
              </a>
            </div>

            <div className="text-center card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <div className="text-6xl mb-4">💸</div>
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-4">
                3. TERIMA UANG
              </h3>
              <div className="text-left space-y-2 text-sm">
                <p>🔍 Verifikasi dokumen</p>
                <p>🔧 Cek kondisi barang</p>
                <p>💰 Tawar menawar harga</p>
                <p>🤝 Deal & sepakat</p>
                <p className="text-[var(--success)] font-bold">💵 Bayar tunai langsung!</p>
              </div>
              <div className="mt-6 bg-[var(--success)]/20 px-4 py-2 rounded text-[var(--success)] font-bold">
                ⚡ 15 Menit Selesai!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            💯 TESTIMONI PELANGGAN
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[var(--accent)]">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                &quot;Laptop gaming saya yang udah 3 tahun nganggur, ternyata masih laku 8 juta! 
                Prosesnya cepat banget, 15 menit langsung dapat uang. Dokumentasi lengkap jadi aman. 
                Makasih Rumah Laptop!&quot;
              </p>
              <div className="text-[var(--primary)] font-semibold">
                - Rian, Mahasiswa ITB
              </div>
            </div>

            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[var(--accent)]">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                &quot;Proses verifikasi dokumen ketat tapi justru bikin tenang. Laptop bekas kantor 
                saya dijual dengan harga bagus dan proses legal. Recommended!&quot;
              </p>
              <div className="text-[var(--primary)] font-semibold">
                - Sari, Karyawan Swasta
              </div>
            </div>

            <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[var(--accent)]">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <p className="text-sm mb-4 italic">
                &quot;Butuh dana mendadak buat bayar kuliah, laptop lama saya dijual disini dapet 5,2 juta. 
                Proses legal dan transparan. Alhamdulillah tertolong!&quot;
              </p>
              <div className="text-[var(--primary)] font-semibold">
                - Dedi, Mahasiswa Unpad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Promo Section */}
      <section className="py-20 px-4 bg-[var(--secondary)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            🎯 KEUNGGULAN RUMAH LAPTOP BANDUNG
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--accent)]">
                MENGAPA KAMI BERBEDA?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[var(--success)] text-xl">🥇</span>
                  <div>
                    <strong>Pengalaman 8+ Tahun</strong>
                    <p className="text-sm text-[var(--muted)]">Berpengalaman sejak 2016</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[var(--success)] text-xl">🏆</span>
                  <div>
                    <strong>Harga Tertinggi</strong>
                    <p className="text-sm text-[var(--muted)]">Kami berani bayar lebih</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[var(--success)] text-xl">⭐</span>
                  <div>
                    <strong>Rating 4.9/5</strong>
                    <p className="text-sm text-[var(--muted)]">Dari 2000+ review pelanggan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[var(--success)] text-xl">🔧</span>
                  <div>
                    <strong>Tim Ahli</strong>
                    <p className="text-sm text-[var(--muted)]">Teknisi berpengalaman untuk cek kondisi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">
                🎉 PROMO SPESIAL BULAN INI!
              </h3>
              <div className="space-y-4">
                <div className="bg-[var(--success)]/20 p-4 rounded border border-[var(--success)]">
                  <p className="font-bold text-[var(--success)]">🔥 BONUS 10%</p>
                  <p className="text-sm">Laptop gaming kondisi baik dengan dokumen lengkap</p>
                </div>
                <div className="bg-[var(--accent)]/20 p-4 rounded border border-[var(--accent)]">
                  <p className="font-bold text-[var(--accent)]">🔥 BONUS 15%</p>
                  <p className="text-sm">MacBook series terbaru dengan nota pembelian</p>
                </div>
                <div className="bg-[var(--primary)]/20 p-4 rounded border border-[var(--primary)]">
                  <p className="font-bold text-[var(--primary)]">🔥 BONUS 5%</p>
                  <p className="text-sm">Laptop dengan dokumen kepemilikan super lengkap</p>
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-4">*Syarat dan ketentuan berlaku</p>
            </div>
          </div>

          <div className="mt-12 bg-[var(--card-bg)] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 text-center">
              🎁 BONUS UNTUK ANDA:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Gratis Hapus Data</strong> - Data pribadi dijamin aman</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Gratis Pembersihan</strong> - Laptop dibersihkan dulu</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Gratis Konsultasi</strong> - Tips rawat laptop biar awet</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Cashback Loyalitas</strong> - Pelanggan setia dapat bonus</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Bantuan Dokumen</strong> - Bantu urus surat keterangan</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[var(--success)]">🎁</span>
                <span><strong>Garansi Kepuasan</strong> - Tidak puas? Barang bisa kembali</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            📍 LOKASI & KONTAK
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[var(--accent)] mb-6">
                🏪 RUMAH LAPTOP BANDUNG
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">📍 Alamat:</h4>
                  <p>Jl. Babakan Kajaksan No.7, Ciseureuh</p>
                  <p>Kec. Regol, Kota Bandung</p>
                  <p>Jawa Barat 40255</p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">📞 Kontak:</h4>
                  <p>WA/Telp: <strong className="text-[var(--accent)]">+62 813-2069-2038</strong></p>
                  <p>Email: Redimaulana0@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">🕒 Jam Buka:</h4>
                  <p>Senin - Sabtu: 09.00 - 21.00 WIB</p>
                  <p>Minggu: 10.00 - 18.00 WIB</p>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--primary)] mb-2">🚗 Akses Mudah:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Lokasi strategis di Kecamatan Regol</li>
                    <li>• Dekat dengan pusat kota Bandung</li>
                    <li>• Akses mudah dari berbagai arah</li>
                    <li>• Parkir tersedia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-[var(--primary)] mb-4">🗺️ Lihat Lokasi Kami</h4>
                <a
                  href="https://maps.app.goo.gl/DLN9eU3N9DcM6sxX6"
                  className="inline-block btn-primary px-8 py-3 rounded-lg font-semibold hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buka Google Maps
                </a>
              </div>

              <div className="card-glow bg-[var(--card-bg)] p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold text-[var(--primary)] mb-4">💬 Chat Langsung</h4>
                <a
                  href={getWhatsAppURL()}
                  className="inline-block btn-primary px-8 py-3 rounded-lg font-semibold hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Sekarang
                </a>
                <p className="text-sm text-[var(--muted)] mt-2">
                  Respon cepat dalam 5 menit!
                </p>
              </div>

              <div className="bg-[var(--success)]/20 p-6 rounded-lg border border-[var(--success)]">
                <h4 className="font-bold text-[var(--success)] mb-2">🔐 JAMINAN KEAMANAN:</h4>
                <ul className="text-sm space-y-1">
                  <li>✅ Toko resmi dengan izin lengkap</li>
                  <li>✅ Transaksi transparan & legal</li>
                  <li>✅ Data pribadi dijamin aman</li>
                  <li>✅ Garansi kepuasan 100%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[var(--secondary)]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary)]">
            ❓ PERTANYAAN SERING DITANYAKAN (FAQ)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Laptop rusak masih dibeli tidak?
                </h4>
                <p className="text-sm">
                  A: Ya! Laptop mati total, layar pecah, keyboard rusak tetap kami beli dengan harga 
                  sesuai kondisi, asalkan dokumen kepemilikan lengkap.
                </p>
              </div>

              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Kalau tidak ada nota pembelian bagaimana?
                </h4>
                <p className="text-sm">
                  A: Bisa dengan surat keterangan atau dokumen lain yang menunjukkan kepemilikan sah. 
                  Kami bantu konsultasi dokumen yang diperlukan.
                </p>
              </div>

              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Harus datang ke toko?
                </h4>
                <p className="text-sm">
                  A: Bisa datang langsung atau kirim foto dulu via WA untuk estimasi harga. 
                  Untuk transaksi final tetap harus datang untuk verifikasi dokumen.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Pembayaran bagaimana?
                </h4>
                <p className="text-sm">
                  A: Cash tunai langsung setelah deal harga dan verifikasi dokumen selesai.
                </p>
              </div>

              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Ada jasa antar jemput?
                </h4>
                <p className="text-sm">
                  A: Ada, untuk area tertentu di Bandung dengan syarat dan ketentuan berlaku. 
                  Verifikasi dokumen tetap dilakukan di tempat.
                </p>
              </div>

              <div className="card-glow bg-[var(--card-bg)] p-6 rounded-lg">
                <h4 className="font-bold text-[var(--accent)] mb-2">
                  Q: Laptop bekas kantor/sekolah bisa dijual?
                </h4>
                <p className="text-sm">
                  A: Bisa, dengan syarat ada surat keterangan resmi dari kantor/sekolah 
                  yang menyatakan laptop sudah diserahkan kepada Anda secara sah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 gradient-primary">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-[var(--background)]">
              ⚡ JANGAN BIARKAN LAPTOP ANDA MENGANGGUR!
            </h2>
            <p className="text-2xl mb-4 text-[var(--background)] font-bold">
              💸 Ubahlah menjadi uang tunai SEKARANG JUGA!
            </p>
            <p className="text-lg mb-8 text-[var(--background)]">
              Semakin lama disimpan, semakin turun harganya!<br/>
              Laptop yang tidak terpakai = KERUGIAN
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={getWhatsAppURL()}
                  className="bg-[var(--background)] text-[var(--primary)] px-12 py-4 rounded-lg text-xl font-bold hover:scale-110 transition-transform border-2 border-[var(--background)] hover:bg-transparent hover:text-[var(--background)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 WhatsApp: +62 813-2069-2038
                </a>
                <a
                  href="tel:+6281320692038"
                  className="bg-transparent text-[var(--background)] px-12 py-4 rounded-lg text-xl font-bold border-2 border-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-all"
                >
                  ☎️ Telepon Langsung
                </a>
              </div>

              <div className="bg-[var(--background)]/20 backdrop-blur-sm p-6 rounded-lg border border-[var(--background)]">
                <h3 className="text-xl font-bold mb-4 text-[var(--background)]">
                  🕒 BUKA SETIAP HARI:
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-[var(--background)]">
                  <p><strong>Senin - Sabtu:</strong> 09.00 - 21.00 WIB</p>
                  <p><strong>Minggu:</strong> 10.00 - 18.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Image
              src="/logo.png"
              alt="Rumah Laptop Bandung"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)]">
                RUMAH LAPTOP BANDUNG
              </h3>
              <p className="text-sm text-[var(--muted)]">Solusi Terpercaya Sejak 2016</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-[var(--accent)] mb-2">Kontak</h4>
              <p className="text-sm">WA: +62 813-2069-2038</p>
              <p className="text-sm">Email: Redimaulana0@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--accent)] mb-2">Lokasi</h4>
              <p className="text-sm">Jl. Babakan Kajaksan No.7</p>
              <p className="text-sm">Ciseureuh, Regol, Bandung</p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--accent)] mb-2">Jam Buka</h4>
              <p className="text-sm">Sen-Sab: 09.00-21.00</p>
              <p className="text-sm">Minggu: 10.00-18.00</p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6">
            <p className="text-sm text-[var(--muted)] mb-2">
              &quot;Dari Bandung, Untuk Bandung - Kami Memahami Kebutuhan Anda&quot;
            </p>
            <p className="text-lg font-bold text-[var(--primary)]">
              🛡️ BERKOMITMEN PADA TRANSAKSI HALAL DAN LEGAL 100% 🛡️
            </p>
            <p className="text-xs text-[var(--muted)] mt-4">
              © 2024 Rumah Laptop Bandung. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
