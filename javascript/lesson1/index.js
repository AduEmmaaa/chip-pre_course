var person = {
    name: "ADU EMMANUEL",
    age: 22,
    city: "New York",
    fav : "fufu",
    greet: function(){
        console.log("sending greatings to all from " + this.name+" have fun at age " +this.age);
    },
    stop: function(){
        console.log("engine is about stoping")
    }
  };
 
    person.greet();