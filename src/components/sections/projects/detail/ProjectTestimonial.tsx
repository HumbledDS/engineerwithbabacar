import Image from 'next/image';
import { Quote } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export function ProjectTestimonial({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const { testimonial } = project;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <Quote className="h-10 w-10 text-blue-500 mb-4" />
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">{testimonial.quote}</p>
          <div className="flex items-center gap-4">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              width={56}
              height={56}
              className="rounded-full object-cover border-2 border-blue-500"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role} – {testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 