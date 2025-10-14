import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Контакты</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="MapPin" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Адрес салона</h4>
                <p className="text-muted-foreground">
                  Москва, Ленинский проспект, 1<br />
                  БЦ "Премиум", 1 этаж
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="Phone" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Телефон</h4>
                <p className="text-muted-foreground">
                  +7 (495) 123-45-67<br />
                  Звонки принимаются ежедневно
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="Mail" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground">
                  info@premiumauto.ru<br />
                  Ответим в течение 1 часа
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-sm shrink-0">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Режим работы</h4>
                <p className="text-muted-foreground">
                  Понедельник - Пятница: 09:00 - 21:00<br />
                  Суббота - Воскресенье: 10:00 - 19:00
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted p-6 rounded-sm">
            <h4 className="font-bold mb-3">Как нас найти</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Icon name="Circle" size={12} className="mt-1 shrink-0" />
                <span>5 минут пешком от станции метро "Октябрьская"</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Circle" size={12} className="mt-1 shrink-0" />
                <span>Бесплатная парковка для посетителей салона</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Circle" size={12} className="mt-1 shrink-0" />
                <span>Удобный подъезд с Ленинского проспекта</span>
              </li>
            </ul>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-phone">Телефон</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите, чем мы можем вам помочь..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Отправить сообщение
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

export default ContactSection;
