import { Database, Code2, Cloud, Shield } from 'lucide-react';

const expertiseCards = [
  {
    title: 'Data Engineering',
    description: 'Conception et implémentation de pipelines de données robustes, ETL/ELT, Data Lakes et Data Warehouses.',
    icon: Database,
    technologies: ['Apache Spark', 'Airflow', 'dbt', 'Snowflake'],
  },
  {
    title: 'MLOps',
    description: 'Mise en production de modèles ML, CI/CD, monitoring et maintenance des modèles en production.',
    icon: Code2,
    technologies: ['MLflow', 'Kubeflow', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Cloud Architecture',
    description: 'Architectures cloud-native, infrastructure as code, et optimisation des coûts cloud.',
    icon: Cloud,
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform'],
  },
  {
    title: 'Data Governance',
    description: 'Qualité des données, sécurité, conformité et documentation des assets data.',
    icon: Shield,
    technologies: ['Great Expectations', 'Collibra', 'Apache Atlas', 'OpenLineage'],
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Mon Domaine d'Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Une approche holistique pour transformer vos données en valeur business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 