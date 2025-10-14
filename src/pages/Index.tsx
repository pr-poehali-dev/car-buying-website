import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import NewCarsSection from '@/components/NewCarsSection';
import TradeInSection from '@/components/TradeInSection';
import CreditSection from '@/components/CreditSection';
import ContactSection from '@/components/ContactSection';
import TestDriveModal from '@/components/TestDriveModal';

const Index = () => {
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">PREMIUM AUTO</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
              <a href="#new" className="text-sm font-medium hover:text-accent transition-colors">Новинки</a>
              <a href="#trade-in" className="text-sm font-medium hover:text-accent transition-colors">Трейд-ин</a>
              <a href="#credit" className="text-sm font-medium hover:text-accent transition-colors">Кредит</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button onClick={() => setIsTestDriveOpen(true)} className="hidden md:flex">
              Записаться на тест-драйв
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section id="home">
          <HeroSection onTestDrive={() => setIsTestDriveOpen(true)} />
        </section>
        
        <section id="new" className="py-20 bg-white">
          <NewCarsSection onTestDrive={() => setIsTestDriveOpen(true)} />
        </section>
        
        <section id="trade-in" className="py-20">
          <TradeInSection />
        </section>
        
        <section id="credit" className="py-20 bg-white">
          <CreditSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </div>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PREMIUM AUTO</h3>
              <p className="text-sm opacity-90">Автомобили премиум-класса для ценителей качества и стиля</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@premiumauto.ru</p>
                <p>Москва, Ленинский проспект, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Пн-Пт: 09:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 19:00</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            © 2025 Premium Auto. Все права защищены.
          </div>
        </div>
      </footer>

      <TestDriveModal open={isTestDriveOpen} onClose={() => setIsTestDriveOpen(false)} />
    </div>
  );
};

export default Index;
