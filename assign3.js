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


//this is closing the entire test//
});

//rover.spec.js
const assert = require('assert');
const Rover = require('../rover.js');

describe ('rover', function (){

//test 7//







//this closes the whole test//
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
    constructor ()
  }
  
  module.exports = Rover;

