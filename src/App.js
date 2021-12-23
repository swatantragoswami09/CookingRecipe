import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.js";
import Create from "./pages/create/Create.js";
import Search from "./pages/search/Search.js";
import Recipe from "./pages/recipe/Recipe.js";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/search" exact component={Search} />
          <Route path="/recipes/:id" exact component={Recipe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
