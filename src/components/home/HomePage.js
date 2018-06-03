import React from 'react';
import { Link } from 'react-router';
import * as actions from '../../actions/accountActions';
class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-6 col-lg-4">
              <div className="card">
                <div className="card-body p-3 d-flex align-items-center">
                  <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3"></i>
                  <div>
                    <div className="text-value-sm text-primary">
                    </div>
                    <div className="text-muted text-uppercase font-weight-bold small">Income</div>
                    <Link to="about" className="btn btn-info">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="card">
                <div className="card-body p-3 d-flex align-items-center">
                  <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3"></i>
                  <div>
                    <div className="text-value-sm text-primary">$1.999,50</div>
                    <div className="text-muted text-uppercase font-weight-bold small">Income</div>
                    <Link to="about" className="btn btn-info">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="card">
                <div className="card-body p-3 d-flex align-items-center">
                  <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3"></i>
                  <div>
                    <div className="text-value-sm text-primary">$1.999,50</div>
                    <div className="text-muted text-uppercase font-weight-bold small">Income</div>
                    <Link to="about" className="btn btn-info">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
