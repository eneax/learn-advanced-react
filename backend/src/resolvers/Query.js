// This is where the db calls are going to go
const Query = {
  dogs(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  },
};

module.exports = Query;
