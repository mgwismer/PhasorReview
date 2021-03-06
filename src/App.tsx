import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FrontPage } from './components/front-page/front-page';
import QuizFrontPage from './components/quiz-page/quiz-front-page';
import { TutorialFrontPage } from './components/tutorial-page/tutorial-front-page';
import ElementReview from './components/ElementReview/Components/element-review';
import { pageLinkTypes } from './components/front-page/front-page-data-type';
import { rootReducer, InitialState } from './redux/reducer';
import { ImpedanceReview } from './components/ImpedanceTutorial/impedance-review';
import { ImpedanceTutorialPage } from './components/ImpedanceTutorial/impedance-tutorial-wrapper';
import './App.scss';

export const store = createStore(rootReducer, InitialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path={'/'} component={FrontPage} />
          <Route path={pageLinkTypes.FRONTPAGE} component={FrontPage} />
          <Route exact path={pageLinkTypes.TUTORIAL} component={TutorialFrontPage} />
          <Route exact path={pageLinkTypes.QUIZ} component={QuizFrontPage} />
          <Route path={pageLinkTypes.REVIEW} component={ElementReview} />
          <Route path={pageLinkTypes.IMPEDANCEREVIEW} component={ImpedanceReview} />
          <Route path={pageLinkTypes.IMPEDANCETUT} component={ImpedanceTutorialPage} />
        </Router>
        <div className='App-footer'>
          created by:
          <br/>
          Mary T. Wycheck
          <br/>
          Margaret G. Wismer (margaretgwismer@gmail.com)
          <br/>
          Created: Summer 1999/Updated: Spring 2020
        </div>
      </div>
    </Provider>
  );
}

export default App;
