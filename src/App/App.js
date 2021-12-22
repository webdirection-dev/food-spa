import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from "../components/layout/header";
// import Shop from "../components/layout/shop/shop";
import Footer from "../components/layout/footer";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";

function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </main>
            <Footer />
        </>
    );
}

export default App;
