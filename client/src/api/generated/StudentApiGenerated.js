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
 *  TO CUSTOMIZE APIS IN StudentApiGenerated.js PLEASE EDIT ../StudentApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class StudentApiGenerated {

  static contextUrl = properties.endpoint + "/student";

  // CRUD METHODS

  /**
  * studentService.create
  *   @description CRUD ACTION create
  *
  */
  static createStudent(student) {
    return axios.post(StudentApiGenerated.contextUrl, student )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteStudent(id) {
    return axios.delete(StudentApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBy_result
  *   @description CRUD ACTION findBy_result
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_result(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBy_result/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBy_subject
  *   @description CRUD ACTION findBy_subject
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_subject(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBy_subject/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBy_teacher
  *   @description CRUD ACTION findBy_teacher
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_teacher(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBy_teacher/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBybatch
  *   @description CRUD ACTION findBybatch
  *   @param Objectid key Id of model to search for
  *
  */
  static findBybatch(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBybatch/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBybranch
  *   @description CRUD ACTION findBybranch
  *   @param Objectid key Id of model to search for
  *
  */
  static findBybranch(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBybranch/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.findBysemester
  *   @description CRUD ACTION findBysemester
  *   @param Objectid key Id of model to search for
  *
  */
  static findBysemester(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/findBysemester/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneStudent(id) {
    return axios.get(StudentApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.list
  *   @description CRUD ACTION list
  *
  */
  static getStudentList() {
    return axios.get(StudentApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * studentService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveStudent(student) {
    return axios.post(StudentApiGenerated.contextUrl + "/" + student._id, student )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default StudentApiGenerated;