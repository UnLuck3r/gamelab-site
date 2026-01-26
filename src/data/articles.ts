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
    title: "Как написать сценарий к игре",
    excerpt: "Полное руководство для начинающих разработчиков. Узнайте, как установить Unity, создать первый проект и сделать простую игру.",
    url: "https://docs.google.com/document/d/1wurIL3cxRBhrgpx2RsWeXA9MV50MTjCe-TCDGUssoYM",
    image: "https://via.placeholder.com/400x250?text=Unity+Guide",
    category: "Разработка",
    date: "15 января 2026",
  },
  {
    title: "Secondary belief — о важности веры игрока в происходящий вымысел",
    excerpt: "Часто говорят: «Игра существует только в в голове игрока». А таСмелое заявление, заметит читатель, — звучит как типичное утверждение взятое из воздуха.",
    url: "https://docs.google.com/document/d/1MFXTvNXvBuXFZBrdUUa9fJZSItF2wM1c",
    image: "https://via.placeholder.com/400x250?text=Secondary+Belief",
    category: "Новости",
    date: "12 января 2026",
  },
]
