import axios from 'axios';

const url = 'http://localhost:5000/posts';

// API endpoints
export const fetchPosts = () => axios.get(url);
