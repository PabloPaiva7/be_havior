import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">Prata & Elegância</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Joias de prata exclusivas que combinam elegância e sofisticação. 
              Cada peça é cuidadosamente selecionada para realçar sua beleza natural.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:contato@prataeelegancia.com"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Anéis', path: '/categoria/aneis' },
                { name: 'Brincos', path: '/categoria/brincos' },
                { name: 'Colares', path: '/categoria/colares' },
                { name: 'Pulseiras', path: '/categoria/pulseiras' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-medium mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/politica-troca"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Política de Troca
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Prata & Elegância. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;