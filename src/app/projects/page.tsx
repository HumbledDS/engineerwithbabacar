import { Metadata } from 'next';
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid';
import { ProjectsFilter } from '@/components/sections/projects/ProjectsFilter';

export const metadata: Metadata = {
  title: 'Projets | Babacar Gueye - Expert Data Engineering & MLOps',
  description: 'Découvrez mes projets en data engineering, MLOps et architecture cloud. Des solutions innovantes qui transforment les données en valeur business.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-4">Projets / Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Découvrez une sélection de projets réalisés en Data Engineering, Cloud, MLOps et Analytics.<br/>
          Discover a selection of projects in Data Engineering, Cloud, MLOps, and Analytics.
        </p>
        {/* ProjectsGrid and ProjectsFilter will be rendered here */}
      </div>
    </main>
  );
} 