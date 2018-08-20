import { ValidatedMethod } from 'meteor/mdg:validated-method';
let Jobs = new Mongo.Collection('jobs');

let Schema = new SimpleSchema({
    Title: {type: String},
    Type: {type: Number},
    Commission: {type: Number},
    Tags: {type: [String]},
    Description: {type: String}
});

export const fetch = () => {
    return Jobs.find().fetch();
};

export const insert = new ValidatedMethod({
    name: 'Jobs.methods.insert',
    validate: new SimpleSchema(Schema).validator(),
    run(job) {
      // In here, we can be sure that the newInvoice argument is
      // validated.
  
      if (!this.userId) {
        throw new Meteor.Error('Jobs.methods.insert.not-logged-in',
          'Must be logged in to post a job.');
      }
  
      Jobs.insert(job)
    }
});