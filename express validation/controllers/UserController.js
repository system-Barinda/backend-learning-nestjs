import data from "../data.js";

export const getAllData = async (req, res) => {
  try {
    const {
      query: { filter, value },
    } = req;

    let result = data;

    if (filter && value) {
      result = data.filter((item) => {
        if (!(filter in item)) return false;

        return String(item[filter])
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const createData = async (req, res) => {
  try {
    const newUser = {
      id: Math.max(...data.map((user) => user.id), 0) + 1,
      ...req.body,
    };

    data.push(newUser);

    return res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};