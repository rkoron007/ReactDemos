import React from 'react';
import ReactDOM from 'react-dom';
// import CommentList from './components/comments/CommentList';
import Coordinate from './components/coordinates/Coordinate';

if (module.hot) {
  module.hot.accept();
}

// const App = () => {
//   return <div>{<CommentList />}</div>;
// };

ReactDOM.render(<Coordinate />, document.getElementById('root'));
