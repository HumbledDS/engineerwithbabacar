import { Metadata } from 'next';
import { ProjectHeader } from '@/components/sections/projects/detail/ProjectHeader';
import { ProjectOverview } from '@/components/sections/projects/detail/ProjectOverview';
import { ProjectImplementation } from '@/components/sections/projects/detail/ProjectImplementation';
import { ProjectResults } from '@/components/sections/projects/detail/ProjectResults';
import { ProjectTestimonial } from '@/components/sections/projects/detail/ProjectTestimonial';
import { RelatedProjects } from '@/components/sections/projects/detail/RelatedProjects';

export const metadata: Metadata = {
  title: 'Détails du Projet | Babacar Gueye - Expert Data Engineering & MLOps',
  description: 'Découvrez les détails techniques et les résultats de nos projets en data engineering et MLOps.',
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main>
      <ProjectHeader slug={params.slug} />
      <ProjectOverview slug={params.slug} />
      <ProjectImplementation slug={params.slug} />
      <ProjectResults slug={params.slug} />
      <ProjectTestimonial slug={params.slug} />
      <RelatedProjects slug={params.slug} />
    </main>
  );
} 