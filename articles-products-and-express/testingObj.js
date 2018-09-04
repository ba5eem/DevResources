//jshint esversion: 6
class Hero {
  constructor(){
    this._hero = [{
              id: "001",
              name: 'Bruce',
              lastname: 'Wayne',
              alias: 'Batman',
              job: 'Billionaire Playboy',
              car: 'Bat Mobile',
              city: 'Gotham',
              age: 38,
              nemisis: 'Superman' }];
    this._index = function(data){
        return this._hero.find( hero => {
          return hero.id === data; 
        });
      };
  }// end of this constructor set

  consoleObject(){
    console.log("Console Object: ", this._hero);
  }

}//end of class function

module.exports = Hero;