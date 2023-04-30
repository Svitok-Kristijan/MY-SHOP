const loggerMiddlewate = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);
};
