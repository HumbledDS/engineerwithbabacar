import { Database, LineChart, Users } from 'lucide-react';

const metrics = [
  {
    icon: Database,
    value: '50+',
    label: 'Projets Réalisés',
  },
  {
    icon: LineChart,
    value: '80%',
    label: 'Amélioration Moyenne des Performances',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Clients Satisfaits',
  },
];

export function ProjectsHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
            Projets qui Font la Différence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Découvrez comment j'ai aidé mes clients à transformer leurs données en avantage
            concurrentiel à travers des solutions innovantes en data engineering et MLOps.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <metric.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 