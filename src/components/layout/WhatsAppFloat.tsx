import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Tenho interesse nas joias de prata. Gostaria de mais informações.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        variant="whatsapp"
        size="lg"
        className="rounded-full shadow-product hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline ml-2">WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;