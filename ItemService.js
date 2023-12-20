// ItemService.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

const updateItem = async (id, updatedItem) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedItem);
  return response.data;
};

const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export { getAllItems, createItem, updateItem, deleteItem };