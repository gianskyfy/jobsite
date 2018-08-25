import { ValidatedMethod } from 'meteor/mdg:validated-method';
let UserApplications = new Mongo.Collection('user_applications');
import Moment from 'react-moment';
let Schema = new SimpleSchema({
    job: {type: Object},
});
export const insert = new ValidatedMethod({
    name: 'UserApplications.methods.insert',
    validate: new SimpleSchema(Schema).validator(),
    run(application) {

      if (!Meteor.userId()) {
        throw new Meteor.Error('Jobs.methods.insert.not-logged-in',
          'Must be logged in to post a job.');
      }

      application.user_id = Meteor.userId();
      application.owner = Meteor.user();
      application.created = moment().toDate();

      UserApplications.insert(application);
    }
});