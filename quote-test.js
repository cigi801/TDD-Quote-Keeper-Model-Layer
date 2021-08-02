// test/models/quote-test.js
//importing Chai assertion module and Mongoose-related database variables
const {assert} = require('chai');
const {connectAndDrop, disconnect} = require('../../database');
const Quote = require('../../models/quote');

describe('Quote', () => {
  //beforeEach hooks will connect to the database and remove existing data
  beforeEach(connectAndDrop);
  //afterEach hook will disconnect from database
  afterEach(disconnect);
  
describe('#quote', () => {
  it('is a String', () => {
    //Setup
    const quoteAsInt = 1;
    //Exercise
    const citation = new Quote({quote: quoteAsInt});
    //Verify
    assert.strictEqual(citation.quote, quoteAsInt.toString());
  })
})
describe('#attributed', () => {
  it('is a String', () => {
    //Setup
    const attributed = 'Jiminy Cricket';
    //Exercise
    const citation = new Quote({attributed});
    //Verify
    assert.isString(citation.attributed);
    assert.strictEqual(citation.attributed, attributed);
  })
})
describe('source', () => {
  it('is a String', () => {
    //Setup
    const source = 'Pinocchio';
    //Exercise
    const citation = new Quote({source});
    //Verify
    assert.isString(citation.source);
    assert.strictEqual(citation.source, source);
  })
})
})