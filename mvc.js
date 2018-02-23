// MVC:  Model, View, Controller
var model = {
  observers: [],
  items: [],

  addObserver: function(observer) {
    this.observers.push(observer);
  },

  notifyObservers: function() {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i].notify();
    }
  },

  addItem: function(item) {
    this.items.push(item);
    this.notifyObservers(); // call notifyObservers
  }

}; // end model

var view = {
  input: document.getElementById("input"),
  list: document.getElementById("list"),
  button: document.getElementById("button"),

  init: function() {
    model.addObserver(this);
    this.button.addEventListener("click", function() {
      controller.addItem();
    });
  },

  notify: function() {
    var html = "";
    for (var i = 0; i < model.items.length; i++) {
      html += "<li>" + model.items[i] + "</li>";
    }
    this.list.innerHTML = html;
  }
};

view.init();

var controller = {
  addItem: function() {
    var item = view.input.value;
    model.addItem(item);
    view.input.value = "";
  }
};
