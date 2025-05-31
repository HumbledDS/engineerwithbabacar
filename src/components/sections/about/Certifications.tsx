import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://aws.amazon.com/certification/',
    icon: '/certifications/aws.png',
  },
  {
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2023',
    link: 'https://cloud.google.com/certification/data-engineer',
    icon: '/certifications/gcp.png',
  },
  {
    title: 'Databricks Certified Data Engineer',
    issuer: 'Databricks',
    date: '2023',
    link: 'https://www.databricks.com/learn/certification/data-engineer',
    icon: '/certifications/databricks.png',
  },
  {
    title: 'Confluent Certified Developer for Apache Kafka',
    issuer: 'Confluent',
    date: '2022',
    link: 'https://www.confluent.io/certification/',
    icon: '/certifications/confluent.png',
  },
];

export function Certifications() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Des certifications reconnues qui attestent de mon expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((certification) => (
            <a
              key={certification.title}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 relative">
                  <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {certification.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {certification.issuer}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Obtenue en {certification.date}
                </p>

                <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
                  Vérifier la certification
                  <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 