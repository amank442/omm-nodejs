const axios = require("axios");

// Add a Item
const additemService = async (itemdata, userid) => {
  const url = `http://localhost:8080/addItem/${userid}`;

  const headers = { "Content-Type": "application/json" };

  try {
    const response = await axios.post(url, itemdata, { headers });

    return { status: response.data.statuscode, data: response.data };
  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

//Update a item
const updateitemService = async (updateditemdetails) => {
  const url = `http://localhost:8080/updateItem`;

  const headers = { "Content-Type": "application/json" };

  try {
    const response = await axios.patch(url, updateditemdetails, { headers });

    return { status: response.data.statuscode, data: response.data };
  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

//Delete a item
const deleteService = async (itemid) => {
  const url = `http://localhost:8080/deleteItem/${itemid}`;

  try {
    const response = await axios.delete(url);

    return { status: response.data.statuscode, data: response.data };
  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

//GET ITEMS
const getitemsService = async (userid, page, size) => {
  const url = `http://localhost:8080/user/${userid}/items?page=${page}&size=${size}`;

  try {
    const response = await axios.get(url);

    return { status: response.data.statuscode, data: response.data };
  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

module.exports = {
  additemService,
  updateitemService,
  deleteService,
  getitemsService,
};
