import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/product/ProductCard';
import { ChevronLeft, ChevronRight, Star, Shield, Truck } from 'lucide-react';

import heroImage from '@/assets/hero-jewelry.jpg';
import ringsImage from '@/assets/rings-category.jpg';
import earringsImage from '@/assets/earrings-category.jpg';
import necklacesImage from '@/assets/necklaces-category.jpg';
import braceletsImage from '@/assets/bracelets-category.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImage,
      title: 'Elegância em Prata',
      subtitle: 'Descubra nossa coleção exclusiva de joias em prata',
      cta: 'Explorar Coleção'
    },
    {
      image: ringsImage,
      title: 'Anéis Únicos',
      subtitle: 'Peças que contam sua história',
      cta: 'Ver Anéis'
    },
    {
      image: necklacesImage,
      title: 'Colares Sofisticados',
      subtitle: 'Para momentos especiais',
      cta: 'Ver Colares'
    }
  ];

  const categories = [
    {
      name: 'Anéis',
      image: ringsImage,
      path: '/categoria/aneis',
      description: 'Anéis elegantes para todas as ocasiões'
    },
    {
      name: 'Brincos',
      image: earringsImage,
      path: '/categoria/brincos',
      description: 'Brincos delicados que realçam sua beleza'
    },
    {
      name: 'Colares',
      image: necklacesImage,
      path: '/categoria/colares',
      description: 'Colares sofisticados para looks marcantes'
    },
    {
      name: 'Pulseiras',
      image: braceletsImage,
      path: '/categoria/pulseiras',
      description: 'Pulseiras charmosas para seu estilo único'
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Anel de Prata com Zircônia',
      price: 89.90,
      originalPrice: 120.00,
      image: ringsImage,
      category: 'aneis'
    },
    {
      id: '2',
      name: 'Brincos de Prata Gota',
      price: 65.90,
      image: earringsImage,
      category: 'brincos'
    },
    {
      id: '3',
      name: 'Colar de Prata Minimalista',
      price: 95.90,
      image: necklacesImage,
      category: 'colares'
    },
    {
      id: '4',
      name: 'Pulseira de Prata Delicada',
      price: 75.90,
      image: braceletsImage,
      category: 'pulseiras'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Prata 925 certificada com garantia de 1 ano'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Frete grátis para todo o Brasil acima de R$ 150'
    },
    {
      icon: Star,
      title: 'Peças Exclusivas',
      description: 'Designs únicos e tendências da moda internacional'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {slide.subtitle}
                  </p>
                  <Button variant="luxury" size="xl">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nossas Categorias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção cuidadosamente curada de joias de prata, 
              cada peça escolhida para celebrar sua beleza única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Card className="group hover:shadow-product transition-all duration-300 overflow-hidden border-0 shadow-elegant">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-serif font-bold mb-2">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground">
              Peças selecionadas especialmente para você
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="elegant" size="lg">
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Encontre a Joia Perfeita para Você
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Cada peça é única, assim como você. Descubra nossa coleção completa 
            e encontre a joia que conta sua história.
          </p>
          <div className="space-x-4">
            <Button variant="elegant" size="xl">
              Explorar Coleção
            </Button>
            <Button variant="whatsapp" size="xl">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;