// import React, { Component } from 'react';
import '../styles.css';
import React from 'react';

// class LoadMoreButton extends Component {
//   componentDidMount() {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   }

//   render() {
//     return (
//       <button
//         type="button"
//         className="Button"
//         onClick={() => this.props.loadMore()}
//       >
//         Load more
//       </button>
//     );
//   }
// }

// export default LoadMoreButton;

export default function LoadMoreButton(props) {
  React.useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);
  return (
    <button type="button" className="Button" onClick={props.loadMore}>
      Load more
    </button>
  );
}
