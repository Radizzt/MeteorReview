Template.commentSubmit.onCreated(function() {
    Session.set('commentSubmitErrors', {});
});

Template.commentSubmit.helpers({
    errorMessage: function(field) {
        return Session.get('commentSubmitErrors')[field];
    },
    errorClass: function (field) {
        return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
    },
    phone: function(){
        return Meteor.isCordova? true : false;
    }
});

Template.commentSubmit.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            postId: template.data._id
        };

        var errors = {};
        if (! comment.body) {
            errors.body = "Please write some content";
            throwError("Comment Section empty!");
            return Session.set('commentSubmitErrors', errors);
        }

        Meteor.call('commentInsert', comment, function(error, commentId) {
            if (error){
                throwError(error.reason);
            } else {
                $body.val('');
            }
        });
    },

    'click .photoSubmit': function(e){
        //alert("button click!");
        if (Meteor.isCordova){
            alert("Phone!");
            window.imagePicker.getPictures(
                function(results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                    }
                }, function (error) {
                    console.log('Error: ' + error);
                }
            );
        }
    }
});