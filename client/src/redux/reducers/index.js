import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import BatchEditReducer from "./BatchEditReducer";
import BatchListReducer from "./BatchListReducer";
import BranchEditReducer from "./BranchEditReducer";
import BranchListReducer from "./BranchListReducer";
import ProfessorEditReducer from "./ProfessorEditReducer";
import ProfessorListReducer from "./ProfessorListReducer";
import ResultEditReducer from "./ResultEditReducer";
import ResultListReducer from "./ResultListReducer";
import SemesterEditReducer from "./SemesterEditReducer";
import SemesterListReducer from "./SemesterListReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import SubjectEditReducer from "./SubjectEditReducer";
import SubjectListReducer from "./SubjectListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	BatchEditReducer,
	BatchListReducer,
	BranchEditReducer,
	BranchListReducer,
	ProfessorEditReducer,
	ProfessorListReducer,
	ResultEditReducer,
	ResultListReducer,
	SemesterEditReducer,
	SemesterListReducer,
	StudentEditReducer,
	StudentListReducer,
	SubjectEditReducer,
	SubjectListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
