import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <GlobalProvider>
                <Navbar />

                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/portfolio' component={Portfolio} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </div>
            </GlobalProvider>
        </Router>
    );
}


export default App;
