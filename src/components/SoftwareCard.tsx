import { Download, Star, Verified, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SoftwareCardProps {
  id: string;
  name: string;
  author: string;
  description: string;
  logo: string;
  rating: number;
  downloads: string;
  version: string;
  size: string;
  lastUpdated: string;
  verified?: boolean;
  platforms: string[];
  price?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SoftwareCard = ({
  name,
  author,
  description,
  logo,
  rating,
  downloads,
  version,
  size,
  lastUpdated,
  verified = false,
  platforms,
  price = "Free",
  className = "",
  style
}: SoftwareCardProps) => {
  return (
    <Card className={`group cursor-pointer hover:shadow-professional-xl transition-professional hover:-translate-y-2 bg-gradient-card border-0 ${className}`} style={style}>
      <CardContent className="p-6">
        {/* Header with Logo and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-professional-sm group-hover:shadow-professional-md transition-shadow">
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors truncate">
                {name}
              </h3>
              {verified && (
                <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />
              )}
            </div>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              by {author}
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">{downloads}</span>
          </div>
          <div className="flex gap-1">
            {platforms.slice(0, 3).map((platform) => (
              <Badge key={platform} variant="secondary" className="text-xs">
                {platform}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hidden Details (shown on hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 mb-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Version: {version}</span>
            <span>Size: {size}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Updated: {lastUpdated}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-2">
            {price === "Free" ? (
              <Badge className="bg-success text-success-foreground">
                Free
              </Badge>
            ) : (
              <span className="text-sm font-semibold text-primary">{price}</span>
            )}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="default">
              <Download className="h-3 w-3 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};