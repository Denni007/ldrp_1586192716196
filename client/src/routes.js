/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e5c1e0652a8e9561a0d2dba
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import BatchEdit from "./pages/BatchEdit";
import BatchList from "./pages/BatchList";
import BranchEdit from "./pages/BranchEdit";
import BranchList from "./pages/BranchList";
import ProfessorEdit from "./pages/ProfessorEdit";
import ProfessorList from "./pages/ProfessorList";
import ResultEdit from "./pages/ResultEdit";
import ResultList from "./pages/ResultList";
import SemesterEdit from "./pages/SemesterEdit";
import SemesterList from "./pages/SemesterList";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";
import SubjectEdit from "./pages/SubjectEdit";
import SubjectList from "./pages/SubjectList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/batchs/:id" component={ BatchEdit }  />
              <PrivateRoute exact path="/batchs" component={ BatchList }  />
              <PrivateRoute exact path="/branchs/:id" component={ BranchEdit }  />
              <PrivateRoute exact path="/branchs" component={ BranchList }  />
              <PrivateRoute exact path="/professors/:id" component={ ProfessorEdit }  />
              <PrivateRoute exact path="/professors" component={ ProfessorList }  />
              <PrivateRoute exact path="/results/:id" component={ ResultEdit }  />
              <PrivateRoute exact path="/results" component={ ResultList }  />
              <PrivateRoute exact path="/semesters/:id" component={ SemesterEdit }  />
              <PrivateRoute exact path="/semesters" component={ SemesterList }  />
              <PrivateRoute exact path="/students/:id" component={ StudentEdit }  />
              <PrivateRoute exact path="/students" component={ StudentList }  />
              <PrivateRoute exact path="/subjects/:id" component={ SubjectEdit }  />
              <PrivateRoute exact path="/subjects" component={ SubjectList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;