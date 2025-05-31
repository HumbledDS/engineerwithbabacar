import { AlertTriangle, Lightbulb } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export function ProjectOverview({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const { challenge, solution } = project;

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Challenge */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{challenge.title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{challenge.description}</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            {challenge.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        {/* Solution */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{solution.title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{solution.description}</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            {solution.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 