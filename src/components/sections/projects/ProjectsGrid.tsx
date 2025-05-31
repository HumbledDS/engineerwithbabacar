import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Users } from 'lucide-react';

const projects = [
  {
    id: 'realtime-pipeline',
    title: 'Pipeline de Données en Temps Réel',
    description: 'Mise en place d\'un pipeline de données en temps réel pour une application de trading, réduisant la latence de 80% et améliorant la fiabilité.',
    image: '/projects/realtime-pipeline.jpg',
    category: 'data-engineering',
    technologies: ['Apache Kafka', 'Apache Spark', 'AWS'],
    duration: '3 mois',
    team: '5 personnes',
    impact: '80% réduction de latence',
    link: '/projets/pipeline-temps-reel',
  },
  {
    id: 'mlops-platform',
    title: 'Plateforme MLOps Complète',
    description: 'Développement d\'une plateforme MLOps end-to-end permettant le déploiement automatisé et le monitoring de modèles ML en production.',
    image: '/projects/mlops-platform.jpg',
    category: 'mlops',
    technologies: ['Kubeflow', 'MLflow', 'Kubernetes'],
    duration: '6 mois',
    team: '8 personnes',
    impact: '90% réduction du temps de déploiement',
    link: '/projets/platforme-mlops',
  },
  {
    id: 'data-mesh',
    title: 'Migration vers Data Mesh',
    description: 'Transformation d\'une architecture data monolithique en une architecture data mesh pour une meilleure scalabilité et gouvernance.',
    image: '/projects/data-mesh.jpg',
    category: 'data-engineering',
    technologies: ['dbt', 'Airflow', 'Azure'],
    duration: '8 mois',
    team: '12 personnes',
    impact: '60% réduction des coûts',
    link: '/projets/migration-data-mesh',
  },
  {
    id: 'analytics-platform',
    title: 'Plateforme Analytics Self-Service',
    description: 'Création d\'une plateforme d\'analytics self-service permettant aux équipes business d\'accéder et d\'analyser les données en autonomie.',
    image: '/projects/analytics-platform.jpg',
    category: 'analytics',
    technologies: ['Tableau', 'dbt', 'Snowflake'],
    duration: '4 mois',
    team: '6 personnes',
    impact: '70% d\'autonomie accrue',
    link: '/projets/plateforme-analytics',
  },
];

export function ProjectsGrid() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Image */}
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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

                {/* Project Details */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team}
                  </div>
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
      </div>
    </section>
  );
} 