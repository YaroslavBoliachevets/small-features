import React, { Component } from 'react';
import './ColorPicker.styled.css';

class ColorPicker extends Component {
  static defaultProps = {
    ivitialIndx: 0,
  };

  state = {
    activeOptionIndx: this.props.ivitialIndx,
  };

  setActiveIndx = (index) => {
	this.setState({
		activeOptionIndx:index,
	})
  }

  makeOptionClasses = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIndx)
      optionClasses.push('ColorPicker__option--active');

	  return optionClasses.join(' ');
  };

  render() {
	const {activeOptionIndx} = this.state; 
	const {colorPickerOptions} = this.props;
	const {label} = colorPickerOptions[activeOptionIndx];
	
    return (
      <>
        <div className="ColorPicker">
          <h2 className="ColorPicker__title">Color Picker</h2>
          <p>Выбран цвет: {label}</p>
          <div>
            {colorPickerOptions.map(({ label, color }, index) => (
              <button
                key={label}
                className={this.makeOptionClasses(index)}
                style={{ backgroundColor: color }}
                onClick={()=> {this.setActiveIndx(index)}}
              ></button>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ColorPicker;
