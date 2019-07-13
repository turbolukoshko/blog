import React from 'react';
import './App.css';
import {Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import createHistory from "history/createBrowserHistory";
import { GraphQLClient} from 'graphql-request';

import HeaderComponent from './components/Header.js';
import HomePage from './components/Home.js';
import ArticlePage from './components/Article.js';
import AboutPage from './components/About.js';
import ContactPage from './components/Contact.js';
import FooterComponent from './components/Footer.js';
import RegisterPage from './components/Register.js';
import SignInPage from './components/SignIn.js';
import PasswordResetPage from './components/PasswordReset.js';
import PrivacyPage from './components/Privacy.js';
import TermPage from './components/Term.js';
import PageNotFound from './components/PageNotFound.js';
import CategoriesPage from './components/Categories.js';

const gql = new GraphQLClient("/graphql", {headers: {} });

let Wrapper = props =>
<div className="wrapper">
  {props.children}
</div>


function App() {
  return (
    <>
    <Wrapper>
      <HeaderComponent/>
      <Router history={createHistory()}>
        <div className="content">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/categories" component={CategoriesPage}/>
            <Route path="/article" component={ArticlePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/sign-in" component={SignInPage}/>
            <Route path="/password-reset" component={PasswordResetPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/privacy" component={PrivacyPage}/>
            <Route path="/term" component={TermPage}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    </Wrapper>
    <FooterComponent/>
    </>
  );
}

export default App;
