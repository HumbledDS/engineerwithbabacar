import Image from 'next/image';
import { Heart, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion pour la Data',
    description: 'Je suis passionné par la transformation des données en insights actionnables qui créent de la valeur business.',
  },
  {
    icon: Target,
    title: 'Excellence Technique',
    description: 'Je m\'engage à maintenir les plus hauts standards de qualité dans chaque projet, en utilisant les meilleures pratiques du domaine.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Continue',
    description: 'Je reste constamment à la pointe des dernières technologies et méthodologies pour offrir des solutions innovantes.',
  },
];

export function PersonalStory() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/working.jpg"
                alt="Babacar Gueye au travail"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Toujours en apprentissage
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
              Mon Histoire & Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Mon parcours dans le monde de la data a commencé il y a plus de 10 ans, avec une
              passion pour la résolution de problèmes complexes et la création de solutions
              innovantes. Aujourd'hui, ma mission est d'aider les entreprises à transformer
              leurs données en avantage concurrentiel.
            </p>

            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Je crois fermement que la réussite d'un projet data repose sur la combinaison
                d'une expertise technique solide et d'une compréhension approfondie des enjeux
                business. C'est cette approche holistique que j'apporte à chaque collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 