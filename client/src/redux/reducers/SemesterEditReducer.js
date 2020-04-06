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
import * as types from "../actionTypes";

// Init
const initialState = {
  semester: {}
};

// Reducer
export default function semesterEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SEMESTER_SUCCESS:
      return { ...state, semester: action.payload };
    case types.UPDATE_SEMESTER_SUCCESS:
      return { ...state, semester: action.payload };
    case types.GET_SEMESTER_SUCCESS:
      return { ...state, semester: action.payload };
    case types.FINDBYSEMESTER_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBY_STUDENT_PROFESSOR_SUCCESS:
      return { ...state, listProfessor: action.payload };
    case types.FINDBYSEM_RESULT_SUCCESS:
      return { ...state, listResult: action.payload };
    case types.FINDBYSEMESTER_SUBJECT_SUCCESS:
      return { ...state, listSubject: action.payload };
    case types.LIST_BRANCH_SUCCESS:
      return { ...state, listBranch: action.payload };
    case types.LIST_SUBJECT_SUCCESS:
      return { ...state, listSubject: action.payload };
    case types.LIST_RESULT_SUCCESS:
      return { ...state, listResult: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}