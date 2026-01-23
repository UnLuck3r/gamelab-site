import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Games } from "./components/Games";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import "./styles/app.css";


const App: React.FC = () => {
return (
<>
<Header />
<Hero />
<About />
<Games />
<Community />
<Footer />
</>
);
};


export default App;