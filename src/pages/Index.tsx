import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [activeSection, setActiveSection] = useState('home');

  const calculateMonthlyPayment = () => {
    const rate = 0.12 / 12;
    const payment = (loanAmount * rate * Math.pow(1 + rate, loanTerm)) / (Math.pow(1 + rate, loanTerm) - 1);
    return Math.round(payment);
  };

  const cars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      price: '12 500 000 ₽',
      image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/c49dc98e-f4b1-4ba8-a89b-d02bd79d48cf.jpg',
      year: 2024,
      engine: '3.0L Twin-Turbo',
      power: '435 л.с.'
    },
    {
      id: 2,
      name: 'Range Rover Autobiography',
      price: '15 800 000 ₽',
      image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/5be69577-4e35-463d-9df5-01d273b252d7.jpg',
      year: 2024,
      engine: '4.4L V8',
      power: '530 л.с.'
    },
    {
      id: 3,
      name: 'Porsche 911 Carrera',
      price: '11 200 000 ₽',
      image: 'https://cdn.poehali.dev/projects/6542f1ba-c2a4-4fc9-ace9-e1f8934ea54c/files/4817d0cb-e0b1-4e2a-8092-4329ba3ab62b.jpg',
      year: 2024,
      engine: '3.0L Twin-Turbo',
      power: '385 л.с.'
    }
  ];

  const handleTestDriveSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Наш менеджер свяжется с вами в ближайшее время для подтверждения записи.",
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#1A1A1A]">PREMIUM CARS</h1>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm transition-colors ${activeSection === 'home' ? 'text-[#C9A961]' : 'text-gray-600 hover:text-[#C9A961]'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('new-arrivals')}
                className={`text-sm transition-colors ${activeSection === 'new-arrivals' ? 'text-[#C9A961]' : 'text-gray-600 hover:text-[#C9A961]'}`}
              >
                Новинки
              </button>
              <button 
                onClick={() => scrollToSection('credit')}
                className={`text-sm transition-colors ${activeSection === 'credit' ? 'text-[#C9A961]' : 'text-gray-600 hover:text-[#C9A961]'}`}
              >
                Кредит
              </button>
              <button 
                onClick={() => scrollToSection('trade-in')}
                className={`text-sm transition-colors ${activeSection === 'trade-in' ? 'text-[#C9A961]' : 'text-gray-600 hover:text-[#C9A961]'}`}
              >
                Трейд-ин
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`text-sm transition-colors ${activeSection === 'contacts' ? 'text-[#C9A961]' : 'text-gray-600 hover:text-[#C9A961]'}`}
              >
                Контакты
              </button>
            </div>
            <Button className="bg-[#C9A961] hover:bg-[#B89851] text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Премиальные <span className="text-[#C9A961]">автомобили</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-light">
              Эксклюзивная коллекция роскошных авто для истинных ценителей
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-[#C9A961] hover:bg-[#B89851] text-white px-8 py-6 text-lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на тест-драйв
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Запись на тест-драйв</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleTestDriveSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Введите ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car">Выберите автомобиль</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите модель" />
                        </SelectTrigger>
                        <SelectContent>
                          {cars.map(car => (
                            <SelectItem key={car.id} value={car.name}>{car.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата</Label>
                      <Input id="date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-[#C9A961] hover:bg-[#B89851]">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-6 text-lg"
                onClick={() => scrollToSection('new-arrivals')}
              >
                <Icon name="ChevronDown" size={20} className="mr-2" />
                Смотреть коллекцию
              </Button>
            </div>
          </div>
        </section>

        <section id="new-arrivals" className="py-24 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Новинки коллекции</h2>
              <p className="text-xl text-gray-600">Эксклюзивные модели 2024 года</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {cars.map((car) => (
                <Card key={car.id} className="overflow-hidden hover-scale border-gray-200 shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{car.name}</CardTitle>
                    <CardDescription className="text-lg text-[#C9A961] font-semibold">{car.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        <span>{car.year} год</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Gauge" size={16} className="mr-2" />
                        <span>{car.engine}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Zap" size={16} className="mr-2" />
                        <span>{car.power}</span>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-[#1A1A1A] hover:bg-[#2C2C2C] text-white">
                          Записаться на тест-драйв
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Тест-драйв {car.name}</DialogTitle>
                          <DialogDescription>
                            Заполните форму для записи на тест-драйв
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleTestDriveSubmit} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя</Label>
                            <Input id="name" placeholder="Введите ваше имя" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="date">Дата</Label>
                            <Input id="date" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Время</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите время" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10:00">10:00</SelectItem>
                                <SelectItem value="12:00">12:00</SelectItem>
                                <SelectItem value="14:00">14:00</SelectItem>
                                <SelectItem value="16:00">16:00</SelectItem>
                                <SelectItem value="18:00">18:00</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button type="submit" className="w-full bg-[#C9A961] hover:bg-[#B89851]">
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="credit" className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Кредитование</h2>
              <p className="text-xl text-gray-300">Выгодные условия от 12% годовых</p>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Рассчитать платёж</CardTitle>
                <CardDescription className="text-gray-300">Узнайте ежемесячный платеж по кредиту</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-white">Стоимость автомобиля</Label>
                    <span className="text-[#C9A961] font-semibold">{loanAmount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="20000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C9A961]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="text-white">Срок кредита</Label>
                    <span className="text-[#C9A961] font-semibold">{loanTerm} месяцев</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C9A961]"
                  />
                </div>
                <Separator className="bg-white/20" />
                <div className="bg-[#C9A961] p-6 rounded-lg text-center">
                  <p className="text-sm mb-2 text-white/80">Ежемесячный платёж</p>
                  <p className="text-4xl font-bold text-white">{calculateMonthlyPayment().toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                  <div className="bg-white/5 p-4 rounded">
                    <p className="text-gray-400 mb-1">Первоначальный взнос</p>
                    <p className="text-white font-semibold">от 20%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded">
                    <p className="text-gray-400 mb-1">Процентная ставка</p>
                    <p className="text-white font-semibold">от 12%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded">
                    <p className="text-gray-400 mb-1">Рассмотрение</p>
                    <p className="text-white font-semibold">за 30 минут</p>
                  </div>
                </div>
                <Button className="w-full bg-[#C9A961] hover:bg-[#B89851] text-white py-6 text-lg">
                  Оставить заявку на кредит
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="trade-in" className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Трейд-ин</h2>
              <p className="text-xl text-gray-600">Обменяйте свой автомобиль на новый</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center">
                    <Icon name="Car" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Оценка за 15 минут</h3>
                    <p className="text-gray-600">Быстрая и точная оценка вашего автомобиля</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center">
                    <Icon name="BadgeCheck" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Максимальная выкупная цена</h3>
                    <p className="text-gray-600">Справедливая рыночная стоимость вашего авто</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center">
                    <Icon name="FileText" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Помощь с документами</h3>
                    <p className="text-gray-600">Полное юридическое сопровождение сделки</p>
                  </div>
                </div>
              </div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Узнать стоимость авто</CardTitle>
                  <CardDescription>Заполните форму для предварительной оценки</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Марка</Label>
                      <Input id="brand" placeholder="Mercedes, BMW, Audi..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Модель</Label>
                      <Input id="model" placeholder="S-Class, X5, A6..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Год выпуска</Label>
                        <Input id="year" type="number" placeholder="2020" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mileage">Пробег (км)</Label>
                        <Input id="mileage" type="number" placeholder="50000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Телефон</Label>
                      <Input id="contact-phone" type="tel" placeholder="+7 (999) 999-99-99" />
                    </div>
                    <Button type="submit" className="w-full bg-[#C9A961] hover:bg-[#B89851]">
                      Получить оценку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-gray-300">Мы всегда рады вам помочь</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Адрес</h3>
                  <p className="text-gray-300">Москва, Кутузовский пр-т, 12</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-gray-300">Ежедневно 9:00 - 21:00</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                  <p className="text-gray-300">info@premiumcars.ru</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PREMIUM CARS</h3>
              <p className="text-gray-400 text-sm">Эксклюзивные премиальные автомобили для истинных ценителей</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#C9A961] transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('new-arrivals')} className="hover:text-[#C9A961] transition-colors">Новинки</button></li>
                <li><button onClick={() => scrollToSection('credit')} className="hover:text-[#C9A961] transition-colors">Кредит</button></li>
                <li><button onClick={() => scrollToSection('trade-in')} className="hover:text-[#C9A961] transition-colors">Трейд-ин</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@premiumcars.ru</li>
                <li>Москва, Кутузовский пр-т, 12</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-white/20 mb-8" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 PREMIUM CARS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
