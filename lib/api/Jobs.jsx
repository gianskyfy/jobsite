import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { createUserObject } from  '/lib/api/Auth';
import { getUtcDate } from './CollectionHelpers';
import Moment from 'react-moment';
let Jobs = new Mongo.Collection('jobs');

let Schema = new SimpleSchema({
    title: {type: String},
    type: {type: Number},
    location: {type: String},
    commission: {type: Number},
    tags: {type: [String]},
    description: {type: String}
});

export const fetch = (condition = {}) => {
    return Jobs.find(condition, { sort: { created : -1 }}).fetch();
};

export const insert = new ValidatedMethod({
    name: 'Jobs.methods.insert',
    validate: new SimpleSchema(Schema).validator(),
    run(job) {

        if (!Meteor.userId()) {
            throw new Meteor.Error('Jobs.methods.insert.not-logged-in',
                'Must be logged in to post a job.');
        }

        job.owner = createUserObject();
        job.created = moment().toDate();

        Jobs.insert(job)
    }
});
