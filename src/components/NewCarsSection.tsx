import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewCarsSectionProps {
  onTestDrive: () => void;
}

const cars = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Премиум седан',
    price: 'от 8 500 000 ₽',
    image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/6d693736-e31b-4a63-b588-07a9f9ccb19d.jpg',
    features: ['3.0L V6 Twin-Turbo', '435 л.с.', '0-100 за 4.9 сек'],
  },
  {
    id: 2,
    name: 'BMW X7',
    category: 'Премиум SUV',
    price: 'от 7 800 000 ₽',
    image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/60a6f919-0b0a-43b5-9377-64cc60e89f4a.jpg',
    features: ['3.0L Inline-6', '375 л.с.', 'Полный привод'],
  },
  {
    id: 3,
    name: 'Porsche Panamera',
    category: 'Спортивный седан',
    price: 'от 9 200 000 ₽',
    image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/49b8b998-e212-40ea-bc1c-c5b2dc6560e4.jpg',
    features: ['4.0L V8 Twin-Turbo', '550 л.с.', '0-100 за 3.8 сек'],
  },
];

const NewCarsSection = ({ onTestDrive }: NewCarsSectionProps) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Новинки коллекции</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Откройте для себя последние модели премиум-класса с эксклюзивными характеристиками
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-accent text-foreground px-4 py-2 rounded-sm text-sm font-semibold">
                Новинка
              </div>
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2 font-medium">{car.category}</div>
              <h3 className="text-2xl font-bold mb-3">{car.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {car.features.map((feature, idx) => (
                  <span key={idx} className="text-xs bg-muted px-3 py-1 rounded-sm">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-accent">{car.price}</span>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                onClick={onTestDrive}
              >
                Записаться на тест-драйв
                <Icon name="Calendar" className="ml-2" size={18} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg" className="px-8">
          Смотреть все модели
          <Icon name="ArrowRight" className="ml-2" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default NewCarsSection;
