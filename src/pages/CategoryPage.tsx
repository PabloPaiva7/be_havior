import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/product/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

import ringsImage from '@/assets/rings-category.jpg';
import earringsImage from '@/assets/earrings-category.jpg';
import necklacesImage from '@/assets/necklaces-category.jpg';
import braceletsImage from '@/assets/bracelets-category.jpg';

const CategoryPage = () => {
  const { categoria } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categoryData = {
    aneis: {
      name: 'Anéis',
      description: 'Anéis elegantes em prata 925 para todas as ocasiões',
      image: ringsImage
    },
    brincos: {
      name: 'Brincos',
      description: 'Brincos delicados que realçam sua beleza natural',
      image: earringsImage
    },
    colares: {
      name: 'Colares',
      description: 'Colares sofisticados para looks marcantes',
      image: necklacesImage
    },
    pulseiras: {
      name: 'Pulseiras',
      description: 'Pulseiras charmosas para seu estilo único',
      image: braceletsImage
    }
  };

  const currentCategory = categoryData[categoria as keyof typeof categoryData];

  const products = [
    {
      id: '1',
      name: `${currentCategory?.name} de Prata com Zircônia`,
      price: 89.90,
      originalPrice: 120.00,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '2',
      name: `${currentCategory?.name} de Prata Minimalista`,
      price: 65.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '3',
      name: `${currentCategory?.name} de Prata Clássico`,
      price: 95.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '4',
      name: `${currentCategory?.name} de Prata Delicado`,
      price: 75.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '5',
      name: `${currentCategory?.name} de Prata Vintage`,
      price: 110.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '6',
      name: `${currentCategory?.name} de Prata Moderno`,
      price: 85.90,
      originalPrice: 99.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '7',
      name: `${currentCategory?.name} de Prata Elegante`,
      price: 125.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    },
    {
      id: '8',
      name: `${currentCategory?.name} de Prata Exclusivo`,
      price: 155.90,
      image: currentCategory?.image || ringsImage,
      category: categoria || 'aneis'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (priceRange === 'all') return true;
    if (priceRange === 'under-100' && product.price < 100) return true;
    if (priceRange === '100-150' && product.price >= 100 && product.price <= 150) return true;
    if (priceRange === 'over-150' && product.price > 150) return true;
    return false;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
          <p className="text-muted-foreground">A categoria solicitada não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {currentCategory.name}
              </h1>
              <p className="text-xl text-white/90">
                {currentCategory.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground">
                {sortedProducts.length} produtos encontrados
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="featured">Destaques</option>
                  <option value="price-low">Menor preço</option>
                  <option value="price-high">Maior preço</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <Card className="p-6 shadow-elegant">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filtros
                </h3>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Faixa de Preço</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'Todos os preços', count: products.length },
                        { value: 'under-100', label: 'Até R$ 100', count: products.filter(p => p.price < 100).length },
                        { value: '100-150', label: 'R$ 100 - R$ 150', count: products.filter(p => p.price >= 100 && p.price <= 150).length },
                        { value: 'over-150', label: 'Acima de R$ 150', count: products.filter(p => p.price > 150).length }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="priceRange"
                            value={option.value}
                            checked={priceRange === option.value}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">
                            {option.label} ({option.count})
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Style Filter */}
                  <div>
                    <h4 className="font-medium mb-3">Estilo</h4>
                    <div className="space-y-2">
                      {[
                        'Clássico',
                        'Moderno',
                        'Vintage',
                        'Minimalista',
                        'Boho'
                      ].map((style) => (
                        <label key={style} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;