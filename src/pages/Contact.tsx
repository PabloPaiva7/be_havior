import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode integrar com n8n ou outro serviço
    const webhookUrl = 'https://seu-n8n-webhook-url.com/webhook/contato';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'formulario-contato'
        }),
      });

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre as joias de prata. Poderia me ajudar?'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a joia perfeita. 
            Entre em contato conosco e teremos prazer em atendê-la.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Envie sua Mensagem</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Como podemos ajudá-la? Conte-nos sobre suas preferências ou dúvidas..."
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-6">Contato Rápido</h3>
                  <div className="space-y-6">
                    <Button
                      onClick={handleWhatsAppContact}
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Conversar no WhatsApp
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Resposta mais rápida! Atendimento personalizado para suas necessidades.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-muted-foreground">(11) 99999-9999</p>
                        <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-muted-foreground">contato@prataeelegancia.com</p>
                        <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Endereço</p>
                        <p className="text-muted-foreground">
                          Rua das Joias, 123<br />
                          Centro, São Paulo - SP<br />
                          CEP: 01234-567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Horário de Atendimento</p>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 9h às 18h<br />
                          Sábados: 9h às 14h<br />
                          Domingos: Fechado
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-6">Redes Sociais</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground mb-4">
                      Siga-nos para ver as últimas novidades e inspirações!
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>@prataeelegancia</span>
                      </a>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>Prata & Elegância</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Vocês fazem entrega em todo o Brasil?',
                answer: 'Sim! Fazemos entrega para todo o Brasil via Correios com frete grátis para compras acima de R$ 150.'
              },
              {
                question: 'As joias são realmente de prata 925?',
                answer: 'Sim, todas as nossas peças são de prata sterling 925 certificada, com garantia de qualidade e autenticidade.'
              },
              {
                question: 'Qual é o prazo de entrega?',
                answer: 'O prazo varia de 5 a 15 dias úteis, dependendo da sua localização. Você receberá o código de rastreamento para acompanhar seu pedido.'
              },
              {
                question: 'Posso trocar se não gostar?',
                answer: 'Sim, você tem 30 dias para trocar ou devolver o produto, desde que esteja em perfeitas condições e na embalagem original.'
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;