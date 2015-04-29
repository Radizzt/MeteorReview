/**
 * Created by MAC1 on 15-04-28.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});