import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onTestDrive: () => void;
}

const HeroSection = ({ onTestDrive }: HeroSectionProps) => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/49b8b998-e212-40ea-bc1c-c5b2dc6560e4.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Выберите свой путь к совершенству
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Эксклюзивные автомобили премиум-класса от ведущих мировых производителей
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8"
              onClick={onTestDrive}
            >
              Записаться на тест-драйв
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-foreground font-semibold px-8"
              onClick={() => document.getElementById('new')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть новинки
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-white/80">Моделей в наличии</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <div className="text-sm text-white/80">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2000+</div>
              <div className="text-sm text-white/80">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
