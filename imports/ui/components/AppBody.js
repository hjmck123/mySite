import { Template } from 'meteor/templating';
import './AppBody.html';

Template.appBody.helpers({
  getContent() {
    return 'landing';
  }
});
