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
import ProfessorActions from "../redux/actions/ProfessorActions";
import StudentActions from "../redux/actions/StudentActions";
import BatchActions from "../redux/actions/BatchActions";
import SubjectActions from "../redux/actions/SubjectActions";
import SemesterActions from "../redux/actions/SemesterActions";
import ResultActions from "../redux/actions/ResultActions";

// END IMPORT ACTIONS

/** APIs

* actionsProfessor.create
*	@description CRUD ACTION create
*
* actionsProfessor.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsProfessor.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBy_teacher
*	@description CRUD ACTION findBy_teacher
*	@param Objectid key - Id of model to search for
*
* actionsBatch.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsSubject.list
*	@description CRUD ACTION list
*
* actionsSemester.list
*	@description CRUD ACTION list
*
* actionsResult.findByprofessor
*	@description CRUD ACTION findByprofessor
*	@param Objectid key - Id of model to search for
*
* actionsSubject.findByprofessor
*	@description CRUD ACTION findByprofessor
*	@param Objectid key - Id of model to search for
*

**/

class ProfessorEdit extends Component {
  // Init professor
  constructor(props) {
    super(props);
    this.state = {
      professor: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProfessor.loadProfessor(this.props.match.params.id);
      this.props.actionsStudent.findBy_teacher(this.props.match.params.id);
      this.props.actionsSubject.findByprofessor(this.props.match.params.id);
      this.props.actionsResult.findByprofessor(this.props.match.params.id);
    }
    
    this.props.actionsBatch.loadBatchList();
    this.props.actionsStudent.loadStudentList();
    this.props.actionsSemester.loadSemesterList();
    this.props.actionsSubject.loadSubjectList();
  }

  // Insert props professor in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      professor: props.professor
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.professor._id) {
      this.props.actionsProfessor.saveProfessor(this.state.professor).then(data => {
        this.props.history.push("/professors/");
      });
    } else {
      this.props.actionsProfessor.createProfessor(this.state.professor).then(data => {
        this.props.history.push("/professors/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Professor Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="address"
            label="Address"
            value={this.state.professor.address || ""}
            onChange={Utils.handleChange.bind(this, "professor")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="contact_no"
            label="Contact_no"
            value={this.state.professor.contact_no || ""}
            onChange={Utils.handleChange.bind(this, "professor")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.professor.email || ""}
            onChange={Utils.handleChange.bind(this, "professor")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="f_name"
            label="F_name"
            value={this.state.professor.f_name || ""}
            onChange={Utils.handleChange.bind(this, "professor")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="l_name"
            label="L_name"
            value={this.state.professor.l_name || ""}
            onChange={Utils.handleChange.bind(this, "professor")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _batch with batch */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_batch">
              _batch
            </InputLabel>
            <Select
              value={this.state.professor._batch || ""}
              onChange={Utils.handleChangeSelect.bind(this, "professor")}
              inputProps={{
                id: "_batch",
                name: "_batch"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listBatch && this.props.listBatch.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m _student with student */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_student">
              _student
            </InputLabel>
            <Select
              value={this.state.professor._student || ""}
              onChange={Utils.handleChangeSelect.bind(this, "professor")}
              inputProps={{
                id: "_student",
                name: "_student"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listStudent && this.props.listStudent.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _student with semester */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_student">_student</InputLabel>
            <Select
              multiple
              value={this.state.professor._student || []}
              onChange={Utils.handleChangeSelect.bind(this, "professor")}
              input={<Input id="_student" name="_student" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listSemester && this.props.listSemester.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.professor._student &&
                      this.state.professor._student.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m _subject with subject */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_subject">
              _subject
            </InputLabel>
            <Select
              value={this.state.professor._subject || ""}
              onChange={Utils.handleChangeSelect.bind(this, "professor")}
              inputProps={{
                id: "_subject",
                name: "_subject"
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/professors/">Back to list</Link>

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
    actionsProfessor: bindActionCreators(ProfessorActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsBatch: bindActionCreators(BatchActions, dispatch),
    actionsSubject: bindActionCreators(SubjectActions, dispatch),
    actionsSemester: bindActionCreators(SemesterActions, dispatch),
    actionsResult: bindActionCreators(ResultActions, dispatch),
  };
};

// Validate types
ProfessorEdit.propTypes = { 
  actionsProfessor: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsBatch: PropTypes.object.isRequired,
  actionsSubject: PropTypes.object.isRequired,
  actionsSemester: PropTypes.object.isRequired,
  actionsResult: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    professor: state.ProfessorEditReducer.professor,
    listBatch: state.ProfessorEditReducer.listBatch,
    listStudent: state.ProfessorEditReducer.listStudent,
    listSemester: state.ProfessorEditReducer.listSemester,
    listSubject: state.ProfessorEditReducer.listSubject,
    listStudent: state.ProfessorEditReducer.listStudent,
    listSubject: state.ProfessorEditReducer.listSubject,
    listResult: state.ProfessorEditReducer.listResult
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessorEdit);
