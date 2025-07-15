import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/product/ProductCard';
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  Star, 
  Shield, 
  Truck, 
  RotateCcw,
  Plus,
  Minus,
  MessageCircle
} from 'lucide-react';

import ringsImage from '@/assets/rings-category.jpg';
import earringsImage from '@/assets/earrings-category.jpg';
import necklacesImage from '@/assets/necklaces-category.jpg';
import braceletsImage from '@/assets/bracelets-category.jpg';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Anel de Prata 925 com Zircônia Cúbica',
    price: 89.90,
    originalPrice: 120.00,
    rating: 4.8,
    reviews: 124,
    description: `Este elegante anel de prata 925 apresenta uma deslumbrante zircônia cúbica que captura e reflete a luz de forma magnífica. 

    Fabricado com prata sterling de alta qualidade, este anel combina sofisticação e durabilidade. O design atemporal torna-o perfeito para uso diário ou ocasiões especiais.

    Características principais:
    • Prata 925 certificada
    • Zircônia cúbica de alta qualidade
    • Design hipoalergênico
    • Acabamento polido premium
    • Tamanhos disponíveis de 14 a 22`,
    images: [ringsImage, earringsImage, necklacesImage],
    category: 'aneis',
    sku: 'AP001-ZC',
    inStock: true,
    features: [
      'Prata 925 certificada',
      'Hipoalergênico',
      'Garantia de 1 ano',
      'Embalagem de presente inclusa'
    ]
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Anel de Prata Minimalista',
      price: 65.90,
      image: ringsImage,
      category: 'aneis'
    },
    {
      id: '3',
      name: 'Anel de Prata com Pedras',
      price: 95.90,
      image: ringsImage,
      category: 'aneis'
    },
    {
      id: '4',
      name: 'Anel de Prata Clássico',
      price: 75.90,
      image: ringsImage,
      category: 'aneis'
    },
    {
      id: '5',
      name: 'Anel de Prata Vintage',
      price: 110.90,
      image: ringsImage,
      category: 'aneis'
    }
  ];

  const handleWhatsAppPurchase = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto:
      
${product.name}
SKU: ${product.sku}
Preço: R$ ${product.price.toFixed(2).replace('.', ',')}
Quantidade: ${quantity}

Gostaria de mais informações para finalizar a compra.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleN8nWebhook = async () => {
    // Webhook para n8n - substitua pela URL real do seu webhook
    const webhookUrl = 'https://seu-n8n-webhook-url.com/webhook/pedido';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: product,
          quantity: quantity,
          timestamp: new Date().toISOString(),
          source: 'loja-prata'
        }),
      });
    } catch (error) {
      console.error('Erro ao enviar para n8n:', error);
    }
    
    // Depois redireciona para WhatsApp
    handleWhatsAppPurchase();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span>/</span>
            <Link to={`/categoria/${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-product">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} avaliações)
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">SKU: {product.sku}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Quantidade
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleN8nWebhook}
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Comprar via WhatsApp
                  </Button>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart 
                        className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-current text-red-500' : ''}`} 
                      />
                      {isWishlisted ? 'Favoritado' : 'Favoritar'}
                    </Button>
                    <Button variant="outline" size="lg">
                      <Share2 className="h-5 w-5 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Features */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Características do Produto</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Shield, text: 'Garantia 1 ano' },
                  { icon: Truck, text: 'Frete grátis' },
                  { icon: RotateCcw, text: 'Troca em 30 dias' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-16">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Descrição do Produto</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;