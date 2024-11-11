import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./desir.css";
import Skills from "./components/skills";
import PersonalInfo from "./components/biodata";
import HobbiesGallery from "./components/hobi";
import Rating from "./components/rating";

export default function Gallery() {
  return (
    <section className="text-center">
      <Hero/>
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <HobbiesGallery/>
      <Rating/>
    </section>
  );
}
