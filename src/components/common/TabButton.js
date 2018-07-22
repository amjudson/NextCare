import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TabButton extends Component {
    constructor(props){
    super(props);
    
   
    this.toggleTab = this.toggleTab.bind(this);
    }
    
    toggleTab() {
      console.log(this.state.theIcon);
      /*var css = (this.props.showHideSidenav === "aside-menu-hidden") ? "aside-menu-hidden" : "aside-menu-lg-show";
      document.body.classList.toggle(css);*/
    }
  render() {
    const {theIcon, tabContent, ref} = this.props;
    
   
    return (
      <div>
        <a className="nav-link active" data-toggle="tab" ref = {ref} href={tabContent} onClick={this.toggleTab} role="tab">
            <i className={theIcon}></i>
        </a>
      </div>
    );
  }
}
TabButton.propTypes = {
  onClick: PropTypes.func
};

export default TabButton;
