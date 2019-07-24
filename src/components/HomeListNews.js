import React, {Component} from 'react';

class HomeListNews extends Component {
  
  state = {
      isOpen: false
    }

  render() {
    const articleBody = this.state.isOpen && <span className="date-news">01.01.1970</span>;
    const articleLink = this.state.isOpen && <a href="/article" className="read-news">Read more</a>
    return(
      <>
    <ul className="list-news">
      <li className="item-news">
          <div className="content-news">
            <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
            <button onClick={this.handleClink}>{this.state.isOpen ?'Close' : 'Open' }</button>
            <br/>
            {articleBody}
            {articleLink}
          </div>
      </li>
    </ul>
    {this.props.children}
    </>
    )
  }
  handleClink = () => {
    this.setState( {
      isOpen: !this.state.isOpen
    })
  };
}

// let HomeListNews = props =>
// <>
//   <ul className="list-news">
//     <li className="item-news">
//         <div className="content-news">
//           <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
//           <span className="date-news">01.01.1970</span>
//           <a href="/article" className="read-news">Read more</a>
//         </div>
//     </li>
//     <li className="item-news">
//         <div className="content-news">
//           <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
//           <span className="date-news">01.01.1970</span>
//           <a href="/article" className="read-news">Read more</a>
//         </div>
//     </li>
//     <li className="item-news">
//         <div className="content-news">
//           <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
//           <span className="date-news">01.01.1970</span>
//           <a href="/article" className="read-news">Read more</a>
//         </div>
//     </li>
//     <li className="item-news">
//         <div className="content-news">
//           <p className="title-news">You Can Now Get Your Whole Genome Sequenced for Less Than an iPhone</p>
//           <span className="date-news">01.01.1970</span>
//           <a href="/article" className="read-news">Read more</a>
//         </div>
//     </li>
//   </ul>
//   </>

export default HomeListNews