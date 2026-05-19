import AboutHero from "@/components/about/AboutHero";
import StatsGrid from "@/components/about/StatsGrid";
import Timeline from "@/components/about/Timeline";
import SkillMatrix from "@/components/about/SkillMatrix";
import PhilosophyCode from "@/components/about/PhilosophyCode";

export const metadata = {
  title: "About",
  description:
    "Full Stack Developer & Visual Storyteller with 4 years of experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-28">
      <AboutHero />
      <StatsGrid />
      <Timeline />
      <SkillMatrix />
      <PhilosophyCode />
    </div>
  );
}
