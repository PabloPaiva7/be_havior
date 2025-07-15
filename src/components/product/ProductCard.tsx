import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
  category: string;
}

const ProductCard = ({ id, name, price, image, originalPrice, category }: ProductCardProps) => {
  const handleWhatsAppPurchase = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: ${name} - R$ ${price.toFixed(2).replace('.', ',')}. Gostaria de mais informações para comprar.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-product transition-all duration-300 overflow-hidden border-0 shadow-elegant">
      <div className="relative overflow-hidden">
        <Link to={`/produto/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        {originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              OFERTA
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <Link to={`/produto/${id}`}>
            <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={handleWhatsAppPurchase}
              variant="whatsapp"
              size="sm"
              className="flex-1"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Comprar
            </Button>
            <Link to={`/produto/${id}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                Detalhes
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;