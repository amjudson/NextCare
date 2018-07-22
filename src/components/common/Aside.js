import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import TabButton from '../common/TabButton';

class Aside extends Component {
  constructor (props) {
      super(props);
      this.state = {date: this.props.date};
      this.dateChecker = this.dateChecker.bind(this);
    } 
    componentWillReceiveProps(nextProps) {
      console.log(nextProps  +' -- |');
    }
    dateChecker()
    {
      console.log(this.props.date +' --- Date Function Aside');
    }
    onChange()
    {

    }
  render() {
    const {account, allStates, onSave, onDelete, onChange, saving, deleting, errors} = this.props;
    const loading = this.props.loading;
    const theDate = this.props.date;

    console.log(theDate+"--date");
    return (
      <aside className="aside-menu">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
         
         {/*} <TabButton 
            theIcon = "fas fa-utensils"
            tabContent = "#timeline"
            ref="timeline"
          />*/}      
           
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#settings" role="tab">
              <i className="fas fa-bus"></i>
            </a>
          </li>
          <li className = "nav-item">
          <a className="nav-link active" data-toggle="tab" href="#timeline" role="tab">
              <i className="fas fa-utensils"></i>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="timeline" role="tabpanel">
            <div className="list-group list-group-accent">
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Add A Meal
                <br />
                {this.state.date} Is the selected date
              </div>
              <div className = "row">
                <div className = "col-md-12">
                 <div className = "asideForm">
                  <TextInput
                    name="Meal Item"
                    
                    placeholder="Meal Item"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <TextInput
                    name="Meal Item"
                    
                    placeholder="Meal Item"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <TextInput
                    name="Meal Item"
                    
                    placeholder="Meal Item"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <TextInput
                    name="Meal Item"
                    
                    placeholder="Meal Item"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <div className = "formGroup asideSave">
                    <input
                      type="submit"
                      disabled={saving}
                      value={saving ? 'Saving...' : 'Save'}
                      className="btn nextcareBtn col-lg-10 "
                      onClick={onSave} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Tab Panel Two */}
          <div className="tab-pane active" id="timeline" role="tabpanel">
            <div className="list-group list-group-accent">
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Add A Field Trip
                <br />
                {this.state.date} Is the selected date
              </div>
              <div className = "row">
                <div className = "col-md-12">
                 <div className = "asideForm">
                  <TextInput
                    name="Meal Item"
                    
                    placeholder="Destination"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <TextInput
                    name="Meal Item"
                    
                    placeholder="Date"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    <TextInput
                    name="Time"
                    
                    placeholder="Cost"
                    value=""
                    onChange={onChange}
                    addClass="col-md-10 medium-textbox asideField"
                    error="" />
                    
                    <div className = "formGroup asideSave">
                    <input
                      type="submit"
                      disabled={saving}
                      value={saving ? 'Saving...' : 'Save'}
                      className="btn nextcareBtn col-lg-10 "
                      onClick={onSave} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  loading: PropTypes.bool.isRequired,
  date: PropTypes.string
};
function mapStateToProps(state) {
  console.log(state.date + 'mapStateToProps - Aside')
  return {
    date: state.date
  };
}
export default connect(mapStateToProps)(Aside);
