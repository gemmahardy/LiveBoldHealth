import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "https://liveboldhealth.com/og-image.jpg",
  structuredData 
}: SEOHeadProps) {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const descMeta = document.querySelector('meta[name="description"]') || 
                      document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      descMeta.setAttribute('content', description);
      if (!document.querySelector('meta[name="description"]')) {
        document.head.appendChild(descMeta);
      }
    }

    // Update keywords
    if (keywords) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]') || 
                          document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      keywordsMeta.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(keywordsMeta);
      }
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    // Update Open Graph tags
    if (title) {
      const ogTitleMeta = document.querySelector('meta[property="og:title"]') || 
                         document.createElement('meta');
      ogTitleMeta.setAttribute('property', 'og:title');
      ogTitleMeta.setAttribute('content', title);
      if (!document.querySelector('meta[property="og:title"]')) {
        document.head.appendChild(ogTitleMeta);
      }
    }

    if (description) {
      const ogDescMeta = document.querySelector('meta[property="og:description"]') || 
                        document.createElement('meta');
      ogDescMeta.setAttribute('property', 'og:description');
      ogDescMeta.setAttribute('content', description);
      if (!document.querySelector('meta[property="og:description"]')) {
        document.head.appendChild(ogDescMeta);
      }
    }

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-page-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove page-specific structured data when component unmounts
      const pageScript = document.querySelector('script[data-page-structured-data]');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null; // This component doesn't render anything visible
}