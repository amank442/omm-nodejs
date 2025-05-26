const axios = require("axios");

//create a bill
const createbillService = async (userid, billdetails) => {
  const url = `http://localhost:8080/createBill/${userid}`;

  const headers = { "Content-Type": "application/json" };

  try {
    const response = await axios.post(url, billdetails, { headers });
    
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

//get monthly sales report
const getmonthlytransactionService = async (
  userid,
  month,
  year,
  page,
  size
) => {
  const url = `http://localhost:8080/monthly-sales-report/user/${userid}?month=${month}&year=${year}&page=${page}&size=${size}`;

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

module.exports = { createbillService, getmonthlytransactionService };
