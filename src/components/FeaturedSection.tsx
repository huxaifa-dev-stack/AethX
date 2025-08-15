import { SoftwareCard } from "./SoftwareCard";

const featuredSoftware = [
  {
    id: "1",
    name: "PhotoPro Studio",
    author: "PixelCraft Inc.",
    description: "Professional photo editing suite with AI-powered enhancement tools and advanced color grading capabilities.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    rating: 4.8,
    downloads: "2.5M+",
    version: "2024.1",
    size: "285 MB",
    lastUpdated: "2 days ago",
    verified: true,
    platforms: ["Windows", "macOS", "Linux"],
    price: "$99.99"
  },
  {
    id: "2",
    name: "DevTools Ultimate",
    author: "CodeCraft Studios",
    description: "Complete development environment with intelligent code completion, debugging, and project management.",
    logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop",
    rating: 4.9,
    downloads: "1.8M+",
    version: "3.2.1",
    size: "156 MB",
    lastUpdated: "1 week ago",
    verified: true,
    platforms: ["Windows", "macOS", "Linux"],
    price: "Free"
  },
  {
    id: "3",
    name: "SecureVault Pro",
    author: "CyberShield Ltd.",
    description: "Enterprise-grade password manager with biometric authentication and secure cloud synchronization.",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=64&h=64&fit=crop",
    rating: 4.7,
    downloads: "950K+",
    version: "1.8.4",
    size: "45 MB",
    lastUpdated: "3 days ago",
    verified: true,
    platforms: ["Windows", "macOS", "iOS", "Android"],
    price: "$4.99/mo"
  },
  {
    id: "4",
    name: "AudioMaster Suite",
    author: "SoundWave Digital",
    description: "Professional audio editing and mastering software with industry-standard plugins and effects.",
    logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=64&h=64&fit=crop",
    rating: 4.6,
    downloads: "720K+",
    version: "5.1.2",
    size: "312 MB",
    lastUpdated: "5 days ago",
    verified: false,
    platforms: ["Windows", "macOS"],
    price: "$199.99"
  },
  {
    id: "5",
    name: "CloudSync Manager",
    author: "DataFlow Systems",
    description: "Unified cloud storage management tool supporting multiple providers with advanced sync capabilities.",
    logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=64&h=64&fit=crop",
    rating: 4.5,
    downloads: "1.2M+",
    version: "2.3.0",
    size: "78 MB",
    lastUpdated: "1 day ago",
    verified: true,
    platforms: ["Windows", "macOS", "Linux"],
    price: "Free"
  },
  {
    id: "6",
    name: "TaskFlow Pro",
    author: "Productivity Plus",
    description: "Advanced project management and team collaboration platform with Gantt charts and time tracking.",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    rating: 4.8,
    downloads: "890K+",
    version: "4.0.1",
    size: "124 MB",
    lastUpdated: "4 days ago",
    verified: true,
    platforms: ["Windows", "macOS", "Web"],
    price: "$9.99/mo"
  }
];

export const FeaturedSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Software</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked applications from trusted developers, featuring the best software available today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSoftware.map((software, index) => (
            <SoftwareCard
              key={software.id}
              {...software}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};