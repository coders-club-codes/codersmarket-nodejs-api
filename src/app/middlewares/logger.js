export default (req, res, next) => {
  const { url, method, body, query, params } = req;

  console.info(`\n${method}:${url} with`, { body, query, params });
  next();
};
