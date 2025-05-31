import { Database, Cloud, Code2, Server, LineChart, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      { name: 'Apache Spark', level: 95 },
      { name: 'Apache Airflow', level: 90 },
      { name: 'dbt', level: 85 },
      { name: 'Kafka', level: 90 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 85 },
      { name: 'Terraform', level: 85 },
      { name: 'Kubernetes', level: 80 },
    ],
  },
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Scala', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Data Architecture',
    icon: Server,
    skills: [
      { name: 'Data Mesh', level: 90 },
      { name: 'Data Lakehouse', level: 85 },
      { name: 'Microservices', level: 85 },
      { name: 'Event-Driven', level: 80 },
    ],
  },
  {
    title: 'Analytics & BI',
    icon: LineChart,
    skills: [
      { name: 'Tableau', level: 85 },
      { name: 'Power BI', level: 80 },
      { name: 'Looker', level: 75 },
      { name: 'Metabase', level: 85 },
    ],
  },
  {
    title: 'MLOps',
    icon: Cpu,
    skills: [
      { name: 'MLflow', level: 85 },
      { name: 'Kubeflow', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
    ],
  },
];

export function SkillsAndExpertise() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Compétences & Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Un éventail complet de compétences techniques pour répondre à vos besoins data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 