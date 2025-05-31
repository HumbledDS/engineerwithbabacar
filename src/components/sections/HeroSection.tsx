'use client';

import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Data Engineer & Expert MLOps
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Je transforme vos données en avantage concurrentiel grâce à des architectures modernes et des pratiques DevOps éprouvées.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies maîtrisées</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projets"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Télécharger mon CV
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 p-1">
              <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-900 p-4">
                {/* Placeholder for profile image or illustration */}
                <div className="h-full w-full rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600">Photo professionnelle</span>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Disponible pour missions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 