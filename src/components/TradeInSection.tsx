import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const TradeInSection = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trade-in form:', formData);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Трейд-ин</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Обменяйте ваш автомобиль на новый с максимальной выгодой. 
            Мы предлагаем справедливую оценку и прозрачные условия.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Максимальная выгода</h3>
                <p className="text-muted-foreground">
                  Получите до 95% рыночной стоимости вашего автомобиля
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Быстрая оценка</h3>
                <p className="text-muted-foreground">
                  Профессиональная оценка за 30 минут
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Юридическая чистота</h3>
                <p className="text-muted-foreground">
                  Полная проверка и прозрачное оформление сделки
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Узнайте стоимость вашего авто</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="brand">Марка автомобиля</Label>
                <Input
                  id="brand"
                  placeholder="Mercedes-Benz"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="model">Модель</Label>
                <Input
                  id="model"
                  placeholder="E-Class"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Год выпуска</Label>
                  <Input
                    id="year"
                    placeholder="2020"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="mileage">Пробег (км)</Label>
                  <Input
                    id="mileage"
                    placeholder="50000"
                    value={formData.mileage}
                    onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Получить оценку
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TradeInSection;
