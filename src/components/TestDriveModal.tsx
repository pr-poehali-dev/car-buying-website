import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface TestDriveModalProps {
  open: boolean;
  onClose: () => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const cars = [
  'Mercedes-Benz S-Class',
  'BMW X7',
  'Porsche Panamera',
  'Audi A8',
  'Range Rover Sport',
  'Lexus LS',
];

const TestDriveModal = ({ open, onClose }: TestDriveModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive booking:', formData);
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Запись на тест-драйв</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-muted-foreground mb-6">
            Заполните форму, и наш менеджер свяжется с вами для подтверждения записи
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="td-name">Ваше имя *</Label>
              <Input
                id="td-name"
                placeholder="Иван Петров"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="td-phone">Телефон *</Label>
                <Input
                  id="td-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="td-email">Email</Label>
                <Input
                  id="td-email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="td-car">Выберите автомобиль *</Label>
              <Select value={formData.car} onValueChange={(value) => setFormData({ ...formData, car: value })}>
                <SelectTrigger id="td-car">
                  <SelectValue placeholder="Выберите модель" />
                </SelectTrigger>
                <SelectContent>
                  {cars.map((car) => (
                    <SelectItem key={car} value={car}>
                      {car}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="td-date">Дата *</Label>
                <Input
                  id="td-date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="td-time">Время *</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger id="td-time">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Что вас ждет:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Подробная презентация автомобиля (15 мин)</li>
                    <li>Тест-драйв по городу или трассе (30-45 мин)</li>
                    <li>Обсуждение условий покупки и trade-in</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Отмена
              </Button>
              <Button type="submit" className="flex-1">
                Записаться
                <Icon name="Calendar" className="ml-2" size={18} />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * Обязательные поля. Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestDriveModal;
