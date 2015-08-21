var Negai = Backbone.Model.extend({
    url: '/home/data',
    initialize: function(){
        this.bind("change:name", function(){
            alert("you've changed name as:" + this.get("name"));
        });
        this.bind("invalid", function(model, err){
            alert(model);
            alert(err);
        });
        console.log(this.get("name") + " is created");
    },
    validate: function(attributes){
        if(attributes.power<500){
            // console.log("Invalid: cannot realize with low power");
            return "Invalid: cannot realize with low power";
        }
    },
    defaults: {
        name: "wytiny",
        power: 1000,
        time: "2015/8/18",
        content: "Frontend Designer."
    },
    type: function(){
        console.log("Name: " + this.get("name") + ":\n" +
            "Content: " + this.get("content") + "\n" +
            "Power: " + this.get("power") + "\n"
        );
    },
    conf: function(getPower, getTime){
        this.set({power: getPower, time: getTime});
    }
});

var harp = new Negai({name: "harp", power: 200}, {validate: true});

// alert(harp.set({power: 110}, {'validate':true}));
var Box = Backbone.Collection.extend({
    model: Negai,
    url: '/home/data'
});

var boxList = new Box;
boxList.add(harp);
var ng1 = boxList.create({
    name: "yooooooooooo",
    power: 2400
}, {
    success: function(cb) {
        console.log("post ok");
        console.log(cb);
    },
    error: function(cb) {
        console.log(cb);
        console.log('post err');
    }
});


boxList.fetch({
    reset: false,
    success: function(col, res, op){
        console.log("ok");
        console.log(col);
        console.log(res);
        console.log(op);
        col.each(function(negai){
            negai.type();
        });
    },
    error: function(col, res, op){
        console.log('err')
    }
});
