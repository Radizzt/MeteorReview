Template.notifications.helpers({
    notifications: function() {
        return Notifications.find({userId: Meteor.userId(), read: false});
    },
    notificationCount: function(){
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});

Template.notifications.events({
    'click a.ddt': function(){
    console.log("Notification Click!");
    }
})


Template.notificationItem.helpers({
    notificationPostPath: function() {
        return Router.routes.postPage.path({_id: this.postId});
    }
});

Template.notificationItem.events({
    'click a': function() {
        console.log("Notification Click!");
        Notifications.update(this._id, {$set: {read: true}});
    }
});