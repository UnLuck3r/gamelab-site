import React from "react";
import "../styles/app.css";
import gameJamImage from "../assets/GameLab GameJam 2026.jpeg";
import tabletopJamImage from "../assets/TableTop Jam.jpeg";
import alatooJamImage from "../assets/Alatoo Jam.png";

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="container">
      <h3 className="section-title">Наши Хакатоны</h3>

      <div className="hackathons-grid">
        <article className="card glass hackathon-card">
          <div className="article-image">
            <img src={gameJamImage} alt="GameLab GameJam 2026" />
          </div>
          <h4 className="article-title">GameLab GameJam 2026</h4>
          <p className="article-excerpt">
            Вот закончились два дня креатива, бессонных ночей, дедлайнов и
            невероятной атмосферы 👾🔥
            <br /><br />
            GameLab GameJam 2026 собрал талантливых разработчиков, дизайнеров,
            художников и всех, кто любит создавать игры. За 48 часов участники
            превратили свои идеи в полноценные игровые проекты, а финальный
            meetup стал местом, где мы смогли увидеть результаты их огромной
            работы 🎮
            <br /><br />
            Спасибо каждому, кто стал частью этого события. Именно вы создаёте
            и развиваете геймдев-комьюнити Кыргызстана ❤️
          </p>
        </article>

        <article className="card glass hackathon-card">
          <div className="article-image">
            <img src={tabletopJamImage} alt="GameLab Tabletop Jam 2025" />
          </div>
          <h4 className="article-title">GameLab Tabletop Jam 2025</h4>
          <p className="article-excerpt">
            GameLab Tabletop Jam 2025 — это двухдневное мероприятие по созданию
            прототипа настольной игры в оффлайн-формате.
            <br /><br />
            По окончании джема игры оценит жюри. Лучшие получат подарки, а также
            один секретный подарок от Aikur Games 👀
          </p>
        </article>

        <article className="card glass hackathon-card">
          <div className="article-image">
            <img src={alatooJamImage} alt="Ala-Too Game Jam 2025" />
          </div>
          <h4 className="article-title">Ala-Too Game Jam 2025: первый день уже позади!</h4>
          <p className="article-excerpt">
            Сегодня прошёл первый день Ala-Too Game Jam 2025. Участники
            познакомились, сформировали команды и начали работать над идеями
            после оглашения темы. Атмосфера была тёплой и продуктивной — код,
            дизайн и обсуждения концептов в полном разгаре.
            <br /><br />
            Мы также провели розыгрыши на еду, чтобы поддержать всех участников.
            В итоге день прошёл отлично, и все настроены на продолжение.
            <br /><br />
            Завтра — GD.Talks: встреча с профессионалами геймдева, полезные
            советы и практические рекомендации. А впереди ещё два дня джема и
            шанс выиграть призы!
            <br /><br />
            📍 Международный Университет Ала-Тоо, Блок B (Анкара 1/8)
          </p>
        </article>
      </div>
    </section>
  );
};