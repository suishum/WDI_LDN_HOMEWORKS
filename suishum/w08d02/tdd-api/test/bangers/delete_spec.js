/* global api, describe, it, expect, beforeEach */

const Banger = require('../../models/banger');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const bangerData = [{
  name: 'Life',
  artist: 'Des\'ree',
  releaseDate: '08-06-1998',
  genre: 'Pop',
  album: 'Supernatural'
}, {
  name: 'Would I Lie To You',
  artist: 'Charles and Eddie',
  releaseDate: '04-08-1992',
  genre: 'Pop',
  album: 'Duophonic'
}];

const userData = { username: 'test', email: 'test@test.com', password: 'test', passwordConfirmation: 'test' };
let token;
let banger;

describe('DELETE /bangers/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Banger.remove({})
    ])
      .then(() => Promise.props({
        bangers: Banger.create(bangerData),
        user: User.create(userData)
      }))
      .then(data => {
        banger = data.bangers[0];
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' });
      })
      .then(done);
  });

  it('should return a 401 response', done => {
    api
      .delete(`/api/bangers/${banger._id}`)
      .expect(401, done);
  });

  it('should return a 204 response with a token', done => {
    api
      .delete(`/api/bangers/${banger._id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204, done);
  });

  it('should return no data', done => {
    api
      .delete(`/api/bangers/${banger._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.empty;
        done();
      });
  });
});
