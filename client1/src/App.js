import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TopNav from './components/navigation/topNav'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerNew from './components/customers/New'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from './components/departments/List'
import DepartmentShow from './components/departments/Show'
import DepartmentNew from './components/departments/New'
import DepartmentEdit from './components/departments/Edit'

import EmployeeList from './components/employees/List'
import EmployeeShow from './components/employees/Show'
import EmployeeNew from './components/employees/New'
import EmployeeEdit from './components/employees/Edit'

import TicketList from './components/tickets/List'
import TicketNew from './components/tickets/New'
import TicketEdit from './components/tickets/Edit'

import Register from './components/users/register'
import Login from './components/users/login'
import Account from './components/users/accounts'
import Logout from './components/users/logout'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <TopNav/>

          <Switch>
            <Route path="/customers" component={CustomerList} exact={true} />
            <Route path="/customers/new" component={CustomerNew} />
            <Route path="/customers/edit/:id" component={CustomerEdit} />
            <Route path="/customers/:id" component={CustomerShow} />


            <Route path="/departments" component={DepartmentList} exact={true} />
            <Route path="/departments/new" component={DepartmentNew} />
            <Route path="/departments/edit/:id" component={DepartmentEdit} />
            <Route path="/departments/:id" component={DepartmentShow} />

            <Route path="/employees" component={EmployeeList} exact={true} />
            <Route path="/employees/new" component={EmployeeNew} />
            <Route path="/employees/edit/:id" component={EmployeeEdit} />
            <Route path="/employees/:id" component={EmployeeShow} />

            <Route path="/tickets" component={TicketList} exact={true} />
            <Route path="/tickets/new" component={TicketNew} />
            <Route path="/tickets/edit/:id" component={TicketEdit} />

            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/account" component={Account} />
            <Route path="/users/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App