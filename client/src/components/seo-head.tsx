import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "https://liveboldhealth.com/og-image.jpg",
  ogUrl,
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

    // Update Open Graph URL
    const finalOgUrl = ogUrl || canonicalUrl;
    if (finalOgUrl) {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]') || 
                       document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      ogUrlMeta.setAttribute('content', finalOgUrl);
      if (!document.querySelector('meta[property="og:url"]')) {
        document.head.appendChild(ogUrlMeta);
      }
    }

    // Update Open Graph Image
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]') || 
                         document.createElement('meta');
      ogImageMeta.setAttribute('property', 'og:image');
      ogImageMeta.setAttribute('content', ogImage);
      if (!document.querySelector('meta[property="og:image"]')) {
        document.head.appendChild(ogImageMeta);
      }
    }

    // Update Twitter Card Image and Title
    if (title) {
      const twitterTitleMeta = document.querySelector('meta[property="twitter:title"]') || 
                              document.createElement('meta');
      twitterTitleMeta.setAttribute('property', 'twitter:title');
      twitterTitleMeta.setAttribute('content', title);
      if (!document.querySelector('meta[property="twitter:title"]')) {
        document.head.appendChild(twitterTitleMeta);
      }
    }

    if (description) {
      const twitterDescMeta = document.querySelector('meta[property="twitter:description"]') || 
                             document.createElement('meta');
      twitterDescMeta.setAttribute('property', 'twitter:description');
      twitterDescMeta.setAttribute('content', description);
      if (!document.querySelector('meta[property="twitter:description"]')) {
        document.head.appendChild(twitterDescMeta);
      }
    }

    if (ogImage) {
      const twitterImageMeta = document.querySelector('meta[property="twitter:image"]') || 
                              document.createElement('meta');
      twitterImageMeta.setAttribute('property', 'twitter:image');
      twitterImageMeta.setAttribute('content', ogImage);
      if (!document.querySelector('meta[property="twitter:image"]')) {
        document.head.appendChild(twitterImageMeta);
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