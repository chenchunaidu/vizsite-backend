import { FIREBASE_DB_SITE, STATUS_CODE_CREATED, STATUS_CODE_SUCCESS } from '../../common/constants';
import { createSite } from './services';

export const getAllSitesController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_SITE).get();
  const resultArray = [];
  result.forEach((doc) => {
    resultArray.push(doc.data());
  });
  res.status(STATUS_CODE_SUCCESS).json(resultArray);
};

export const createSiteController = async (req, res) => {
  const { Site, fileId } = req.body;
  await createSite(req.db, Site, fileId);
  res.status(STATUS_CODE_CREATED).json(Site);
};

export const getSiteByIDController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_SITE).doc(req.params.id).get();
  res.status(STATUS_CODE_SUCCESS).json(result.data());
};

export const updateSiteController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_SITE).doc(req.params.id).set(req.body);
  res.status(STATUS_CODE_SUCCESS).json(result);
};

export const deleteSiteController = async (req, res) => {
  const result = await req.db.collection(FIREBASE_DB_SITE).doc(req.params.id).delete();
  res.status(STATUS_CODE_SUCCESS).json(result);
};
