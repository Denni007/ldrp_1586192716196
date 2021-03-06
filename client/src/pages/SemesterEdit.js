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
import SemesterActions from "../redux/actions/SemesterActions";
import StudentActions from "../redux/actions/StudentActions";
import ProfessorActions from "../redux/actions/ProfessorActions";
import ResultActions from "../redux/actions/ResultActions";
import SubjectActions from "../redux/actions/SubjectActions";
import BranchActions from "../redux/actions/BranchActions";

// END IMPORT ACTIONS

/** APIs

* actionsSemester.create
*	@description CRUD ACTION create
*
* actionsSemester.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSemester.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBysemester
*	@description CRUD ACTION findBysemester
*	@param Objectid key - Id of model to search for
*
* actionsProfessor.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key - Id of model to search for
*
* actionsResult.findBysem
*	@description CRUD ACTION findBysem
*	@param Objectid key - Id of model to search for
*
* actionsSubject.findBysemester
*	@description CRUD ACTION findBysemester
*	@param Objectid key - Id of model to search for
*
* actionsBranch.list
*	@description CRUD ACTION list
*
* actionsSubject.list
*	@description CRUD ACTION list
*
* actionsResult.list
*	@description CRUD ACTION list
*

**/

class SemesterEdit extends Component {
  // Init semester
  constructor(props) {
    super(props);
    this.state = {
      semester: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSemester.loadSemester(this.props.match.params.id);
      this.props.actionsProfessor.findBy_student(this.props.match.params.id);
      this.props.actionsResult.findBysem(this.props.match.params.id);
      this.props.actionsSubject.findBysemester(this.props.match.params.id);
      this.props.actionsStudent.findBysemester(this.props.match.params.id);
    }
    
    this.props.actionsBranch.loadBranchList();
    this.props.actionsResult.loadResultList();
    this.props.actionsSubject.loadSubjectList();
  }

  // Insert props semester in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      semester: props.semester
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.semester._id) {
      this.props.actionsSemester.saveSemester(this.state.semester).then(data => {
        this.props.history.push("/semesters/");
      });
    } else {
      this.props.actionsSemester.createSemester(this.state.semester).then(data => {
        this.props.history.push("/semesters/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Semester Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="semester"
            label="Semester"
            value={this.state.semester.semester || ""}
            onChange={Utils.handleChange.bind(this, "semester")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m branch with branch */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="branch">
              Branch
            </InputLabel>
            <Select
              value={this.state.semester.branch || ""}
              onChange={Utils.handleChangeSelect.bind(this, "semester")}
              inputProps={{
                id: "branch",
                name: "branch"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listBranch && this.props.listBranch.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m result with result */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="result">Result</InputLabel>
            <Select
              multiple
              value={this.state.semester.result || []}
              onChange={Utils.handleChangeSelect.bind(this, "semester")}
              input={<Input id="result" name="result" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listResult && this.props.listResult.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.semester.result &&
                      this.state.semester.result.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m subject with subject */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="subject">
              Subject
            </InputLabel>
            <Select
              value={this.state.semester.subject || ""}
              onChange={Utils.handleChangeSelect.bind(this, "semester")}
              inputProps={{
                id: "subject",
                name: "subject"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listSubject && this.props.listSubject.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with professor */}
          
          <h3>Professor</h3>
          {(!this.props.listProfessor || this.props.listProfessor.length === 0) && 
            <div>No Professor associated</div>
          }
          {this.props.listProfessor &&
            this.props.listProfessor.map((item, i) => {
              return (
                <Link to={"/professors/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with result */}
          
          <h3>Result</h3>
          {(!this.props.listResult || this.props.listResult.length === 0) && 
            <div>No Result associated</div>
          }
          {this.props.listResult &&
            this.props.listResult.map((item, i) => {
              return (
                <Link to={"/results/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with subject */}
          
          <h3>Subject</h3>
          {(!this.props.listSubject || this.props.listSubject.length === 0) && 
            <div>No Subject associated</div>
          }
          {this.props.listSubject &&
            this.props.listSubject.map((item, i) => {
              return (
                <Link to={"/subjects/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/semesters/">Back to list</Link>

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
    actionsSemester: bindActionCreators(SemesterActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsProfessor: bindActionCreators(ProfessorActions, dispatch),
    actionsResult: bindActionCreators(ResultActions, dispatch),
    actionsSubject: bindActionCreators(SubjectActions, dispatch),
    actionsBranch: bindActionCreators(BranchActions, dispatch),
  };
};

// Validate types
SemesterEdit.propTypes = { 
  actionsSemester: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsProfessor: PropTypes.object.isRequired,
  actionsResult: PropTypes.object.isRequired,
  actionsSubject: PropTypes.object.isRequired,
  actionsBranch: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    semester: state.SemesterEditReducer.semester,
    listBranch: state.SemesterEditReducer.listBranch,
    listResult: state.SemesterEditReducer.listResult,
    listSubject: state.SemesterEditReducer.listSubject,
    listProfessor: state.SemesterEditReducer.listProfessor,
    listResult: state.SemesterEditReducer.listResult,
    listSubject: state.SemesterEditReducer.listSubject,
    listStudent: state.SemesterEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SemesterEdit);
