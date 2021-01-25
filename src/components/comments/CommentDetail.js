import React from 'react';

const CommentDetail = ({ name, comment, image }) => {
  return (
    <div>
      <div className="comment">
        <div className="content">
          <a href="/">
            <label>
              COMMENT
              <div className="text">{name}</div>
              <img
                style={{ width: '100px', height: '100px' }}
                src={image}
              ></img>
            </label>
            <div className="text">{comment}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
