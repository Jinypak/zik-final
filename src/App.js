import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { testDetails } from "./data2";
import Home from "./pages/Home";
// import Intro from "./pages/Intro";
import Intro2 from "./pages/Intro2";
import Test from "./pages/Test";
import TestDetail from "./pages/TestDetail";

function App() {
    const [start, setStart] = useState(true);
    const [testIndex, setTestIndex] = useState(testDetails.id);

    return (
        <div className="app">
            {/* <Intro></Intro> */}
            {start === false ? (
                <Intro2 start={start} setStart={setStart}></Intro2>
            ) : (
                <>
                    <Header></Header>
                    <Footer></Footer>
                </>
            )}

            <Switch>
                {/* <Route path="/" render={()=><Redirect to="home" />} /> */}
                <Route path="/home" component={Home}></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route exact path="/test/detail/:id">
                    <TestDetail
                        testIndex={testIndex}
                        setTestIndex={setTestIndex}
                    ></TestDetail>
                </Route>
                {/* <Route path="/testlist" component={Home}></Route>
                <Route path="/contents" component={Home}></Route>
                <Route path="/about" component={About}></Route> */}
            </Switch>
        </div>
    );
}

export default App;
