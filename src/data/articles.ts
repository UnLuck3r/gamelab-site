export interface Article {
  title: string;
  excerpt: string;
  url: string;
  image?: string;
  category: string;
  date: string;
}

export const articles: Article[] = [
  {
    title: "Как начать разработку игры на Unity",
    excerpt: "Полное руководство для начинающих разработчиков. Узнайте, как установить Unity, создать первый проект и сделать простую игру.",
    url: "https://example.com/unity-guide",
    image: "https://via.placeholder.com/400x250?text=Unity+Guide",
    category: "Разработка",
    date: "15 января 2026",
  },
  {
    title: "Тренды в инди-играх 2026",
    excerpt: "Анализируем самые популярные жанры и стили инди-игр в этом году. Какие игры выбирают игроки и почему?",
    url: "https://example.com/indie-trends",
    image: "https://via.placeholder.com/400x250?text=Indie+Trends",
    category: "Новости",
    date: "12 января 2026",
  },
]
