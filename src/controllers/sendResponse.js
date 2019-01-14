const sendResponse = async (req, res) => {
  const { status, data } = req.body;
  return res.status(status).send({ data });
};

export default sendResponse;
