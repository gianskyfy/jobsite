import { ValidatedMethod } from 'meteor/mdg:validated-method';
let UserApplications = new Mongo.Collection('user_applications');
import { createUserObject } from  '/lib/api/Auth';
import Moment from 'react-moment';

let Schema = new SimpleSchema({
    "job._id": {type: String},
    "job.title": {type: String},
    "job.type": {type: Number},
    "job.location": {type: String},
    "job.commission": {type: Number},
    "job.tags": {type: [String]},
    "job.description": {type: String},
    "job.created": {type: Date},
    "job.owner.user_id": {type: String},
    "job.owner.company_id": {type: String},
    "job.owner.name": {type: String},
    "job.owner.email": {type: String},
    "job.owner.company": {type: String},
    "job.owner.address": {type: String},
});

export const isApplied = (job_id) => {
    return UserApplications.find({"job.job_id" : job_id, "applicants.user_id": Meteor.userId()}).count() > 0;
};

export const fetch = (condition = {}) => {
    return UserApplications.find(condition, { sort: { created : -1 }}).fetch();
};

export const fetchOne = (condition = {}) => {
    return UserApplications.findOne(condition, { sort: { created : -1 }});
};

export const fetchApplications = () => {
    return UserApplications.find({"applicants.user_id": Meteor.userId()}, { sort: { created : -1 }}).fetch();
};

export const cancelApplications = (job_id) => {
    return UserApplications.update({
        _id: job_id
    }, { 
        $pull: { "applicants": {"user_id": Meteor.userId()} }
    });
};

const addApplicant = (uid) => {
    UserApplications.update({
        _id: uid
    }, {
        $push: { "applicants" : createUserObject(1) } 
    });
}

export const insert = new ValidatedMethod({
    name: 'UserApplications.methods.insert',
    validate: new SimpleSchema(Schema).validator(),
    run(application) {

        if (!Meteor.userId()) {
            throw new Meteor.Error('Jobs.methods.insert.not-logged-in',
                'Must be logged in to post a job.');
        }

        var existJob = fetchOne({"job.job_id": application.job._id});

        if(existJob) {
            addApplicant(existJob._id);
        } else {
            application.job.job_id = application.job._id; // set new job_id
            delete application.job._id; // unset _id for job
            application.applicants = [Object];
            application.created = moment().toDate();

            UserApplications.insert(application, function(error, _id) {
                addApplicant(_id);
            });
        }
    }
});