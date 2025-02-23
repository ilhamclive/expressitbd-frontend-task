import axios from "axios";

export const getProduct = async () => {
  try {
    const response = await axios.get(
      "https://glore-bd-backend-node-mongo.vercel.app/api/product"
    );
    console.log(response)
    return response;
  } catch (error) {
    throw new Error(error.response?.data || error.message || "Server error");
  }
};

export const postProduct = async (data) => {
  try {
    const response = await axios.post(
      "https://interview-task-green.vercel.app/task/stores/create",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    return false;
  }
};
