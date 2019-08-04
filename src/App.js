import React from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';
import { GraphQLClient } from 'graphql-request';

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

export function graphqlNewPostThunk(title, text){
  // console.log('iii');
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
        .then(() => dispatch(graphqlPostThunk()()))
    )())
  //  console.log('iii?')
    // setTimeout(() =>dispatch(graphqlPostThunk()()), 2000)
  }
}

export function graphqlCreateCommentThunk(postID, text){
  return dispatch => {
    dispatch(promiseActionsMaker('newcomment',
      gql.request(`
      mutation createComment($postID:Int!, $text:String!) {
        createComment(postID: $postID, text: $text) {     
            text
        }
      }`, {postID, text})
      .then(() => dispatch(graphqlGetCommentsThunk(postID)))
    )())
  } 
}

export function graphqlGetPostThunk(postID = 1){
  return promiseActionsMaker('post', 
    gql.request(`
      query post($postID:Int!){
        post(id:$postID){
          id, title, text, age
        }
      }`, {postID}
    )
  )();
}

export function graphqlGetCommentsThunk(postID){
  return promiseActionsMaker('comments', 
    gql.request(`
      query getComments($postID: Int!){
        comments(id:$postID){
          id,text
        }
      }`, {postID}
    )
  )();
} 

export function graphqlGetSubCommentThunk(commentId) {
  return promiseActionsMaker('subcomment',
    gql.request(`
    query getSubComments($commentId: Int!){
      subComments(id:$commentId){
        id,text
      }
    }`, {commentId}
    )
  )();
} 

store.dispatch(graphqlPostThunk()());

function App() {
  return (
    <Provider store={store}>
    <Wrapper>
      <HeaderComponent/>
      <Router history={createHistory()}>
        <div className="content">
          <Switch>
            <Route path="/" component={HomePage} exact/>            
            <Route path="/article/:id" component={ArticlePage}/>
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