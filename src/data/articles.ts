import scenarioImage from "../assets/Как писать сценарий.jpg";
import secondaryBeliefImage from "../assets/Secondary belief.jpg";

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
    excerpt: "В вашей голове целая вселенная? Это круто. Но всё что доступно остальным — небольшое окошко. Никто никогда не поймёт ваш замысел так хорошо как вы сами, сколько бы вы не объясняли, даже наоборот, чем больше вы будете объяснять тем хуже может стать. Потому что для понимания некоторых вещей или их важности во вселенной, нужно знать контекст, а уже для этого, нужно будет объяснить другие вещи и так далее. В связи с этим у вас есть только два пути:",
    url: "https://docs.google.com/document/d/1wurIL3cxRBhrgpx2RsWeXA9MV50MTjCe-TCDGUssoYM",
    image: scenarioImage,
    category: "Разработка",
    date: "15 января 2026",
  },
  {
    title: "Secondary belief — о важности веры игрока в происходящий вымысел",
    excerpt: "Часто говорят: «Игра существует только в голове игрока». А такое смелое заявление, заметит читатель, звучит как типичное утверждение, взятое из воздуха. Замечание не безосновательное: если так подумать, вот она — папка с игрой на компьютере или коробка, если речь идёт о настольной игре; оба варианта вещественны и, значит, существуют сами по себе. Так почему же игра существует именно в голове игрока?",
    url: "https://docs.google.com/document/d/1MFXTvNXvBuXFZBrdUUa9fJZSItF2wM1c",
    image: secondaryBeliefImage,
    category: "Новости",
    date: "12 января 2026",
  },
]
