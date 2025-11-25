import Hero from "./components/Hero";
import Popular from "./components/Popular";
import Recommendation from "./components/Recommendation";
import Area from "./components/Area";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import FloatingActions from "./components/FloatingActions";

const kosanTermurah = [
  {
    name: "Kosan Mawar Indah",
    type: "Kosan",
    categories: ["Campur", "Kosan Murah"],
    price: "Rp 800.000/bulan",
    city: "Jakarta",
    district: "Setiabudi",
    village: "Menteng Atas",
    nearest: "Stasiun Karet",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Kosan Melati Asri",
    type: "Kosan",
    categories: ["Wanita", "Kosan Murah"],
    price: "Rp 900.000/bulan",
    city: "Bandung",
    district: "Coblong",
    village: "Dago",
    nearest: "ITB",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Kosan Anggrek Putih",
    type: "Kosan",
    categories: ["Pria", "Dekat Kampus"],
    price: "Rp 750.000/bulan",
    city: "Surabaya",
    district: "Sukolilo",
    village: "Keputih",
    nearest: "ITS",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Kosan Cempaka Biru",
    type: "Kosan",
    categories: ["Campur", "Kosan Murah"],
    price: "Rp 850.000/bulan",
    city: "Yogyakarta",
    district: "Depok",
    village: "Caturtunggal",
    nearest: "UGM",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Kosan Sakura Sejahtera",
    type: "Kosan",
    categories: ["Wanita", "Bebas"],
    price: "Rp 700.000/bulan",
    city: "Jakarta",
    district: "Depok",
    village: "Pondok Cina",
    nearest: "Universitas Indonesia",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Kosan Wijaya Kusuma",
    type: "Kosan",
    categories: ["Pria", "Kosan Murah"],
    price: "Rp 800.000/bulan",
    city: "Malang",
    district: "Lowokwaru",
    village: "Ketawanggede",
    nearest: "Universitas Brawijaya",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=80&auto=format&fit=crop",
  },
];

const rukoTermurah = [
  {
    name: "Ruko Gading Kirana",
    type: "Ruko",
    categories: ["Disewakan", "Strategis"],
    price: "Rp 3.000.000/bulan",
    city: "Jakarta Utara",
    district: "Kelapa Gading",
    village: "Pegangsaan Dua",
    nearest: "Kelapa Gading",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Ruko Surya Kencana",
    type: "Ruko",
    categories: ["Dijual", "Dekat Pusat Kota"],
    price: "Rp 900.000.000",
    city: "Bogor",
    district: "Bogor Tengah",
    village: "Pabaton",
    nearest: "Pasar Bogor",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Ruko Sudirman Point",
    type: "Ruko",
    categories: ["Disewakan", "Dekat Kampus"],
    price: "Rp 2.700.000/bulan",
    city: "Bandung",
    district: "Coblong",
    village: "Dago",
    nearest: "ITB",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80&auto=format&fit=crop",
  },
];

const gudangMurah = [
  {
    name: "Gudang Industri Sentul",
    type: "Gudang",
    categories: ["Disewakan", "Akses Truk"],
    price: "Rp 5.000.000/bulan",
    city: "Bogor",
    district: "Babakan Madang",
    village: "Citaringgul",
    nearest: "Sentul City",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a936b?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Gudang Soetta",
    type: "Gudang",
    categories: ["Disewakan", "Dekat Bandara"],
    price: "Rp 6.500.000/bulan",
    city: "Tangerang",
    district: "Benda",
    village: "Batusari",
    nearest: "Bandara Soekarno-Hatta",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Gudang Marunda",
    type: "Gudang",
    categories: ["Dijual", "Akses Kontainer"],
    price: "Rp 2.200.000.000",
    city: "Jakarta Utara",
    district: "Cilincing",
    village: "Marunda",
    nearest: "Pelabuhan Marunda",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop",
  },
];

const areaPopuler = [
  {
    type: "Kosan",
    city: "Jakarta Selatan",
    total_property: 27,
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=400&q=80&auto=format&fit=crop",
  },
  {
    type: "Kosan",
    city: "Bandung",
    total_property: 15,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80&auto=format&fit=crop",
  },
  {
    type: "Kosan",
    city: "Surabaya",
    total_property: 16,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80&auto=format&fit=crop",
  },
  {
    type: "Gudang",
    city: "Tangerang",
    total_property: 14,
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400&q=80&auto=format&fit=crop",
  },
];

const aroundArea = [
  {
    area: "Industri",
    name: "KIM Karawang",
    logo: "https://images.unsplash.com/photo-1581092795366-8e3c8e4c5a2e?w=400&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1581092795366-8e3c8e4c5a2e?w=400&q=80&auto=format&fit=crop",
  },
  {
    area: "Perkantoran",
    name: "Sudirman Central Business District",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop",
  },
  {
    area: "Kampus",
    name: "Universitas Gadjah Mada",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  const uniqueTypes = Array.from(new Set(areaPopuler.map((area) => area.type)));

  const areaPopularOptions = uniqueTypes.map((type) => ({
    value: type.toLowerCase().replace(/\s+/g, "-"),
    label: type,
  }));

  const aroundAreaTabOptions = Array.from(
    new Set(aroundArea.map((item) => item.area))
  ).map((area) => ({
    value: area.toLowerCase().replace(/\s+/g, "-"),
    label: area,
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Popular Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Popular
            title="Area Populer"
            description="Temukan hunian di area-area populer dengan fasilitas terbaik dan akses mudah"
            options={areaPopularOptions}
            data={areaPopuler}
          />
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Recommendation
            title="Kosan Termurah"
            description="Pilihan kosan terbaik dengan harga terjangkau dan fasilitas lengkap"
            options={[
              { value: "jakarta", label: "Jakarta" },
              { value: "bandung", label: "Bandung" },
              { value: "surabaya", label: "Surabaya" },
            ]}
            data={kosanTermurah}
          />
        </div>
      </section>

      {/* Ruko Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Recommendation
            title="Ruko Strategis"
            description="Ruko di lokasi strategis untuk usaha dan investasi properti"
            options={[
              { value: "jakarta", label: "Jakarta" },
              { value: "bandung", label: "Bandung" },
              { value: "surabaya", label: "Surabaya" },
            ]}
            data={rukoTermurah}
          />
        </div>
      </section>

      {/* Gudang Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Recommendation
            title="Gudang Terbaik"
            description="Gudang dengan akses mudah dan fasilitas industri lengkap"
            options={[
              { value: "jakarta", label: "Jakarta" },
              { value: "bandung", label: "Bandung" },
              { value: "surabaya", label: "Surabaya" },
            ]}
            data={gudangMurah}
          />
        </div>
      </section>

      {/* Area Around */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Area
            title="Area Strategis"
            description="Hunian di sekitar area strategis seperti industri, perkantoran, dan kampus"
            options={aroundAreaTabOptions}
            data={aroundArea}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <StatsSection />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <FeaturesSection />
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <CTASection />
      </section>

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  );
}
