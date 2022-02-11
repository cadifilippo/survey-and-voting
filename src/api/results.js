import { fetchRequest } from './request';

export const getAllResults = async () => {
  const res = await fetchRequest('/results');
  return res;
};

export const getResultsByUser = async (userId) => {
  const res = await fetchRequest(`/results/${userId}`);
  return res;
};
