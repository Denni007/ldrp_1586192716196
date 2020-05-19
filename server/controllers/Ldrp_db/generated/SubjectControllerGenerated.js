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
 *  TO CUSTOMIZE subjectControllerGenerated.js PLEASE EDIT ../subjectController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import SubjectModel from "../../../models/Ldrp_db/SubjectModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import SubjectController from "../SubjectController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/subject`;
    router.post(baseUrl + "", authorize([]), SubjectController.create);
    router.delete(baseUrl + "/:id", authorize([]), SubjectController.delete);
    router.get(baseUrl + "/findBybranch/:key", authorize([]), SubjectController.findBybranch);
    router.get(baseUrl + "/findByprofessor/:key", authorize([]), SubjectController.findByprofessor);
    router.get(baseUrl + "/findBysemester/:key", authorize([]), SubjectController.findBysemester);
    router.get(baseUrl + "/:id", authorize([]), SubjectController.get);
    router.get(baseUrl + "", authorize([]), SubjectController.list);
    router.post(baseUrl + "/:id", authorize([]), SubjectController.update);
  },


  // CRUD METHODS


  /**
  * subjectModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await SubjectModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await SubjectModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.findBybranch
  *   @description CRUD ACTION findBybranch
  *   @param Objectid key Id of model to search for
  *
  */
  findBybranch: async (req, res) => {
    try {
      const result = await SubjectModel.findBybranch(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.findByprofessor
  *   @description CRUD ACTION findByprofessor
  *   @param Objectid key Id of model to search for
  *
  */
  findByprofessor: async (req, res) => {
    try {
      const result = await SubjectModel.findByprofessor(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.findBysemester
  *   @description CRUD ACTION findBysemester
  *   @param Objectid key Id of model to search for
  *
  */
  findBysemester: async (req, res) => {
    try {
      const result = await SubjectModel.findBysemester(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await SubjectModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * subjectModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await SubjectModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * subjectModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await SubjectModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
