import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - Profil */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">VotreNom.dev</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data Engineer & Expert MLOps
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Disponible pour missions freelance
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apropos" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projets" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/tutoriels" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contenu Récent */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contenu Récent</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/latest" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Dernier article
                </Link>
              </li>
              <li>
                <Link href="/tutoriels/latest" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Dernier tutoriel
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/votrecompte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              contact@votrenom.dev
            </p>
          </div>
        </div>

        {/* Barre finale */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} VotreNom.dev. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
