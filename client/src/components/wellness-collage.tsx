import runningUrl from '@assets/11_1756219489416.jpg';
import stretchingUrl from '@assets/9_1756219534275.jpg';
import jumpingUrl from '@assets/12_1756219559294.jpg';

export function WellnessCollage() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div 
            className="h-48 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${runningUrl})` }}
            data-testid="wellness-image-running"
          />
          <div 
            className="h-48 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${stretchingUrl})` }}
            data-testid="wellness-image-stretching"
          />
          <div 
            className="h-48 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${jumpingUrl})` }}
            data-testid="wellness-image-jumping"
          />
        </div>
      </div>
    </section>
  );
}