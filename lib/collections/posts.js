/**
 * Created by MAC1 on 15-04-29.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !! userId;
    }
});
