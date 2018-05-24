module.exports = {
  ...require('./auth'),
  ...require('./poll'),
};

module.exports.error = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong.',
    },
  });
};
