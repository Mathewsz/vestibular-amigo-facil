import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            100% Gratuito para Sempre
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Conquiste sua{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              aprovação
            </span>
            <br />
            no vestibular
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: "0.2s"}}>
            Plataforma completa de estudos com videoaulas, exercícios e simulados.
            Estude onde e quando quiser, com qualidade de ensino superior.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Começar Estudos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Matérias
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.6s"}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Estudantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">2000+</div>
              <div className="text-muted-foreground">Videoaulas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Aprovação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-gentle" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-bounce-gentle" style={{animationDelay: "1s"}} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-secondary/10 rounded-full animate-bounce-gentle" style={{animationDelay: "2s"}} />
    </section>
  );
};

export default Hero;