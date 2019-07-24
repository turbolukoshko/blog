import React, {useState} from 'react';
import './App.css';
import {Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';
import { GraphQLClient } from 'graphql-request'

import HeaderComponent from './components/Header.js';
import HomePage from './components/Home.js';
import ArticlePage from './components/ArticlePage.js';
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

import {promiseReducer} from './components/store/reducers';
import {promiseActionsMaker} from './components/store/actions';
import CreatePost from './components/CreatePost';

const gql = new GraphQLClient("/graphql", {headers: {} });

let Wrapper = props =>
<div className="wrapper">
  {props.children}
</div>

const store = createStore(promiseReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

let graphqlPostThunk = () => promiseActionsMaker('posts',
  gql.request(`
    query posts{
      posts{
        id, title, text, age
      }
  }
  `
));

function graphqlOnePostThunk(id){
  return promiseActionsMaker('post',
  gql.request(`
    query post($postID:Int!){
      post(id:$postID){
        id, title, text, age
      }
    }
    `, (id)
  )
);
}

function graphqlNewPostThunk(title, text){
  return dispatch => {
    dispatch(promiseActionsMaker('newpost', 
      gql.request(`
          mutation createPost($title:String!, $text: String!){
            createPost(title: $title, text: $text){
              title,
              text
            }
          }`
      , {title, text})
    )())
   // console.log('iii?')
    setTimeout(() =>dispatch(graphqlPostThunk()()), 2000)
  }
}

let FormCreatePost = (p) => {
  let [title, setTitle] = useState('')
  let [text, setText]   = useState('')
  return (
      <div>
          <input value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/><br/>
          <textarea placeholder="Text" onChange={e => setText(e.target.value)}>{text}</textarea>
          <button onClick={() => p.onPost(title, text)}>Create Post</button>
      </div>
  )
}

let WrapperForm = connect(null, {onPost: graphqlNewPostThunk})(FormCreatePost);

store.dispatch(graphqlPostThunk()());

function App() {
  return (
    <Provider store={store}>
    <Wrapper>
      <HeaderComponent/>
      <WrapperForm/>
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
            <Route path="/create-post" component={CreatePost}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    </Wrapper>
    <FooterComponent/>
    </Provider>
  );
}

export default App;