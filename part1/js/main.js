// Models
window.Juice = Backbone.Model.extend();

window.JuiceCollection = Backbone.Collection.extend({
    model:Juice,
    url:"../api/juices"
});

window.JuiceListView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        this.model.bind("reset", this.render, this);
    },

    render:function (eventName) {
        _.each(this.model.models, function (juice) {
            $(this.el).append(new JuiceListItemView({model:juice}).render().el);
        }, this);
        return this;
    }

});


// Views
window.JuiceListItemView = Backbone.View.extend({

    tagName:"li",

    template:_.template($('#tpl-juice-list-item').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

window.JuiceView = Backbone.View.extend({

    template:_.template($('#tpl-juice-details').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});


// Router
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "juices/:id":"juiceDetails"
    },

    list:function () {
        this.juiceList = new JuiceCollection();
        this.juiceListView = new JuiceListView({model:this.juiceList});
        this.juiceList.fetch();
        $('#sidebar').html(this.juiceListView.render().el);
    },

    juiceDetails:function (id) {
        this.juice = this.juiceList.get(id);
        this.juiceView = new JuiceView({model:this.juice});
        $('#content').html(this.juiceView.render().el);
    }
});

var app = new AppRouter();
Backbone.history.start();
