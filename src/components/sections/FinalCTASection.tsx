import Link from 'next/link';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Prêt à Transformer vos Données en Avantage Concurrentiel ?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Que vous ayez besoin d'une expertise en data engineering, MLOps ou architecture cloud,
            je suis là pour vous aider à atteindre vos objectifs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Discutons de votre projet
            </Link>

            {/* Calendar Button */}
            <Link
              href="/calendly"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Réserver un appel
            </Link>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            Réponse sous 24h • Premier appel gratuit • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
} 