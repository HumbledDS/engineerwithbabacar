import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

const latestContent = {
  articles: [
    {
      title: 'Data Mesh : Au-delà du buzzword, une implémentation concrète',
      excerpt: 'Comment nous avons mis en place une architecture Data Mesh dans une entreprise de 500 personnes.',
      date: '2024-03-15',
      readTime: '10 min',
      category: 'Architecture',
      link: '/blog/data-mesh-implementation',
    },
    {
      title: '5 étapes pour auditer votre stack data actuelle',
      excerpt: 'Une méthodologie éprouvée pour évaluer et améliorer votre infrastructure data.',
      date: '2024-03-10',
      readTime: '8 min',
      category: 'Guide',
      link: '/blog/data-stack-audit',
    },
  ],
  tutorials: [
    {
      title: 'Pipeline ETL moderne avec Airflow et dbt',
      excerpt: 'Apprenez à construire un pipeline ETL robuste et maintenable avec les meilleures pratiques.',
      duration: '45 min',
      level: 'Intermédiaire',
      link: '/tutoriels/pipeline-etl-airflow-dbt',
    },
    {
      title: 'Premier modèle en production avec MLflow',
      excerpt: 'Guide complet pour déployer votre premier modèle ML en production avec MLflow.',
      duration: '30 min',
      level: 'Débutant',
      link: '/tutoriels/premier-modele-mlflow',
    },
  ],
};

export function LatestContentSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Derniers Contenus
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Articles et tutoriels pour vous aider à maîtriser la data engineering moderne
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Articles Récents
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-8">
              {latestContent.articles.map((article) => (
                <article
                  key={article.title}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    <Link
                      href={article.link}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Lire l'article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Tutoriels Récents
              </h3>
              <Link
                href="/tutoriels"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Voir tous les tutoriels
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-8">
              {latestContent.tutorials.map((tutorial) => (
                <article
                  key={tutorial.title}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      {tutorial.level}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tutorial.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tutorial.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {tutorial.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Tutoriel pratique
                    </div>
                    <Link
                      href={tutorial.link}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Suivre le tutoriel
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 