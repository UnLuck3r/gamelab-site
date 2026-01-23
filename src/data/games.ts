export interface Game {
title: string;
url: string;
description?: string;
}


export const games: Game[] = [
{
title: "Demo Game 1",
url: "https://itch.io",
description: "Инди-игра от GameLab",
},
{
title: "Demo Game 2",
url: "https://itch.io",
description: "Экспериментальный проект",
},
];