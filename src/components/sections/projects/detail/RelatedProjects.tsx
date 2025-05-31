import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getRelatedProjects } from '@/data/projects';

export function RelatedProjects({ slug }: { slug: string }) {
  const relatedProjects = getRelatedProjects(slug);
  if (!relatedProjects.length) return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Projets Similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((project) => (
            <div key={project.slug} className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 items-center">
              <Image
                src={project.image}
                alt={project.title}
                width={120}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{project.category.name}</div>
                <div className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</div>
                <div className="text-gray-700 dark:text-gray-300 text-sm mb-2">{project.description}</div>
                <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium">
                  Voir le projet <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 