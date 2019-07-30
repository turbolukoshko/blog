import React from 'react';
import Article from './Article';
import Comments from './Comments';
import CreateComment from './CreateComment';
import { graphqlGetPostThunk, graphqlGetCommentsThunk, graphqlGetSubCommentThunk} from '../App';
import { connect } from 'react-redux';

let Container = props =>
<div className="container">
  {props.children}
</div>

let Main = props =>
<main className="main">
  {props.children}
</main>

class ArticlePage extends React.Component {

  componentDidMount(){
 
    this.props.loadingData(this.props.match.params.id);
    this.props.loadingComments(this.props.match.params.id);
    this.props.loadingSubComment(this.props.match.params.id);

  }

  render(){   console.log(this.props)
    return(
    <>
      <Main>
        <Container>
          <Article post={this.props.post}/>
          <Comments comments={this.props.comments}/>
          <CreateComment postId={this.props.match.params.id}/>
        </Container>
      </Main>
    </>
    );
  }
}

let mapStateToProps = (state) => ({
  post:  state.post && state.post.payload && state.post.payload.post,
  comments : state.comments && state.comments.payload && state.comments.payload.comments
})

let mapDispatchToProps = {
  loadingData: graphqlGetPostThunk,
  loadingComments: graphqlGetCommentsThunk,
  loadingSubComment: graphqlGetSubCommentThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);