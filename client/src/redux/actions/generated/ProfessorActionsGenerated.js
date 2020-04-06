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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ProfessorActionsGenerated.js PLEASE EDIT ../ProfessorActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ProfessorApi from "../../../api/ProfessorApi";

let actionsFunction = {

  //CRUD METHODS

  // Create professor
  createProfessor: function(professor) {
    return function(dispatch) {
      return ProfessorApi
        .createProfessor(professor)
        .then(professor => {
          dispatch(actionsFunction.createProfessorSuccess(professor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createProfessorSuccess: function(professor) {
    return { type: types.CREATE_PROFESSOR_SUCCESS, payload: professor };
  },


  // Delete professor
  deleteProfessor: function(id) {
    return function(dispatch) {
      return ProfessorApi
        .deleteProfessor(id)
        .then(professor => {
          dispatch(actionsFunction.deleteProfessorSuccess(professor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteProfessorSuccess: function(professor) {
    return { type: types.DELETE_PROFESSOR_SUCCESS, payload: professor };
  },


  // Find by _batch
  findBy_batch: function(key) {
    return function(dispatch) {
      return ProfessorApi
        .findBy_batch(key)
        .then(item => {
          dispatch(actionsFunction.findBy_batchSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_batchSuccess: function(item) {
    return { type: types.FINDBY_BATCH_PROFESSOR_SUCCESS, payload: item };
  },


  // Find by _student
  findBy_student: function(key) {
    return function(dispatch) {
      return ProfessorApi
        .findBy_student(key)
        .then(item => {
          dispatch(actionsFunction.findBy_studentSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_studentSuccess: function(item) {
    return { type: types.FINDBY_STUDENT_PROFESSOR_SUCCESS, payload: item };
  },


  // Find by _subject
  findBy_subject: function(key) {
    return function(dispatch) {
      return ProfessorApi
        .findBy_subject(key)
        .then(item => {
          dispatch(actionsFunction.findBy_subjectSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_subjectSuccess: function(item) {
    return { type: types.FINDBY_SUBJECT_PROFESSOR_SUCCESS, payload: item };
  },


  // Get professor
  loadProfessor: function(id) {
    return function(dispatch) {
      return ProfessorApi
        .getOneProfessor(id)
        .then(professor => {
          dispatch(actionsFunction.loadProfessorSuccess(professor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadProfessorSuccess: function(professor) {
    return { type: types.GET_PROFESSOR_SUCCESS, payload: professor };
  },

  // Load  list
  loadProfessorList: function() {
    return function(dispatch) {
      return ProfessorApi
        .getProfessorList()
        .then(list => {
          dispatch(actionsFunction.loadProfessorListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadProfessorListSuccess: function(list) {
    return { type: types.LIST_PROFESSOR_SUCCESS, payload: list };
  },

	
  // Save professor
  saveProfessor: function(professor) {
    return function(dispatch) {
      return ProfessorApi
        .saveProfessor(professor)
        .then(professor => {
          dispatch(actionsFunction.saveProfessorSuccess(professor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveProfessorSuccess: function(professor) {
    return { type: types.UPDATE_PROFESSOR_SUCCESS, payload: professor };
  },


};

export default actionsFunction;