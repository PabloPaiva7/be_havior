import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Clock, Package, CreditCard } from 'lucide-react';

const ExchangePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Política de Troca e Devolução
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua satisfação é nossa prioridade. Conheça nossos termos de troca e devolução.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          {/* Main Policy */}
          <Card className="shadow-elegant mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Prazo para Trocas e Devoluções</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Na <strong>Prata & Elegância</strong>, garantimos sua total satisfação com nossas joias. 
                  Você tem <strong>30 dias corridos</strong> a partir da data de recebimento do produto 
                  para solicitar troca ou devolução.
                </p>
                <p>
                  Esse prazo foi estabelecido para que você tenha tempo suficiente para avaliar 
                  cuidadosamente sua joia e ter certeza de que ela atende às suas expectativas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium">Condições do Produto</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Produto em perfeito estado</li>
                  <li>• Embalagem original preservada</li>
                  <li>• Certificado de garantia incluso</li>
                  <li>• Sem sinais de uso ou desgaste</li>
                  <li>• Etiquetas e lacres intactos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-medium">Prazos</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 30 dias para solicitar troca/devolução</li>
                  <li>• 5 dias úteis para análise</li>
                  <li>• 10 dias úteis para processar estorno</li>
                  <li>• 15 dias úteis para nova entrega</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <Card className="shadow-elegant mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Como Solicitar Troca ou Devolução</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Entre em Contato</h3>
                    <p className="text-muted-foreground">
                      Entre em contato conosco pelo WhatsApp <strong>(11) 99999-9999</strong> ou 
                      e-mail <strong>contato@prataeelegancia.com</strong> informando o motivo da troca/devolução.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Autorização</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe analisará sua solicitação e enviará as instruções para postagem, 
                      incluindo o código de autorização de devolução.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Envio do Produto</h3>
                    <p className="text-muted-foreground">
                      Embale cuidadosamente o produto na embalagem original e envie pelos Correios. 
                      Os custos de postagem para devolução são por conta do cliente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Análise e Processamento</h3>
                    <p className="text-muted-foreground">
                      Ao recebermos o produto, nossa equipe fará a análise em até 5 dias úteis. 
                      Após aprovação, processaremos a troca ou estorno.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="shadow-elegant mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CreditCard className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif font-bold">Formas de Reembolso</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O estorno será processado na mesma forma de pagamento utilizada na compra:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>PIX:</strong> Estorno imediato após aprovação</li>
                  <li>• <strong>Cartão de Crédito:</strong> 1 a 2 faturas (conforme operadora)</li>
                  <li>• <strong>Cartão de Débito:</strong> 5 a 10 dias úteis</li>
                  <li>• <strong>Boleto:</strong> Depósito em conta corrente em até 10 dias úteis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-serif font-bold">Garantia de Qualidade</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Todas as nossas joias possuem <strong>garantia de 1 ano</strong> contra defeitos de fabricação. 
                  A garantia cobre:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Defeitos no banho de prata</li>
                  <li>• Problemas de soldas ou fechos</li>
                  <li>• Descolamento de pedras por defeito de fabricação</li>
                  <li>• Oxidação precoce (não causada por mau uso)</li>
                </ul>
                <p className="mt-4">
                  <strong>Importante:</strong> A garantia não cobre danos causados por uso inadequado, 
                  quedas, contato com produtos químicos ou desgaste natural.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-medium mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você com qualquer questão.
            </p>
            <div className="space-x-4">
              <Link to="/contato">
                <Button variant="luxury" size="lg">
                  Entrar em Contato
                </Button>
              </Link>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => {
                  const phoneNumber = '5511999999999';
                  const message = encodeURIComponent('Olá! Tenho dúvidas sobre a política de troca e devolução.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExchangePolicy;