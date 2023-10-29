import React, { Component } from 'react';

class DropdownMenu extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
    	isOpen: !prevState.isOpen,
    }))
  };


  render() {
    return (
      <>
        <p> Dropdown Menu</p>
        <button type="button" onClick={this.toggle}>
          {this.state.isOpen ? 'Hidden' : 'Open'}
        </button>
        {this.state.isOpen && (
          <div>
            <p>Dropdown open</p>
          </div>
        )}
      </>
    );
  }
}

export default DropdownMenu;
