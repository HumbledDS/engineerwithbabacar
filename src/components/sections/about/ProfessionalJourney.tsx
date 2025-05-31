import { Briefcase, Building2, GraduationCap } from 'lucide-react';

const experiences = [
  {
    period: '2022 - Présent',
    title: 'Lead Data Engineer',
    company: 'Tech Solutions',
    description: 'Direction d\'une équipe de 5 data engineers. Mise en place d\'une architecture data mesh pour une entreprise de 500 personnes.',
    icon: Briefcase,
  },
  {
    period: '2019 - 2022',
    title: 'Senior Data Engineer',
    company: 'Data Innovations',
    description: 'Conception et implémentation de pipelines de données en temps réel pour des applications de trading.',
    icon: Building2,
  },
  {
    period: '2017 - 2019',
    title: 'Data Engineer',
    company: 'Cloud Systems',
    description: 'Migration d\'infrastructures data legacy vers le cloud. Optimisation des coûts et des performances.',
    icon: Building2,
  },
  {
    period: '2015 - 2017',
    title: 'Master en Data Science',
    company: 'Université de Paris',
    description: 'Spécialisation en machine learning et big data. Projet de recherche sur l\'optimisation des pipelines de données.',
    icon: GraduationCap,
  },
];

export function ProfessionalJourney() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Parcours Professionnel
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Une décennie d'expérience dans la transformation des données en valeur business
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experiences */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.period}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <experience.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="h-4 w-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                </div>

                {/* Period */}
                <div className="w-1/2 px-8">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {experience.period}
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