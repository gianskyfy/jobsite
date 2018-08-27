import { ValidatedMethod } from 'meteor/mdg:validated-method';
const Company = new Mongo.Collection('companies');

let Schema = new SimpleSchema({
    CompanyName: {type: String},
    Address1: {type: Number},
    Address2: {type: String},
    UnitNo: {type: Number},
    Tags: {type: [String]},
});

export const fetch = (condition = {}, sort = {}) => {
    return Company.find(condition, { sort: sort}).fetch();
};

export const insert = new ValidatedMethod({
    name: 'Company.methods.insert',
    validate: new SimpleSchema(Schema).validator(),
    run(company) {
      Company.insert(company)
    }
});