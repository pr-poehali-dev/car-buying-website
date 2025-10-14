import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const CreditSection = () => {
  const [carPrice, setCarPrice] = useState([5000000]);
  const [downPayment, setDownPayment] = useState([1000000]);
  const [term, setTerm] = useState([36]);

  const monthlyPayment = Math.round(
    ((carPrice[0] - downPayment[0]) * (0.099 / 12)) / 
    (1 - Math.pow(1 + 0.099 / 12, -term[0]))
  );

  const totalAmount = monthlyPayment * term[0];
  const overpayment = totalAmount - (carPrice[0] - downPayment[0]);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Кредитование</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Гибкие условия кредитования от ведущих банков-партнеров с минимальными ставками
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-8">Калькулятор кредита</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <Label className="text-primary-foreground/90">Стоимость автомобиля</Label>
                  <span className="font-bold text-accent">{carPrice[0].toLocaleString()} ₽</span>
                </div>
                <Slider
                  value={carPrice}
                  onValueChange={setCarPrice}
                  min={1000000}
                  max={20000000}
                  step={100000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs opacity-70">
                  <span>1 млн ₽</span>
                  <span>20 млн ₽</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <Label className="text-primary-foreground/90">Первоначальный взнос</Label>
                  <span className="font-bold text-accent">{downPayment[0].toLocaleString()} ₽</span>
                </div>
                <Slider
                  value={downPayment}
                  onValueChange={setDownPayment}
                  min={0}
                  max={carPrice[0]}
                  step={50000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs opacity-70">
                  <span>0 ₽</span>
                  <span>{Math.round((downPayment[0] / carPrice[0]) * 100)}%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <Label className="text-primary-foreground/90">Срок кредита</Label>
                  <span className="font-bold text-accent">{term[0]} мес</span>
                </div>
                <Slider
                  value={term}
                  onValueChange={setTerm}
                  min={12}
                  max={84}
                  step={12}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs opacity-70">
                  <span>1 год</span>
                  <span>7 лет</span>
                </div>
              </div>

              <div className="pt-6 border-t border-primary-foreground/20 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary-foreground/90">Ежемесячный платеж:</span>
                  <span className="text-3xl font-bold text-accent">{monthlyPayment.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-sm opacity-80">
                  <span>Переплата:</span>
                  <span>{overpayment.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-sm opacity-80">
                  <span>Общая сумма:</span>
                  <span>{totalAmount.toLocaleString()} ₽</span>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-foreground" size="lg">
                Оформить заявку
                <Icon name="FileText" className="ml-2" size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold mb-8">Преимущества кредита</h3>
          
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="Percent" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Ставка от 9.9%</h4>
                <p className="text-muted-foreground">
                  Минимальная процентная ставка от ведущих банков-партнеров
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="CircleCheckBig" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Одобрение за 30 минут</h4>
                <p className="text-muted-foreground">
                  Быстрое рассмотрение заявки и моментальное решение
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="FileText" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Минимум документов</h4>
                <p className="text-muted-foreground">
                  Для оформления нужен только паспорт и водительское удостоверение
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="Wallet" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Без первоначального взноса</h4>
                <p className="text-muted-foreground">
                  Возможность покупки автомобиля без первоначального взноса
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="RefreshCw" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Досрочное погашение</h4>
                <p className="text-muted-foreground">
                  Возможность погасить кредит досрочно без штрафов и комиссий
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <label className={`text-sm font-medium ${className}`}>{children}</label>
);

export default CreditSection;
