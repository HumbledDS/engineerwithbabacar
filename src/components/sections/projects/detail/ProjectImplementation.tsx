import { Code2, Database, Server, Workflow, Cloud, Cpu, LineChart } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export function ProjectImplementation({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const { architecture, technologies } = project;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Architecture */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Workflow className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{architecture.title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{architecture.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecture.components.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                <comp.icon className="h-8 w-8 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{comp.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Technologies */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex flex-col gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">{tech.name} <span className="text-xs text-gray-500">{tech.version}</span></span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{tech.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 