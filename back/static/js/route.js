var AppRouter = Backbone.Router.extend({
    routes: {
        "post/:id": "getPost",
        "download/*path": "downloadFile",
        "trigger": "postTrigger",
        "tiny": "defaultRoute",
    },

    getPost: function(id){
        alert(id);
    },

    downloadFile: function(path){
        alert(path);
    },

    postTrigger: function(){
        alert("trigger");
        this.navigate("post/" + "yoooooo", {trigger: true, replace: true});
    },

    defaultRoute: function(tiny){
        alert(tiny);
    }
});

var app_router = new AppRouter;
Backbone.history.start();