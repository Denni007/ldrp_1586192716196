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
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import ResultActions from "../redux/actions/ResultActions";
import StudentActions from "../redux/actions/StudentActions";
import BranchActions from "../redux/actions/BranchActions";
import SemesterActions from "../redux/actions/SemesterActions";
import ProfessorActions from "../redux/actions/ProfessorActions";

// END IMPORT ACTIONS

/** APIs

* actionsResult.create
*	@description CRUD ACTION create
*
* actionsResult.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsResult.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBy_result
*	@description CRUD ACTION findBy_result
*	@param Objectid key - Id of model to search for
*
* actionsBranch.list
*	@description CRUD ACTION list
*
* actionsSemester.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsProfessor.list
*	@description CRUD ACTION list
*
* actionsSemester.findByresult
*	@description CRUD ACTION findByresult
*	@param Objectid key - Id of model to search for
*

**/

class ResultEdit extends Component {
  // Init result
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsResult.loadResult(this.props.match.params.id);
      this.props.actionsStudent.findBy_result(this.props.match.params.id);
      this.props.actionsSemester.findByresult(this.props.match.params.id);
    }
    
    this.props.actionsBranch.loadBranchList();
    this.props.actionsProfessor.loadProfessorList();
    this.props.actionsSemester.loadSemesterList();
    this.props.actionsStudent.loadStudentList();
  }

  // Insert props result in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      result: props.result
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.result._id) {
      this.props.actionsResult.saveResult(this.state.result).then(data => {
        this.props.history.push("/results/");
      });
    } else {
      this.props.actionsResult.createResult(this.state.result).then(data => {
        this.props.history.push("/results/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Result Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="mark"
            label="Mark"
            value={this.state.result.mark || ""}
            onChange={Utils.handleChange.bind(this, "result")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m branch with branch */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="branch">Branch</InputLabel>
            <Select
              multiple
              value={this.state.result.branch || []}
              onChange={Utils.handleChangeSelect.bind(this, "result")}
              input={<Input id="branch" name="branch" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listBranch && this.props.listBranch.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.result.branch &&
                      this.state.result.branch.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m professor with professor */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="professor">
              Professor
            </InputLabel>
            <Select
              value={this.state.result.professor || ""}
              onChange={Utils.handleChangeSelect.bind(this, "result")}
              inputProps={{
                id: "professor",
                name: "professor"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listProfessor && this.props.listProfessor.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m sem with semester */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="sem">
              Sem
            </InputLabel>
            <Select
              value={this.state.result.sem || ""}
              onChange={Utils.handleChangeSelect.bind(this, "result")}
              inputProps={{
                id: "sem",
                name: "sem"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listSemester && this.props.listSemester.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m student with student */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="student">Student</InputLabel>
            <Select
              multiple
              value={this.state.result.student || []}
              onChange={Utils.handleChangeSelect.bind(this, "result")}
              input={<Input id="student" name="student" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listStudent && this.props.listStudent.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.result.student &&
                      this.state.result.student.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with student */}
          
          <h3>Student</h3>
          {(!this.props.listStudent || this.props.listStudent.length === 0) && 
            <div>No Student associated</div>
          }
          {this.props.listStudent &&
            this.props.listStudent.map((item, i) => {
              return (
                <Link to={"/students/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with semester */}
          
          <h3>Semester</h3>
          {(!this.props.listSemester || this.props.listSemester.length === 0) && 
            <div>No Semester associated</div>
          }
          {this.props.listSemester &&
            this.props.listSemester.map((item, i) => {
              return (
                <Link to={"/semesters/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/results/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsResult: bindActionCreators(ResultActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsBranch: bindActionCreators(BranchActions, dispatch),
    actionsSemester: bindActionCreators(SemesterActions, dispatch),
    actionsProfessor: bindActionCreators(ProfessorActions, dispatch),
  };
};

// Validate types
ResultEdit.propTypes = { 
  actionsResult: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsBranch: PropTypes.object.isRequired,
  actionsSemester: PropTypes.object.isRequired,
  actionsProfessor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    result: state.ResultEditReducer.result,
    listBranch: state.ResultEditReducer.listBranch,
    listProfessor: state.ResultEditReducer.listProfessor,
    listSemester: state.ResultEditReducer.listSemester,
    listStudent: state.ResultEditReducer.listStudent,
    listStudent: state.ResultEditReducer.listStudent,
    listSemester: state.ResultEditReducer.listSemester
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultEdit);
