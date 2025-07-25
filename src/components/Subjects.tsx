import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Atom, 
  Globe, 
  BookOpen, 
  Languages, 
  Beaker,
  PenTool,
  TreePine,
  Heart,
  Brain
} from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      id: 1,
      name: "Matemática",
      description: "Álgebra, Geometria, Trigonometria e mais",
      icon: Calculator,
      color: "text-primary",
      bgColor: "bg-primary/10",
      lessons: 250,
      exercises: 500
    },
    {
      id: 2,
      name: "Física",
      description: "Mecânica, Eletromagnetismo, Ondulatória",
      icon: Atom,
      color: "text-accent",
      bgColor: "bg-accent/10",
      lessons: 180,
      exercises: 350
    },
    {
      id: 3,
      name: "Química",
      description: "Orgânica, Inorgânica, Físico-química",
      icon: Beaker,
      color: "text-success",
      bgColor: "bg-success/10",
      lessons: 160,
      exercises: 320
    },
    {
      id: 4,
      name: "Biologia",
      description: "Genética, Ecologia, Anatomia Humana",
      icon: Heart,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      lessons: 200,
      exercises: 400
    },
    {
      id: 5,
      name: "Geografia",
      description: "Geografia Física e Humana, Geopolítica",
      icon: Globe,
      color: "text-primary",
      bgColor: "bg-primary/10",
      lessons: 120,
      exercises: 240
    },
    {
      id: 6,
      name: "História",
      description: "História do Brasil e Geral, Atualidades",
      icon: BookOpen,
      color: "text-accent",
      bgColor: "bg-accent/10",
      lessons: 150,
      exercises: 300
    },
    {
      id: 7,
      name: "Português",
      description: "Gramática, Literatura, Redação",
      icon: PenTool,
      color: "text-success",
      bgColor: "bg-success/10",
      lessons: 180,
      exercises: 360
    },
    {
      id: 8,
      name: "Filosofia",
      description: "Ética, Lógica, História da Filosofia",
      icon: Brain,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      lessons: 80,
      exercises: 160
    }
  ];

  return (
    <section id="materias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Todas as matérias do{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              vestibular
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conteúdo completo e atualizado com as principais disciplinas cobradas 
            nos vestibulares mais concorridos do país.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.id} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${subject.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${subject.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{subject.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{subject.lessons} aulas</span>
                    <span>{subject.exercises} exercícios</span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Estudar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Ver Todas as Matérias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subjects;