import React, { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={() => this.props.onClose()}>
        <div className="Modal">
          <img src={this.props.largeUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
