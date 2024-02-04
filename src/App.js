import Example from "./components/Essays";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AgreeorDisagree from "./components/AgreeorDisagree";
import AoD from "./components/AdvantagesandDisadvantages";
import Discussion from "./components/Discussion";
import PS from "./components/ProblemSolution"; 
function App() {
  return (
    <div className="">
          <Router>
    <div className="App">
        
        <Routes>
            <Route
                exact
                path="/"
                element={<Example />}
            ></Route>
            
           
            <Route
                exact
                path="/agreeordisagree"
                element={<AgreeorDisagree />}
            ></Route>
            <Route
                exact
                path="/aod"
                element={<AoD />}
            ></Route>
          <Route
                exact
                path="/discussion"
                element={<Discussion />}
            ></Route>
            <Route
                exact
                path="/ps"
                element={<PS />}
            ></Route>
        </Routes>
    </div>
</Router>

    </div>
  );
}

export default App;
