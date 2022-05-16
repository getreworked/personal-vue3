import axios from 'axios';

export function getWork () {
  return axios.get('/db/work.json');
}

export function getArticles () {
  return axios.get('/db/articles.json');
}

export function getSkillsets () {
  return axios.get('/db/skillsets.json');
}

export function getJobs () {
  return axios.get('/db/jobs.json');
}