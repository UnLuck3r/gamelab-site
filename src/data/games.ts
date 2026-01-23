export interface Game {
title: string;
url: string;
description?: string;
}


export const games: Game[] = [
{
title: "Demo Game 1",
url: "https://itch.io",
description: "Пример игры из GameLab",
},
{
title: "Demo Game 2",
url: "https://itch.io",
description: "Ещё одна игра",
},
];