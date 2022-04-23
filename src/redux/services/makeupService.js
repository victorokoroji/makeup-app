import axios from 'axios';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation';

const getMakeupsFromServer = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const datas = response.data;
    return datas;
  } catch (error) {
    return error;
  }
};

export default getMakeupsFromServer;
