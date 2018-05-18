/* global describe, it */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Game from '../src/components/Game';
import Match from '../src/components/Match';
import Buttons from '../src/components/Buttons';

describe('Match tests', () => {
  it('should render match & player picks', done => {
    const props = {
      playerPick: 'rock',
      opponentPick: 'rock'
    };
    const wrapper = shallow(<Match {...props} />);
    expect(wrapper.find('h3').length).to.equal(3);
    expect(wrapper.find('img').length).to.equal(2);
    done();
  });
});

describe('Buttons tests', () => {
  it('should render 3 buttons', done => {
    const wrapper = shallow(<Buttons />);
    expect(wrapper.find('button').length).to.equal(3);
    expect(wrapper.find('img').length).to.equal(3);
    done();
  });
});

// describe('Game tests', () => {
//   it('should render match, player picks, buttons and message on game start', done => {
//     const wrapper = shallow(<Game />);
//     expect(wrapper.find('h3').length).to.equal(3);
//     expect(wrapper.find('img').length).to.equal(3);
//     expect(wrapper.find('h2').length).to.equal(1);
//     expect(wrapper.find('button').length).to.equal(3);
//     done();
//   });
//
//   it('should say \'Draw!\' if both players choose the same option', done => {
//     const wrapper = shallow(<Game />);
//     wrapper.setState({ playerPick: 'rock', opponentPick: 'poo' });
//     expect(wrapper.instance().getWinner()).to.equal('Draw!');
//     // wrapper.setState({ playerPick: 'Paper', opponentPick: 'shit' });
//     // expect(wrapper.instance().getWinner()).to.equal('Draw!');
//     // wrapper.setState({ playerPick: 'Scissors', opponentPick: 'doggy' });
//     // expect(wrapper.instance().getWinner()).to.equal('Draw!');
//     done();
//   });
//
// });
