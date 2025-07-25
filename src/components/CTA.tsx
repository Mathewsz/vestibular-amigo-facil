import { Button } from "@/components/ui/button";
import { ArrowRight, Star, BookOpen } from "lucide-react";

const CTA = () => {
  return (
    <section id="simulados" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle" style={{animationDelay: "1s"}} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce-gentle" style={{animationDelay: "2s"}} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-300" />
            Avaliado com 5 estrelas por mais de 10.000 estudantes
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comece seus estudos
            <br />
            <span className="text-yellow-300">hoje mesmo!</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de estudantes que já estão se preparando para 
            conquistar suas vagas nos melhores vestibulares do país.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">✅ 100% Gratuito</div>
              <div className="text-white/80">Para sempre, sem pegadinhas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">🚀 Acesso Imediato</div>
              <div className="text-white/80">Comece a estudar agora mesmo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">📱 Multiplataforma</div>
              <div className="text-white/80">PC, tablet ou celular</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-semibold transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Criar Conta Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Confiado por estudantes de todo o Brasil</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <span>🏆 São Paulo</span>
              <span>🏆 Rio de Janeiro</span>
              <span>🏆 Minas Gerais</span>
              <span>🏆 Bahia</span>
              <span>🏆 Paraná</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;