import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './Navigation';
import Home from './Components/Home';
import Fashion from './Components/Fashion';
import AdidasXNike from './Components/AdidasXNike'
import Smiley from './Components/Smiley';
import OneSixe from './Components/OneSixe';
import Gold from './Components/Gold';
import FineArt from './Components/FineArt';
import Experimental from './Components/Experimental';
import About from './Components/About';
import Contact from './Components/Contact';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './Timelines'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Route render={({ location }) => {
            const { pathname, key } = location;
            window.scrollTo(0, 0);
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 0 }}
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/fashion" exact component={Fashion} />
                    <Route path="/fashion/adidasnike" exact component={AdidasXNike} />
                    <Route path="/fashion/smiley" exact component={Smiley} />
                    <Route path="/fashion/onesixe" exact component={OneSixe} />
                    <Route path="/fashion/gold" exact component={Gold} />
                    <Route path="/fineart" exact component={FineArt} />
                    <Route path="/experimental" exact component={Experimental} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}
          />
        </div>
      </Router>
    )
  }
}
