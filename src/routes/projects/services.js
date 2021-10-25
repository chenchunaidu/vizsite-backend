import { v4 as uuidv4 } from 'uuid';
import { createSite } from '../sites/services';

export const createProject = async ({
  db, user, Project,
}) => {
  const { uid, name: authorName = '', picture = '' } = user || {};
  const { name } = Project || {};
  const projectId = uuidv4();
  const { _id: siteId } = await createSite(db, {
    siteObj: {
      value: '1',
      label: 'root',
      type: 'body',
    },
  });
  const currentTime = new Date().toString();
  const newProject = {
    name,
    siteId,
    _id: projectId,
    uid,
    authorName,
    picture,
    updatedAt: currentTime,
    createdAt: currentTime,
  };
  Project.authorId = await db.collection('projects').doc(projectId).set(newProject);
  return newProject;
};
