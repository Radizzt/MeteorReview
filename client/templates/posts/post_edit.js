Template.postEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }

        var sameLink = Posts.find({url: postProperties.url});
        console.log("Same link: " + sameLink.count());
        if (sameLink.count() > 0){
            alert("Duplicated Links");
            var sameLinkPage = Posts.findOne({url: postProperties.url});
            Router.go('postPage', {_id: sameLinkPage._id});
        }
        else{
        Posts.update(currentPostId, {$set: postProperties}, function(error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('postPage', {_id: currentPostId});
            }
        });
        }
    },

    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});