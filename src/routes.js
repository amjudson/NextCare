import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import StudentPage from './components/student/StudentPage';
import ManageStudentPage from './components/student/ManageStudentPage';
import AboutPage from './components/about/AboutPage';
import ManageAccountPage from './components/account/ManageAccountPage';
import AccountPage from './components/account/AccountPage';
import ManageInvoicePage from './components/invoice/ManageInvoicePage';
import InvoicePage from './components/invoice/InvoicePage';
import ViewInvoice from './components/invoice/ViewInvoice';
import PersonPage from './components/person/PersonPage';
import ManagePersonPage from './components/person/ManagePersonPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="students" component={StudentPage} />
    <Route path="student" component={ManageStudentPage} />
    <Route path="student/:id" component={ManageStudentPage} />

    <Route path="accounts" component={AccountPage} />
    <Route path="account" component={ManageAccountPage} />
    <Route path="account/:id" component={ManageAccountPage} />
    <Route path="invoices" component={InvoicePage} />
    <Route path="viewinvoice" component={ViewInvoice} />
    <Route path="invoice" component={ManageInvoicePage} />
    <Route path="invoice/:id" component={ManageInvoicePage} />
    <Route path="persons" component={PersonPage} />
    <Route path="person" component={ManagePersonPage} />
    <Route path="person/:id" component={ManagePersonPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
