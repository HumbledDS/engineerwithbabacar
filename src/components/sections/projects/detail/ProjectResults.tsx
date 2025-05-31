import { TrendingUp, Clock, Users } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export function ProjectResults({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Résultats & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <TrendingUp className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Impact</span>
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-200">{project.impact}</span>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Clock className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Durée</span>
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-200">{project.duration}</span>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 flex flex-col items-center">
            <Users className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Équipe</span>
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-200">{project.team}</span>
          </div>
        </div>
      </div>
    </section>
  );
} 