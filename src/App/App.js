import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";

import Category from "../pages/category";
import Recipe from "../components/recipe";

function App() {
    return (
        <>
            <Router basename='/food-spa'>
                <Header />

                <main className="container content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contacts' component={Contact}/>
                        <Route path='/category/:name' component={Category}/>
                        <Route path='/meal/:name' component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>

                <Footer />
            </Router>
        </>
    );
}

export default App;
