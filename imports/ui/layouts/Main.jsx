import { createContainer } from 'meteor/react-meteor-data';
import MainPage from '/imports/ui/pages/MainPage.jsx';

export default Main = createContainer(({params}) => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
}, MainPage);
