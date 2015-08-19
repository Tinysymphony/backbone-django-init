var Negai = Backbone.Model.extend({
    url: '/home/data',
    initialize: function(){
        alert("Negai wo ka na e you");
        this.bind("change:name", function(){
            alert("you've changed name as:" + this.get("name"));
        });
        this.bind("invalide", function(model, err){
            alert(err);
        });
    },
    validate: function(attributes){
        if(attributes.power<500){
            return "cannot realize with low power";
        }
    },
    defaults: {
        name: "wytiny",
        power: 1000,
        time: "2015/8/18",
        content: "Frontend Designer."
    },
    type: function(){
        return "Negai " + this.get("name") + ":\n" + this.get("content");
    },
    conf: function(getPower, getTime){
        this.set({power: getPower, time: getTime});
    }
});

var harp = new Negai({name: "jack", power: 2100});

alert(harp.type());
// alert(harp.set({power: 110}, {'validate':true}));
harp.save({
    success: function(model, response) {
        alert("ddd");
        console.log(model);
    }
});
