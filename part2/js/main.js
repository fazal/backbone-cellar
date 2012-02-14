// Models
window.Juice = Backbone.Model.extend({
    urlRoot:"../api/juices",
    defaults:{
        "id":null,
        "name":"",
        "price":"",
        "ingredients":"USA",
        "description":"",
        "picture":""
    }
});

window.JuiceCollection = Backbone.Collection.extend({
    model:Juice,
    url:"../api/juices"
});


// Views
window.JuiceListView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (juice) {
            $(self.el).append(new JuiceListItemView({model:juice}).render().el);
        });
    },

    render:function (eventName) {
        _.each(this.model.models, function (juice) {
            $(this.el).append(new JuiceListItemView({model:juice}).render().el);
        }, this);
        return this;
    }
});

window.JuiceListItemView = Backbone.View.extend({

    tagName:"li",

    template:_.template($('#tpl-juice-list-item').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    }
});

window.JuiceView = Backbone.View.extend({

    template:_.template($('#tpl-juice-details').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events:{
        "change input":"change",
        "click .save":"saveJuice",
        "click .delete":"deleteJuice"
    },

    change:function (event) {
        var target = event.target;
        console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
        // You could change your model on the spot, like this:
        // var change = {};
        // change[target.name] = target.value;
        // this.model.set(change);
    },

    saveJuice:function () {
        this.model.set({
            name:$('#name').val(),
            price:$('#price').val(),
            ingredients:$('#ingredients').val(),
            description:$('#description').val()
        });
        if (this.model.isNew()) {
            app.juiceList.create(this.model);
        } else {
            this.model.save();
        }
        return false;
    },

    deleteJuice:function () {
        this.model.destroy({
            success:function () {
                alert('Juice deleted successfully');
                window.history.back();
            }
        });
        return false;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});

window.HeaderView = Backbone.View.extend({

    template:_.template($('#tpl-header').html()),

    initialize:function () {
        this.render();
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click .new":"newJuice"
    },

    newJuice:function (event) {
        if (app.juiceView) app.juiceView.close();
        app.juiceView = new JuiceView({model:new Juice()});
        $('#content').html(app.juiceView.render().el);
        return false;
    }
});


// Router
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "juices/:id":"juiceDetails"
    },

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    list:function () {
        this.juiceList = new JuiceCollection();
        this.juiceListView = new JuiceListView({model:this.juiceList});
        this.juiceList.fetch();
        $('#sidebar').html(this.juiceListView.render().el);
    },

    juiceDetails:function (id) {
        this.juice = this.juiceList.get(id);
        if (app.juiceView) app.juiceView.close();
        this.juiceView = new JuiceView({model:this.juice});
        $('#content').html(this.juiceView.render().el);
    }

});

var app = new AppRouter();
Backbone.history.start();
