import { taskCard } from "@/components/pages/tasks/content/taskCards/taskCards";

export const InitialTasks: taskCard[] = [
  {
    id: 1,
    type: "full",
    status: "available",
    title: "Волшебный курсор",
    image: "card-1.png",
    activationDate: "active",
    toTheTask: {
      title: "Вперёд в 2ГИС!",
      text: "Ура! Начинаем наше путешествие в Новый год. Загляните в Навигатор 2ГИС, там ждёт праздничная оленья упряжка — скорее запрыгивайте и меняйте курсор на новогодний!",
      button: {
        href: "dgis://2gis.ru/cursors_settings",
        text: "Вперёд в 2ГИС!",
      },
    },
  },
  {
    id: 2,
    type: "short",
    status: "available",
    title: "Новогоднее путешествие",
    image: "card-2.png",
    activationDate: "active",
    toTheTask: {
      title: "Смотреть отели",
      text: "Планируете новогодние каникулы? Вместе с Отелло мы подобрали классные отели по всей России. Возможно, один из них станет вашим местом встречи Нового года!",
      button: {
        href: "https://otello.ru/collection/kak-v-skazke?adults=2&utm_source=2gis&utm_medium=selfad&utm_campaign=kak-v-skazke-131224&utm_content=no-paid_banner_advent-calendar_na_na_travel_131224_online_russia_rf",
        text: "Смотреть отели",
      },
    },
    promotionalCode: {
      title: "Промокод от Отелло на скидку 10%",
      code: "KAKVSKAZKE10",
      image: "task-2.png",
      secondImage: "task-2-done.png",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Скидка 10% не более 2000 ₽, на одно любое бронирование одним пользователем, действует с 13.12.2024 до 31.01.2025",
    },
  },
  {
    id: 3,
    type: "short",
    status: "available",
    title: "Гирляндное настроение",
    image: "card-3.png",
    activationDate: "active",
    toTheTask: {
      title: "Найти всё для творчества",
      text: "Создайте волшебную атмосферу дома с нашими <a href='https://static.2gis.com/files/2dac5181782d7e23.pdf' style='text-decoration: underline'>трафаретами</a> для гирлянд: скачайте, вырежьте и украсьте свой интерьер. В 2ГИС можно найти магазины канцелярии для покупки бумаги, ножниц и других материалов для творчества",
      button: {
        href: "dgis://2gis.ru/search/канцелярия",
        text: "Найти всё для творчества",
      },
    },
  },
  {
    id: 4,
    type: "short",
    status: "available",
    title: "Праздничный рецепт",
    image: "card-4.png",
    activationDate: "active",
    toTheTask: {
      title: "Открыть рецепт",
      text: "Что согреет в морозный вечер? Конечно, вкусное какао! Как раз нашли для вас рецепт. А если не хватает ингредиентов, ищите ближайшие продуктовые магазины в 2ГИС",
      button: {
        href: "dgis://2gis.ru/story/c333f162-0a83-4240-9dcc-3ad0e16e3c01",
        text: "Приготовить какао с зефирками",
      },
    },
  },
  {
    id: 5,
    type: "short",
    status: "available",
    title: "Книжная магия",
    image: "card-5.png",
    activationDate: "active",
    toTheTask: {
      title: "Открыть подборку",
      text: "Вместе с Литрес мы собрали самые популярные книги для уютных зимних вечеров. Самое время составить себе список для чтения в новогодние праздники, а мы подготовили для вас приятный подарок!",
      button: {
        href: "https://www.litres.ru/landing/2gisadvent/?lfrom=1204677204&utm_source=2gisadvent&utm_medium=cross&utm_campaign=2gisadvent",
        text: "Открыть подборку",
      },
    },
    promotionalCode: {
      title: "Промокод от Литрес",
      code: "2GIS2025",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Промокод даёт две книги в подарок из подборки и скидку 20% на весь каталог, действует до 31 января 2025",
      image: "task-5.png",
      secondImage: "task-5-done.png",
    },
  },
  {
    id: 6,
    type: "full",
    status: "available",
    title: "Мандаринка для друга",
    image: "card-6.png",
    activationDate: "active",
    toTheTask: {
      title: "Поделиться настроением",
      text: "Знаете, что в 2ГИС можно добавлять друзей? Вы сможете видеть их на карте, обмениваться сообщениями и эмодзи. Поделитесь новогодним настроением — закидайте друзей мандаринками и ёлками!",
      button: {
        href: "dgis://2gis.ru/mapfriends/tab",
        text: "Поделиться настроением",
      },
    },
  },
  {
    id: 7,
    type: "full",
    status: "available",
    title: "Новогодний киномарафон",
    image: "card-7.png",
    activationDate: "active",
    toTheTask: {
      title: "Выбрать фильм",
      text: "Вместе с Оkko собрали волшебную подборку новогодних фильмов, которая поможет создать праздничное настроение и окунуться в атмосферу чудес! Включайте любимые истории и наслаждайтесь уютными вечерами",
      button: {
        href: "https://okko.tv/collection/ny-movie-2gis-col?utm_source=2gis&utm_medium=advent&utm_campaign=ny-movie-2gis-col",
        text: "Выбрать фильм",
      },
    },
    promotionalCode: {
      title: "Промокод на 60 дней Okko за 1 ₽ по подписке Прайм",
      image: "task-7.png",
      secondImage: "task-7-done.png",
      code: "OKKO2025",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Акция на подписку Прайм. Организатор: ООО «Окко», г. Санкт-Петербург, ОГРН 1167847381130. Сроки акции: 12.12.24 - 31.01.25 г. (по московскому времени). Сроки активации промокода: 12.12.24 - 31.01.25 г. (по московскому времени). Имеются ограничения для участников. Предусмотрено автопродление. Подробнее об акции, сроках и условиях ее проведения: https://okko.tv/s/okko2025. Подписка «СберПрайм» – услуги по организации и обеспечению предоставления физлицам доступа к комплексу сервисов партнёров оказывает АО «ЦПЛ», ОГРН 1117746689840, Москва. Подробнее о Подписке – <a href='https://www.sberbank.com/sberprime.' style='text-decoration: underline'>https://www.sberbank.com/sberprime</a>",
    },
  },
  {
    id: 8,
    type: "short",
    status: "available",
    title: "Прогулка по склонам",
    image: "card-8.png",
    activationDate: "active",

    toTheTask: {
      title: "Посмотреть на Шерегеш",
      text: "Отправимся в Шерегеш? Тут горнолыжный сезон длится до 280 дней в году! Кататься с 2ГИС будет удобнее: мы обновили всю нужную информацию, добавили статус работы подъёмников и многое другое",
      button: {
        href: "dgis://2gis.ru/sheregesh/search/горнолыжные%20подъемники",
        text: "Посмотреть на Шерегеш",
      },
    },
    promotionalCode: {
      title: "Промокод от Отелло на скидку 10%",
      image: "task-2.png",
      secondImage: "task-2-done.png",
      code: "EDEMVGESH",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Скидка 10%, но не более 2000 ₽ на любое одно бронирование одним пользователем, срок действия с 18.12.2024 до 31.01.2025",
    },
  },
  {
    id: 9,
    type: "short",
    status: "available",
    title: "Новогодняя почта",
    image: "card-9.png",
    activationDate: "active",
    toTheTask: {
      title: "Найти почту",
      text: "Поздравьте друзей с Новым годом милой открыткой с тёплыми пожеланиями! Найдите ближайшее почтовое отделение на карте 2ГИС",
      button: {
        href: "dgis://2gis.ru/search/отделения%20почты",
        text: "Найти почту",
      },
    },
  },
  {
    id: 10,
    type: "short",
    status: "available",
    title: "Новогодний маршрут",
    image: "card-10.png",
    activationDate: "active",

    toTheTask: {
      title: "Поехали за подарками",
      text: "Пора отправиться на поиски идеальных подарков! Возьмите каршеринг и прокатитесь по городу в поисках праздничного настроения и интересных идей для друзей и близких",
      button: {
        href: "https://citydriveone.onelink.me/oC99/1lnioil9",
        text: "Поехали за подарками",
      },
    },
    promotionalCode: {
      title: "Промокод от Ситидрайва на 2 первые поездки",
      code: "2ГИСДРАЙВ",
      image: "task-10.png",
      secondImage: "task-10-done.png",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Промокод на первые две поездки, но не более 250 ₽ на каждую. При стоимости до 250 ₽ — поездка за 1 ₽. Действует с 18.11.2024 по 15.01.2025 вкл. при аренде по тарифам «Поминутный» и «Фикс». Подробнее: <a href='https://citydrive.ru/rules/stock/' style='text-decoration: underline'>citydrive.ru/rules/stock/</a>. Реклама. Рекламодатель: ООО «НТС», Москва, пр-д Береговой, д.5А, к.1, п. 1/13, ИНН 7704314221, ОГРН 1157746368999. <a href='https://citydrive.ru' style='text-decoration: underline'>citydrive.ru</a> — сервис аренды автомобилей",
    },
  },
  {
    id: 11,
    type: "short",
    status: "available",
    title: "Это точно ваш конёк!",
    image: "card-11.png",
    activationDate: "active",
    toTheTask: {
      title: "Найти каток",
      text: "Кажется, коньки уже слегка запылились — пора их расчехлять. Покатайтесь на ближайшем открытом катке или сходите на крытый, чтобы ни у кого не было сомнений, кто здесь чемпион!",
      button: { href: "dgis://2gis.ru/search/каток", text: "Найти каток" },
    },
  },
  {
    id: 12,
    type: "full",
    status: "available",
    title: "Курс на Великий Устюг",
    image: "card-12.png",
    activationDate: "active",

    toTheTask: {
      title: "Построить маршрут",
      text: "Какао выпито и гирлянды развешены. Самое время запрягать оленей и строить маршрут до Великого Устюга. Сказка не так уж далеко!",
      button: {
        href: "dgis://2gis.ru/velikij-ustyug/directions/points/%7C46.296988%2C60.770316%3B70030076137622163",
        text: "Построить маршрут",
      },
    },
    promotionalCode: {
      title: "Промокод от Отелло на скидку 10%",
      code: "DEDMOROZ",
      image: "task-2.png",
      secondImage: "task-2-done.png",
      subtitle:
        "Успейте сохранить или сделать скрин промокода до 27 декабря. А то растает!",
      conditions:
        "Скидка 10%, но не более 1000 ₽, на одно любое бронирование одним пользователем, действует с 23.12.2024 до 31.01.2025",
    },
  },
  {
    id: 13,
    type: "short",
    status: "available",
    title: "И вот она, нарядная!",
    image: "card-13.png",
    activationDate: "active",
    toTheTask: {
      title: "Пойти за ёлкой",
      text: "До Нового года — совсем немного, пора за ёлкой! И, конечно, за новыми игрушками для украшения. Мы уже отметили новогодние базары на карте 2ГИС, чтобы вы быстро нашли всё необходимое",
      button: {
        href: "dgis://2gis.ru/search/ёлочные%20базары",
        text: "Пойти за ёлкой",
      },
    },
  },
  {
    id: 14,
    type: "short",
    status: "available",
    title: "Снегопад на карте",
    image: "card-14.png",
    activationDate: "active",
    toTheTask: {
      title: "Включить зиму",
      text: "Добавьте волшебство на карту! Включите на карте 2ГИС «Зимний слой» — это очень красиво и атмосферно!",
      button: { href: "dgis://2gis.ru/maplayers", text: "Включить снег" },
    },
  },
];
