import matter from 'gray-matter';

export const types = {
  PROJECT: 'projects',
  SKILL: 'skills',
};

export const getProjects = async () => {
  const projects = [];
  let mapper = await fetch('/static/projects/content-map.json');
  mapper = await mapper.json();
  for (let path of mapper) {
    const project = await fetch(`/static/projects/${path}`).then((res) =>
      res.text()
    );
    const parsedMd = matter(project);
    projects.push({ ...parsedMd.data, content: parsedMd.content });
  }

  return projects;
};

export const getSkills = async () => {
  const skills = [];
  let mapper = await fetch('/static/skills/content-map.json');
  mapper = await mapper.json();
  for (let path of mapper) {
    const skill = await fetch(`/static/skills/${path}`).then((res) =>
      res.json()
    );
    skills.push(skill);
  }

  return skills;
};
