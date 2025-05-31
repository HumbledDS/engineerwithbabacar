import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { ProfessionalJourney } from '@/components/sections/about/ProfessionalJourney';
import { SkillsAndExpertise } from '@/components/sections/about/SkillsAndExpertise';
import { PersonalStory } from '@/components/sections/about/PersonalStory';
import { Certifications } from '@/components/sections/about/Certifications';

export const metadata: Metadata = {
  title: 'À Propos | Babacar Gueye - Expert Data Engineering & MLOps',
  description: 'Découvrez mon parcours professionnel, mes compétences en data engineering et MLOps, et ma vision pour transformer les données en valeur business.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">À propos / About</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Bienvenue sur la page À propos. Ici, vous découvrirez le parcours, la vision et les valeurs qui animent ce site professionnel dédié à la Data Engineering et au MLOps.<br/>
          Welcome to the About page. Here you will discover the journey, vision, and values behind this professional site dedicated to Data Engineering and MLOps.
        </p>
        {/* Add more content or team bios here */}
      </div>
    </main>
  );
} 