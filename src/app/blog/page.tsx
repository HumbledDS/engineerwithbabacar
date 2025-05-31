export default function BlogPage() {
  return (
    <main className="min-h-screen py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Articles, analyses et retours d'expérience sur la Data, l'IA et l'ingénierie moderne.<br/>
          Articles, analysis, and insights on Data, AI, and modern engineering.
        </p>
        {/* Blog posts list will go here */}
      </div>
    </main>
  );
} 