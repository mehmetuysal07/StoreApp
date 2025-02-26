export const categories = [
  { id: 1, name: 'Elektronik', icon: '💻' },
  { id: 2, name: 'Aksesuar', icon: '👜' },
  { id: 3, name: 'Giyim', icon: '👕' },
  { id: 4, name: 'Spor', icon: '🏃' },
  { id: 5, name: 'Ev & Yaşam', icon: '🏠' }
];

export const products = [
  {
    id: 1,
    title: "Vintage Deri Çanta",
    description: "El yapımı, dayanıklı vintage deri çanta. Günlük kullanım için ideal.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "2999",
    rating: 4.5,
    discount: "20%",
    stock: 15,
    categories: ['Aksesuar', 'Giyim'],
    tags: ['çanta', 'deri', 'el yapımı']
  },
  {
    id: 2,
    title: "Akıllı Saat Pro",
    description: "Fitness takibi, kalp ritmi ölçümü ve bildirim özellikleriyle tam donanımlı akıllı saat.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "3499",
    rating: 5,
    discount: "15%",
    stock: 8,
    categories: ['Elektronik', 'Aksesuar', 'Spor'],
    tags: ['saat', 'akıllı', 'fitness']
  },
  {
    id: 3,
    title: "Kablosuz Kulaklık",
    description: "Aktif gürültü önleme özellikli, uzun pil ömürlü premium kablosuz kulaklık.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "4299",
    rating: 4.8,
    discount: "10%",
    stock: 12,
    categories: ['Elektronik'],
    tags: ['kulaklık', 'kablosuz', 'müzik']
  },
  {
    id: 4,
    title: "Retro Polaroid Kamera",
    description: "Anılarınızı anında ölümsüzleştiren nostaljik tasarımlı fotoğraf makinesi.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "1899",
    rating: 4.6,
    discount: "25%",
    stock: 20,
    categories: ['Elektronik'],
    tags: ['kamera', 'fotoğraf', 'retro']
  },
  {
    id: 5,
    title: "Minimalist Cüzdan",
    description: "İnce tasarımlı, RFID korumalı gerçek deri cüzdan.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "899",
    rating: 4.7,
    discount: "30%",
    stock: 25,
    categories: ['Aksesuar'],
    tags: ['cüzdan', 'deri', 'minimalist']
  },
  {
    id: 6,
    title: "Mekanik Klavye",
    description: "RGB aydınlatmalı, özel anahtarlı profesyonel oyuncu klavyesi.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "2499",
    rating: 4.9,
    discount: "15%",
    stock: 10,
    categories: ['Elektronik'],
    tags: ['klavye', 'gaming', 'rgb']
  }
]; 