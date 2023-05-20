const errorMap = {
  PASSENGER_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  TRAVEL_NOT_FOUND: 404,
  DRIVER_NOT_FOUND: 404,
  TRAVEL_CONFLICT: 409,
  CAR_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
