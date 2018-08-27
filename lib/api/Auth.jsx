import Company from  '/lib/api/Company';

let Schema = new SimpleSchema({
    company_name: { type: String },
    address1: { type: Number },
    address2: { type: String, optional: true},
    unit_no: { type: Number, optional: true },
    email: {type: String, regEx: /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, optional: true},
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    account_type: { type: Number },
});

export const createUserObject = (Type = 0) => {
    var user = Meteor.user();

    if(Type == 0) {
        return {
            user_id: user._id,
            company_id: user.profile.company.company_id,
            name: user.profile.name,
            email: user.username,
            company: user.profile.company.name,
            address: user.profile.company.address
        };
    }
    else {
        return {
            user_id: user._id,
            name: user.profile.name,
            email: user.username,
        };
    }
}

export const register = new ValidatedMethod({
    name: 'Auth.methods.register',
    validate: new SimpleSchema(Schema).validator(),
    run(auth) {


        Company.insert({
            company_name: auth.company_name,
            address1: auth.address1,
            address2: auth.address2,
            unit_no: auth.unit_no,
        });

        Accounts.createUser({
            username: auth.email,
            email: auth.email,
            password: auth.password,
            profile: {
                firstname: auth.firstname,
                lastname: auth.password,
            },
            account_type: auth.account_type
        }, (err) => {
            if (err) {
                console.log('error loggin in');
            } else {
                this.props.history.push('/login');
            }
        });
    }
});