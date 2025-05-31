import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "La mise en place du pipeline de données en temps réel a révolutionné notre capacité à prendre des décisions basées sur les données. La réduction de 80% de la latence a eu un impact direct sur notre performance business.",
    author: "Jean Dupont",
    role: "CTO",
    company: "FinTech Solutions",
    image: "/testimonials/company1.jpg",
  },
  {
    quote: "La plateforme MLOps développée a considérablement amélioré notre processus de déploiement de modèles. Nous avons réduit le temps de mise en production de 90% tout en augmentant la fiabilité.",
    author: "Marie Martin",
    role: "Data Science Lead",
    company: "AI Innovations",
    image: "/testimonials/company2.jpg",
  },
  {
    quote: "La migration vers l'architecture lakehouse a non seulement réduit nos coûts de 60% mais a aussi considérablement amélioré les performances de nos requêtes analytiques.",
    author: "Pierre Durand",
    role: "Directeur Data",
    company: "Retail Analytics",
    image: "/testimonials/company3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Ce que Disent mes Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Découvrez les retours d'expérience de mes clients sur nos collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 