import axios from "axios";

const ck = "ck_5a56b29d57b0fcaf237c71019aa1c179ebfb913d";
const cs = "cs_b66ea90de1fb4f56a8e29908594c65ffb82fdde1";

//PRODUCTS

export const getProducts = async () => {
  const { data } = await axios.get(
    "https://bronsonhome.com/wp-json/wc/v3/products?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};

export const getProductById = async (productId) => {
  const { data } = await axios.get(
    "https://bronsonhome.com/wp-json/wc/v3/products/" +
      productId +
      "?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};

export const getProductVariations = async (productId) => {
  const { data } = await axios.get(
    "https://bronsonhome.com/wp-json/wc/v3/products/" +
      productId +
      "/variations?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};

//ORDERS

export const getOrderById = async (orderId) => {
  const { data } = await axios.get(
    "https://bronsonhome.com/wp-json/wc/v3/orders/" +
      orderId +
      "?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};

export const createOrder = async (body) => {
  const { data } = await axios.post(
    "https://bronsonhome.com/wp-json/wc/v3/orders?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs,
    body,
    { headers: { "content-type": "application/json" } }
  );
  console.log(data);
};

//CUSTOMERS

export const createCustomer = async (body) => {
  const { data } = await axios.post(
    "https://bronsonhome.com/wp-json/wc/v3/customers?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs,
    body,
    { headers: { "content-type": "application/json" } }
  );
  console.log(data);
};

export const getCustomerById = async (customerId) => {
  const { data } = await axios.get(
    "https://bronsonhome.com/wp-json/wc/v3/customers/" +
      customerId +
      "?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};

export const updateCustomerById = async (customerId, body) => {
  const { data } = await axios.put(
    "https://bronsonhome.com/wp-json/wc/v3/customers/" +
      customerId +
      "?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs,
    body,
    { headers: { "content-type": "application/json" } }
  );
  console.log(data);
};

export const deleteCustomerById = async (customerId) => {
  const { data } = await axios.delete(
    "https://bronsonhome.com/wp-json/wc/v3/customers/" +
      customerId +
      "?force=true?consumer_key=" +
      ck +
      "consumer_secret=" +
      cs
  );
  console.log(data);
};
