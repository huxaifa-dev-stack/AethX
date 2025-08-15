import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const heroSlides = [
  {
    id: 1,
    title: "Professional Video Editor Pro",
    subtitle: "Create stunning videos with AI-powered editing",
    description: "The most advanced video editing suite trusted by professionals worldwide",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=400&fit=crop",
    rating: 4.9,
    downloads: "2M+",
    price: "Free Trial"
  },
  {
    id: 2,
    title: "CodeCraft IDE Ultimate",
    subtitle: "Next-generation development environment",
    description: "Boost your productivity with intelligent code completion and debugging",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    rating: 4.8,
    downloads: "1.5M+",
    price: "$49.99"
  },
  {
    id: 3,
    title: "SecureGuard Enterprise",
    subtitle: "Ultimate cybersecurity protection",
    description: "Protect your digital assets with enterprise-grade security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    rating: 4.9,
    downloads: "3M+",
    price: "Free"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-[500px] overflow-hidden bg-gradient-hero">
      <div className="container relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-12">
              {/* Content */}
              <div className="space-y-6 text-white animate-fade-in-up">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-90">{slide.subtitle}</p>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg opacity-90 max-w-md">
                    {slide.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{slide.rating}</span>
                  </div>
                  <div className="text-sm opacity-75">
                    {slide.downloads} downloads
                  </div>
                  <div className="px-2 py-1 bg-white/20 rounded text-sm font-medium">
                    {slide.price}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="hidden lg:block">
                <Card className="overflow-hidden shadow-professional-xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};