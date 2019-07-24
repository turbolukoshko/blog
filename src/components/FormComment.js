import React from 'react';

let FormComment = props =>
<div className="form-comment">
  <textarea className="input-comment" placeholder="Add comments" rows="10" cols="45"></textarea>
  <button className="btn-comment">Send comment</button>
</div>

export default FormComment;