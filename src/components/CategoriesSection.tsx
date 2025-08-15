import { 
  Code, 
  Shield, 
  Gamepad2, 
  Music, 
  Wrench, 
  GraduationCap, 
  Network, 
  Brain, 
  Cloud,
  Briefcase 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { 
    name: "Productivity", 
    icon: Briefcase, 
    count: "1,200+ apps",
    color: "bg-blue-500",
    description: "Office suites, task managers, note-taking"
  },
  { 
    name: "Development", 
    icon: Code, 
    count: "800+ tools",
    color: "bg-green-500",
    description: "IDEs, frameworks, debugging tools"
  },
  { 
    name: "Security", 
    icon: Shield, 
    count: "350+ solutions",
    color: "bg-red-500",
    description: "Antivirus, firewalls, encryption"
  },
  { 
    name: "Games", 
    icon: Gamepad2, 
    count: "2,000+ titles",
    color: "bg-purple-500",
    description: "Action, strategy, indie games"
  },
  { 
    name: "Multimedia", 
    icon: Music, 
    count: "600+ apps",
    color: "bg-pink-500",
    description: "Video, audio, photo editors"
  },
  { 
    name: "Utilities", 
    icon: Wrench, 
    count: "900+ tools",
    color: "bg-yellow-500",
    description: "System optimization, file managers"
  },
  { 
    name: "Education", 
    icon: GraduationCap, 
    count: "450+ resources",
    color: "bg-indigo-500",
    description: "Learning platforms, reference tools"
  },
  { 
    name: "Networking", 
    icon: Network, 
    count: "300+ tools",
    color: "bg-teal-500",
    description: "Network monitoring, communication"
  },
  { 
    name: "AI Tools", 
    icon: Brain, 
    count: "200+ solutions",
    color: "bg-orange-500",
    description: "Machine learning, automation"
  },
  { 
    name: "Cloud", 
    icon: Cloud, 
    count: "150+ services",
    color: "bg-cyan-500",
    description: "Storage, backup, sync solutions"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover software for every need. From productivity tools to games, find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group cursor-pointer hover:shadow-professional-lg transition-professional hover:-translate-y-1 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {category.count}
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};