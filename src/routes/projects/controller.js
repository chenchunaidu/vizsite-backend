/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import {
  FIREBASE_DB_PROJECT, FIREBASE_DB_SITE, STATUS_CODE_CREATED, STATUS_CODE_SUCCESS,
} from '../../common/constants';
import { createProject } from './services';

export const getAllProjectsController = async (req, res) => {
  const { uid } = req.user;
  const result = await req.db.collection(FIREBASE_DB_PROJECT).where('uid', '==', uid).get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status(STATUS_CODE_SUCCESS).json({ data: resultArray });
};

export const createProjectController = async (req, res) => {
  const { db, user, body } = req;
  const Project = body;
  const newProject = await createProject({
    db, user, Project,
  });
  res.status(STATUS_CODE_CREATED).json({ data: newProject });
};

export const getProjectByIdController = async (req, res) => {
  const { user, body } = req;
  const { uid } = req.user;
  let data;
  const projectData = await req.db.collection(FIREBASE_DB_PROJECT).where('siteId', '==', req.params.id).get();
  projectData.forEach(async (doc) => {
    data = doc.data();
  });
  const siteData = await req.db.collection(FIREBASE_DB_SITE).where('_id', '==', req.params.id).get();
  siteData.forEach(async (doc) => {
    res.status(STATUS_CODE_SUCCESS).json({ data, site: doc.data() });
  });
};

export const updateProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const deleteProjectController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_PROJECT).doc(req.params.id).delete();
  res.status(STATUS_CODE_SUCCESS).json({ data: result });
};

export const saveCodeController = async (req, res) => {
  const { user, body } = req;
  await req.db.collection(FIREBASE_DB_SITE).doc(body.siteId).update({ siteObj: body.node });
  res.status(STATUS_CODE_CREATED).json({ data: {} });
};
