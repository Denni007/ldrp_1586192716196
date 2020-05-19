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
 *  TO CUSTOMIZE subjectModelGenerated.js PLEASE EDIT ../subjectModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Ldrp_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * subject
      */
    const subjectSchema = new mongoose.Schema({
      name: {
        type: "String"
      },
      sub_id: {
        type: "String"
      },
      // RELATIONS
      branch: [{
        type: Schema.ObjectId,
        ref: "branch"
      }],
      professor: [{
        type: Schema.ObjectId,
        ref: "professor"
      }],
      semester: [{
        type: Schema.ObjectId,
        ref: "semester"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      _subject: {
        type: Schema.ObjectId,
        ref: "student"
      },
      subject: {
        type: Schema.ObjectId,
        ref: "professor"
      },
      subject: {
        type: Schema.ObjectId,
        ref: "semester"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Subject", subjectSchema));

    return subjectSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * subjectModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * subjectModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * subjectModel.findBybranch
  *   @description CRUD ACTION findBybranch
  *   @param Objectid key Id of model to search for
  *
  */
  async findBybranch(key) {
    return await generatedModel.model.find({ 'branch' : key});
  },
  
  /**
  * subjectModel.findByprofessor
  *   @description CRUD ACTION findByprofessor
  *   @param Objectid key Id of model to search for
  *
  */
  async findByprofessor(key) {
    return await generatedModel.model.find({ 'professor' : key});
  },
  
  /**
  * subjectModel.findBysemester
  *   @description CRUD ACTION findBysemester
  *   @param Objectid key Id of model to search for
  *
  */
  async findBysemester(key) {
    return await generatedModel.model.find({ 'semester' : key});
  },
  
  /**
  * subjectModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * subjectModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * subjectModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
