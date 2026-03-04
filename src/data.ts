export interface HistoricalEvent {
    year: number;
    description: string;
}

export interface TimePeriod {
    id: number;
    title: string;
    startYear: number;
    endYear: number;
    events: HistoricalEvent[];
}

export const timePeriods: TimePeriod[] = [
    {
        id: 1,
        title: "Кино",
        startYear: 1980,
        endYear: 1986,
        events: [
            { year: 1980, description: "Выход фильма 'Сияние' Стэнли Кубрика" },
            { year: 1982, description: "Премьера 'Бегущего по лезвию'" },
            { year: 1984, description: "Выход 'Терминатора'" },
            { year: 1985, description: "Первая часть 'Назад в будущее'" },
            { year: 1986, description: "Премьера 'Чужих' Джеймса Кэмерона" }
        ]
    },
    {
        id: 2,
        title: "Литература",
        startYear: 1987,
        endYear: 1991,
        events: [
            { year: 1987, description: "Публикация 'Норвежского леса' Мураками" },
            { year: 1988, description: "Выход 'Алхимика' Пауло Коэльо" },
            { year: 1989, description: "Кен Фоллетт выпускает 'Столпы Земли'" },
            { year: 1990, description: "'Парк Юрского периода' Майкла Крайтона" },
            { year: 1991, description: "Выход 'Мира Софии'" }
        ]
    },
    {
        id: 3,
        title: "Наука",
        startYear: 1992,
        endYear: 1997,
        events: [
            { year: 1992, description: "Открытие первой экзопланеты" },
            { year: 1993, description: "Нобелевская премия за открытие пульсаров" },
            { year: 1995, description: "Открытие топ-кварка" },
            { year: 1996, description: "Клонирование овечки Долли" },
            { year: 1997, description: "Зонд Pathfinder на Марсе" }
        ]
    },
    {
        id: 4,
        title: "Технологии",
        startYear: 1998,
        endYear: 2003,
        events: [
            { year: 1998, description: "Основание компании Google" },
            { year: 1999, description: "Появление Wi-Fi стандарта 802.11b" },
            { year: 2000, description: "Проблема 2000 года (Y2K)" },
            { year: 2001, description: "Запуск Википедии" },
            { year: 2003, description: "Основание Tesla Motors" }
        ]
    },
    {
        id: 5,
        title: "Спорт",
        startYear: 2004,
        endYear: 2009,
        events: [
            { year: 2004, description: "Олимпийские игры в Афинах" },
            { year: 2006, description: "Зимняя Олимпиада в Турине" },
            { year: 2008, description: "Олимпиада в Пекине, рекорд Усэйна Болта" },
            { year: 2009, description: "Рекорд Федерера по титулам Большого шлема" }
        ]
    },
    {
        id: 6,
        title: "Музыка",
        startYear: 2010,
        endYear: 2015,
        events: [
            { year: 2010, description: "Леди Гага выпускает 'The Fame Monster'" },
            { year: 2011, description: "Адель выпускает альбом '21'" },
            { year: 2013, description: "Daft Punk и 'Get Lucky'" },
            { year: 2015, description: "Адель возвращается с '25'" }
        ]
    }
];
