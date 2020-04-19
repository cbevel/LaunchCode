//command.spec.js

const assert = require('assert');
const Command = require('../command.js');

//test 1//
describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );   
  });
  //test 2//
  it ("constructor sets command type", function() {
     let newCommandType = new Command('sit', 12);
    assert.strictEqual(newCommandType.commandType, 'sit');
  });

  //test 3//
  it ("constructor sets a value passed in as the 2nd argument", function() {
     let newCommandType = new Command('sit', 12);
    assert.strictEqual(newCommandType.value, 12);
  });

});


//message.spec.js

const assert = require('assert');
const Message = require('../message.js');

//test 4//
describe ("Message", function() {

it ("throws error if a name is NOT passed into the constructor as the first parameter", function () {
  assert.throws( 
    function() {
      new Message();
    },
    {
    message: "Name required."
    }
  );
});

//test 5// 

it ("constructor sets name", function() {
let newMessage = new Message ("books",['Harry Potter', 'Pride and Prejudice', 'Crazy Rich Asians']);
assert.strictEqual(newMessage.name, "books");
});

//test 6//
it ("contains a commands array passed into the constructor as 2nd argument", function () {
let commands = ['Harry Potter', 'Pride and Prejudice', 'Crazy Rich Asians'];
let newMessage = new Message('book', commands);
assert.strictEqual(newMessage.commands,commands);
});

});






//rover.spec.js
const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe ('Rover Class', function (){
  
  //test 7//
  it ("constructor sets position and default values for mode and generatorWatts", function() {
    let newRover = new Rover(98382);
    assert.strictEqual(newRover.position, 98382);
    assert.strictEqual(newRover.mode, "NORMAL");
    assert.strictEqual(newRover.generatorWatts, 110);
  });

  //test 8//

  it ("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
    let message = new Message('Status Test', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message).message;
      assert.strictEqual(response, message.name);
  });


});







//command.js

class Command {
    constructor(commandType, value) {
      this.commandType = commandType;
      if (!commandType) {
        throw Error("Command type required.");
      }
      this.value = value;
    }
  
  }
  
  module.exports = Command;





  //message.js
  class Message {
    constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Name required.");
      }
      this.commands = commands;
    }
  
  }
  
  module.exports = Message; 








  //rover.js
class Rover {
  constructor (position, mode = 'NORMAL', generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
    }

  receiveMessage(message) {
    return message; 
    
  }
}
module.exports = Rover;

