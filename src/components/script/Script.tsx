import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, User, Clock, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export function Script() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const scriptSections = [
    {
      id: 'greeting',
      title: 'Приветствие и знакомство',
      icon: User,
      color: 'blue',
      content: `Здравствуйте! Меня зовут [Ваше имя], я представляю студию фотоальбомов PhotoAlbums. 

Мы специализируемся на создании премиальных фотоальбомов для особых моментов вашей жизни - свадеб, выпускных, детских праздников и корпоративных событий.

Расскажите, пожалуйста, какой альбом вас интересует?`
    },
    {
      id: 'services',
      title: 'Презентация услуг',
      icon: MessageCircle,
      color: 'green',
      content: `Мы предлагаем полный цикл создания фотоальбомов:

📸 Профессиональная фотосъемка
- Опытные фотографы с портфолио более 500 проектов
- Современное оборудование и студия
- Выездная съемка в любой локации

🎨 Индивидуальный дизайн
- Уникальные макеты под ваш стиль
- Более 50 готовых шаблонов
- Неограниченные правки до утверждения

📖 Премиальная печать
- Плотная фотобумага 300г/м²
- Твердый переплет с тиснением
- Защитная упаковка

Какой тип альбома вас интересует больше всего?`
    },
    {
      id: 'pricing',
      title: 'Обсуждение стоимости',
      icon: AlertCircle,
      color: 'yellow',
      content: `Стоимость зависит от типа альбома и ваших пожеланий:

💒 Свадебный альбом (50-100 фото):
- Стандарт: от 25 000 руб.
- Премиум: от 45 000 руб.
- VIP: от 75 000 руб.

🎓 Выпускной альбом (30-60 фото):
- Стандарт: от 15 000 руб.
- Премиум: от 25 000 руб.

👶 Детский альбом (40-80 фото):
- Стандарт: от 20 000 руб.
- Премиум: от 35 000 руб.

В стоимость входит: съемка, обработка фото, дизайн макета, печать альбома.

Какой бюджет вы рассматриваете?`
    },
    {
      id: 'process',
      title: 'Описание процесса работы',
      icon: Clock,
      color: 'purple',
      content: `Наш процесс работы максимально удобен для клиентов:

1️⃣ Консультация и планирование (1 день)
- Обсуждаем ваши пожелания
- Выбираем стиль и концепцию
- Планируем дату съемки

2️⃣ Фотосъемка (1-3 дня)
- Профессиональная съемка
- Различные локации и ракурсы
- Создание 200-500 исходных кадров

3️⃣ Обработка и отбор (3-5 дней)
- Профессиональная ретушь
- Цветокоррекция
- Отбор лучших кадров

4️⃣ Создание макета (5-7 дней)
- Индивидуальный дизайн
- Согласование с вами
- Внесение правок

5️⃣ Печать и готовность (7-10 дней)
- Печать на премиальной бумаге
- Переплет и упаковка
- Готовый альбом к получению

Общий срок: 3-4 недели. Подходят ли вам эти сроки?`
    },
    {
      id: 'objections',
      title: 'Работа с возражениями',
      icon: AlertCircle,
      color: 'red',
      content: `Ответы на частые возражения:

💰 "Дорого":
"Понимаю ваши опасения. Давайте посчитаем: альбом прослужит десятилетия, это инвестиция в семейную историю. Мы можем предложить рассрочку на 3-6 месяцев без переплат."

⏰ "Долго":
"Качественная работа требует времени. Но мы можем предложить экспресс-вариант за доплату 30% - готовность за 2 недели. Или начнем уже сейчас, чтобы к нужной дате все было готово."

🤔 "Подумаем":
"Конечно, это важное решение. Могу предложить встречу в нашей студии, покажу примеры работ. Или забронируем дату съемки с возможностью отмены за 3 дня - популярные даты быстро заканчиваются."

📱 "Есть телефон":
"Телефон отлично подходит для повседневных кадров. Но для особых моментов нужно профессиональное оборудование и опыт. Альбом - это семейная реликвия на десятилетия."`
    },
    {
      id: 'closing',
      title: 'Завершение разговора',
      icon: CheckCircle,
      color: 'green',
      content: `Варианты завершения разговора:

✅ При согласии:
"Отлично! Давайте зафиксируем детали:
- Тип альбома: [указать]
- Дата съемки: [указать] 
- Стоимость: [указать]
- Предоплата: 50% для бронирования

Могу выслать договор на WhatsApp для ознакомления. Какой способ связи удобнее?"

📞 При необходимости подумать:
"Понимаю, что нужно время на размышления. Отправлю вам наше портфолио и прайс на WhatsApp. Когда удобно будет созвониться для уточнения деталей?"

📧 Отправка материалов:
"Высылаю вам:
- Портфолио наших работ
- Подробный прайс-лист  
- Примеры альбомов
- Контакты для связи

Буду ждать вашего решения. Есть вопросы - звоните в любое время!"`
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      yellow: 'text-yellow-600 bg-yellow-50',
      purple: 'text-purple-600 bg-purple-50',
      red: 'text-red-600 bg-red-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Скрипт общения с клиентами</h1>
        <p className="text-gray-600">
          Готовые фразы и сценарии для эффективного общения с потенциальными клиентами
        </p>
      </div>

      {/* Quick tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
            Основные принципы общения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <User className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Будьте дружелюбны</h3>
              <p className="text-sm text-gray-600 mt-1">Улыбайтесь голосом</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Слушайте клиента</h3>
              <p className="text-sm text-gray-600 mt-1">Задавайте уточняющие вопросы</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Будьте экспертом</h3>
              <p className="text-sm text-gray-600 mt-1">Демонстрируйте знания</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Не торопите</h3>
              <p className="text-sm text-gray-600 mt-1">Дайте время подумать</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Script sections */}
      <div className="space-y-6">
        {scriptSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 ${getIconColor(section.color)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {section.title}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(section.content, section.id)}
                    className={copiedSection === section.id ? 'bg-green-50 text-green-700' : ''}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    {copiedSection === section.id ? 'Скопировано!' : 'Копировать'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-gray-700 font-sans text-sm leading-relaxed">
                    {section.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Contact templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-green-600" />
            Шаблоны для разных каналов связи
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                Телефонный звонок
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  "Добрый день! Студия PhotoAlbums, меня зовут [имя]. Я правильно понимаю, что вас интересует создание фотоальбома? Расскажите, пожалуйста, для какого события?"
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                WhatsApp/Telegram
              </h3>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  "Здравствуйте! 👋 Спасибо за интерес к нашей студии! Мы создаем премиальные фотоальбомы для особых моментов. Какой тип альбома вас интересует? 📸"
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}