export interface Game {
  title: string;
  url: string;
  description?: string;
  image?: string;
  itchEmbedId?: string;
}

export const games: Game[] = [
  {
    title: "Skeleton New Life",
    url: "https://un1lucker.itch.io/skeleton-new-life",
    description: "Вы — обычный безымянный скелет и вы этим недовольны. Пройдите приключение чтобы изменить свою жизнь",
    itchEmbedId: "3906537",
  },
  {
    title: "The Forbidden Room",
    url: "https://sirbique.itch.io/the-forbidden-room",
    description: "The Forbidden Room - это психологический хоррор, где вам предстоит сыграть за мальчика, который обнаруживает, что его родители скрывают страшную тайну за закрытой дверью.",
    itchEmbedId: "3488342",
  },
  {
    title: "Limbdoor",
    url: "https://un1lucker.itch.io/limbdoor",
    description: "Вы попали в Лимбо, постарайтесь выбраться!!!",
    itchEmbedId: "3488334",
  },
];
