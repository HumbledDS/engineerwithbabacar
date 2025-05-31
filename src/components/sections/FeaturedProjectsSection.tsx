import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Pipeline de Données en Temps Réel',
    description: 'Mise en place d\'un pipeline de données en temps réel pour une application de trading, réduisant la latence de 80% et améliorant la fiabilité.',
    image: '/projects/realtime-pipeline.jpg',
    category: 'Data Engineering',
    technologies: ['Kafka', 'Spark', 'Delta Lake', 'AWS'],
    impact: '80% réduction de latence',
    link: '/projets/pipeline-temps-reel',
  },
  {
    title: 'Plateforme MLOps Complète',
    description: 'Développement d\'une plateforme MLOps end-to-end permettant le déploiement automatisé et le monitoring de modèles ML en production.',
    image: '/projects/mlops-platform.jpg',
    category: 'MLOps',
    technologies: ['Kubeflow', 'MLflow', 'Prometheus', 'Grafana'],
    impact: '90% réduction du temps de déploiement',
    link: '/projets/platforme-mlops',
  },
  {
    title: 'Migration Data Lakehouse',
    description: 'Migration d\'un data warehouse legacy vers une architecture lakehouse moderne, optimisant les coûts et améliorant les performances.',
    image: '/projects/lakehouse.jpg',
    category: 'Cloud Architecture',
    technologies: ['Databricks', 'Delta Lake', 'Terraform', 'Azure'],
    impact: '60% réduction des coûts',
    link: '/projets/migration-lakehouse',
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Projets qui Font la Différence
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Découvrez comment j'ai aidé mes clients à transformer leurs données en avantage concurrentiel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  Image du projet
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">
                    Impact : {project.impact}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projets"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Voir tous les projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 