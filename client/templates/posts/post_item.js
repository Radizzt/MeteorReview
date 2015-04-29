/**
 * Created by MAC1 on 15-04-29.
 */
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        console.log(this.url);
        console.log(this.title);
        return a.hostname;
    }
});