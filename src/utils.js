const convertCompletedToBool = obj => ({
  ...obj,
  completed: !!obj.completed
});

module.exports = {
  convertCompletedToBool
};
