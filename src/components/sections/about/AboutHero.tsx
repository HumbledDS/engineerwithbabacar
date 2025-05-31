import Image from 'next/image';
import { ArrowRight, Award, Users, Code } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '10+ Années d\'Expérience',
    description: 'Expertise approfondie en data engineering et architecture cloud',
  },
  {
    icon: Users,
    title: '50+ Projets Réussis',
    description: 'Solutions data mises en place pour des entreprises de toutes tailles',
  },
  {
    icon: Code,
    title: '15+ Technologies Maîtrisées',
    description: 'Stack technique complète de la data moderne',
  },
];

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image and Introduction */}
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Babacar Gueye - Expert Data Engineering & MLOps"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Disponible pour de nouveaux projets
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              Expert Data Engineering & MLOps
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Je transforme les défis data en opportunités business. Spécialisé dans la conception
              et l'implémentation de solutions data modernes, je vous accompagne dans votre
              transformation data-driven.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                >
                  <highlight.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Discutons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 