import { useQuery } from "@tanstack/react-query";
import { Star, Gem } from "lucide-react";
import { Button } from "./ui/button";
import threeBooksImageUrl from '@assets/3 books_1756155226562.jpg';

interface Book {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export function BooksCollection() {
  const { data: books, isLoading } = useQuery<Book[]>({
    queryKey: ['/api/books'],
  });

  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  const bundlePrice = books ? books.reduce((sum, book) => sum + book.price, 0) : 0;
  const bundleDiscount = Math.round(bundlePrice * 0.26); // 26% discount
  const bundleFinalPrice = bundlePrice - bundleDiscount;

  if (isLoading) {
    return (
      <section id="books" className="py-20 bg-luxury-gray">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">Loading premium books...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="books" className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-charcoal mb-4">
            <span className="text-brand-blue">Live Bold</span> Health Adventure Collection - Perfect Life Library
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            "Are you ready to feel unstoppable? Live Bold is your guide to experiencing the 10X Energy Effect — the surge of longevity, vitality, and life satisfaction that comes from making adventure a lifestyle. Aspire to the perfect life."
          </p>
        </div>
        
        
        {/* Bundle Offer */}
        <div className="mt-16 max-w-4xl mx-auto luxury-card rounded-2xl p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-sun-gradient rounded-full flex items-center justify-center mx-auto">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-playfair text-3xl font-bold" data-testid="bundle-title">
              Sunshine's Complete Collection
            </h4>
            <p className="text-xl text-gray-600" data-testid="bundle-description">
              Transform your life with all three transformational wellness eBooks - Live Bold, The S.I.M.P.L.E. Rule, and Feel Good & Shine On. Includes free shipping, exclusive bonus materials, and personal implementation guides.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl text-gray-500 line-through" data-testid="bundle-original-price">
                {formatPrice(bundlePrice)}
              </span>
              <span className="text-4xl font-bold text-brand-blue" data-testid="bundle-final-price">
                {formatPrice(bundleFinalPrice)}
              </span>
              <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-semibold" data-testid="bundle-savings">
                Save {formatPrice(bundleDiscount)}
              </span>
            </div>
            <Button 
              onClick={() => window.open('https://www.theenergylifestyle.com/shop', '_blank')}
              className="bg-luxury-gradient text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              data-testid="button-purchase-bundle"
            >
              Get Complete Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
