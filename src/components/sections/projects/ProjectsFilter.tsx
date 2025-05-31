import { useState } from 'react';
import { Database, Cloud, Cpu, LineChart } from 'lucide-react';

const categories = [
  {
    id: 'all',
    name: 'Tous les Projets',
    icon: Database,
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    icon: Database,
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
  },
  {
    id: 'mlops',
    name: 'MLOps',
    icon: Cpu,
  },
  {
    id: 'analytics',
    name: 'Analytics & BI',
    icon: LineChart,
  },
];

const technologies = [
  'Apache Spark',
  'Apache Airflow',
  'dbt',
  'Kafka',
  'AWS',
  'Azure',
  'Kubernetes',
  'MLflow',
  'TensorFlow',
  'PyTorch',
];

export function ProjectsFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Catégories
            </h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedTechnologies.includes(tech)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'all' || selectedTechnologies.length > 0) && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Filtres actifs :
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {tech}
                    <button
                      onClick={() => toggleTechnology(tech)}
                      className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTechnologies([]);
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 