import mongoose from 'mongoose';

let state = {
  db: null,
};

exports.connect = function (url, done) {
  if (state.db) {
    return done();
  }
  const promise = mongoose.connect(url, {useMongoClient: true});
  promise.then((db) => {
    state.db = db;
    done();
  })
    .catch((ex) => {
      console.log('Db connection failed');
      done(ex);
    })
};

exports.get = function () {
  return state.db;
};

exports.close = function (done) {
  if (state.db) {
    state.db.close(function (err) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
