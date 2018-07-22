import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/accountActions';
import Calendar from 'react-calendar';


class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            clicked: false
        };

        console.log(this.props.date + ' Date In Function')
    }
    calendarChange(value) {
        console.log(value + '-----');
    }
    onChange() {

    }
    dayClicked(value) {
        this.setState({
            clicked: true,
            date: value
        });

        return this.setState({ date: this.state.date });
    }
    /*toggles aside menu*/
    toggleMenu() {
        var css = (this.props.showHideSidenav === "aside-menu-hidden") ? "aside-menu-hidden" : "aside-menu-lg-show";
        document.body.classList.toggle(css);
    }
    getTileContent(theDate) {
        var tileContent = '';
        if(({ date }) => date.getDate() === 2)
        {
            tileContent = 
            <ul>
                <li>Hot Dogs</li>
                <li>French Fries</li>
                <li>Pickle</li>
                <li>Milk or Juice</li>
            </ul>
        }
        var myDate = (({ date, view }) => view === 'month' && date.getDate());
        
        if(myDate = 2)
        {
            tileContent = 
            <ul>
                <li>Hot Dogs</li>
                <li>French Fries</li>
                <li>Pickle</li>
                <li>Milk or Juice</li>
            </ul>
        }
        tileContent = ({ date, view }) => view === 'month' && date.getDate() === 10 ?  
        <ul>
            <li>Hot Dogs</li>
            <li>French Fries</li>
            <li>Pickle</li>
            <li>Milk or Juice</li>
        </ul> : <div></div>;
       

        return tileContent;
    }
    render() {
        const date = this.props.date;
        console.log(date);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="pageHeaders">
                        <div className="col-md-4">
                            <h2>Calendar</h2>
                        </div>
                        <div className="col-md-8 text-right">
                            <input
                                type="submit"
                                value="Add Meal"
                                className="btn nextcareBtn"
                                onClick={""}
                            />
                        </div>
                    </div>
                    <div className="row formHolder">
                        <div className="col-md-12">
                            {/*onActiveDateChange - Triggered by month or year change*/}
                            <Calendar
                                value={this.state.date}
                                onChange={(value) => this.calendarChange(value)}
                                onActiveDateChange={({ activeStartDate, view }) => console.log('Changed view to: ', activeStartDate, view)}
                                onClickDay={(value) => this.dayClicked(value)}
                                tileContent={this.getTileContent( date )}
                                tileClassName={({ date, view }) => view === 'month' && date.getDay() === 0 || date.getDay() === 6 ? 'tileClass' : null}
                            />

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
CalendarPage.propTypes = {
    date: PropTypes.object
};

function mapStateToProps(state) {
    let date = {
        date: 0
    }
    console.log(state.date + ' -- mapStateToProps - Calendar')
    return {
        date: date
    };

}

export default connect(mapStateToProps)(CalendarPage);
