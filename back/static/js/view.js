var Comment = Backbone.View.extend({
    initialize: function () {
        console.log("comment view initialized");
    },
    render: function(context){
        var template = _.template($("#template").html());
        $(this.el).html(template(context));
    }
});

var com = new Comment({el: $("#com_container")});
com.render({name: "============="});