import { v4 as uuidv4 } from 'uuid';

export const createSite = async (db, Site) => {
  const siteId = uuidv4();
  Site._id = siteId;
  await db.collection('sites').doc(siteId).set(Site);
  return Site;
};
