import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Play, 
  FileText, 
  Trophy, 
  Clock, 
  CheckCircle, 
  Smartphone,
  Users,
  Target,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Play,
      title: "Videoaulas HD",
      description: "Mais de 2000 videoaulas em alta definição com os melhores professores do país",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: FileText,
      title: "Exercícios Práticos",
      description: "Milhares de exercícios resolvidos e comentados de vestibulares anteriores",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Trophy,
      title: "Simulados Reais",
      description: "Simulados que reproduzem fielmente as provas dos principais vestibulares",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Clock,
      title: "Estude no Seu Ritmo",
      description: "Acesso 24/7 para estudar quando e onde quiser, sem pressa",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento",
      description: "Relatórios detalhados do seu progresso e áreas para melhorar",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Estude pelo computador, tablet ou celular com sincronização automática",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Fórum de dúvidas com outros estudantes e professores especializados",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Target,
      title: "Foco no Objetivo",
      description: "Planos de estudo personalizados para cada tipo de vestibular",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Zap,
      title: "Sempre Atualizado",
      description: "Conteúdo constantemente atualizado com as últimas mudanças nos vestibulares",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              EducaOnline?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma plataforma completa pensada especialmente para maximizar 
            seus resultados nos vestibulares mais concorridos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;