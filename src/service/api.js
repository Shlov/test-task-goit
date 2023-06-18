import axios from "axios"

axios.defaults.baseURL = 'https://648ece3175a96b6644444b0b.mockapi.io/api';

export const fetchTweets = async (page, limit) => {
  const response = await axios.get(`/users?page=${page}&limit=${limit}`);
  return response;
};

export const updateSubscriberCount = async (id, nextCount) => {
  const response = axios.patch(`/users/${id}`, {
    followers: nextCount,
  });
  return response
};