import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/Base.js';
import '/imports/ui/components';

FlowRouter.route('/', {
  name: 'landing.page',
  action() {
    BlazeLayout.render('base', { main: 'appBody' });
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('base', { main: '404' });
  }
};
