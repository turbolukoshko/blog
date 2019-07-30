import React from 'react';

class SubComments extends React.Component {
  render() {
    console.log(this.props);
    return(
    <div className="card-comment">
      <p className="user-name">John Doe</p>
      <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptates laborum eligendi distinctio suscipit iure esse magnam possimus obcaecati 
        incidunt ut error praesentium aspernatur, quia vel nam est fugiat, quos alias.
      </p>
    </div>
    );
  }
}

export default SubComments;