import firestore from './firebase';

export const types = {
  PROJECT: 'projects',
  SKILL: 'skills',
};

export const getProjects = async () => {
  const snapshot = await firestore.collection(types.PROJECT).get();
  const projects = snapshot.docs.map((project) => {
    return { _id: project.id, ...project.data() };
  });
  projects.forEach(
    (project) =>
      (project.content = project.content
        .replaceAll('\\n', '\n')
        .replaceAll('\\"', '"')
        .replaceAll('\\\\[', '\\['))
  );
  return projects;
};

export const getSkills = async () => {
  const snapshot = await firestore.collection(types.SKILL).get();
  const skills = snapshot.docs.map((skill) => {
    return { _id: skill.id, ...skill.data() };
  });
  return skills;
};
