import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const people = ['mary', 'sam', 'potato'];
const comments = ['nice post', 'like wow!', 'omg'];
const image = 'https://source.unsplash.com/random';

const CommentList = () => (
  <div>
    <ApprovalCard>
      <CommentDetail name={people[0]} comment={comments[0]} image={image} />
    </ApprovalCard>
    <CommentDetail name={people[1]} comment={comments[1]} image={image} />
    <CommentDetail name={people[2]} comment={comments[2]} image={image} />
  </div>
);

export default CommentList;
