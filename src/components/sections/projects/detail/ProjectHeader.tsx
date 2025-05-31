import Image from 'next/image';
import { Clock, Users, TrendingUp } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export function ProjectHeader({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="h-[60vh] relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
              {project.category.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Durée</h3>
                </div>
                <p className="text-2xl font-bold text-white">{project.duration}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Équipe</h3>
                </div>
                <p className="text-2xl font-bold text-white">{project.team}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Impact</h3>
                </div>
                <p className="text-2xl font-bold text-white">{project.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 