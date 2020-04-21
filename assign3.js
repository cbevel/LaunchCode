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

  //test 9 //

  it ("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
    let message = new Message('Status Test', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message).results.length;
    assert.strictEqual(response, 2);
  });


  //Test 10 --  For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy//


  it ("responds correctly to status check command", function() {
    let commands = [new Command('STATUS_CHECK')];
     let message = new Message('Status Test', commands);
     let newRover = new Rover(98382);
     let response = newRover.receiveMessage(message).results[0];
     let correctOutput = {
         completed: true, 
         roverStatus: {
         mode: 'NORMAL', 
         generatorWatts: 110, 
         position: 98382
         }
       }
       assert.deepEqual(response,correctOutput);
 });
 
 //test 11//
 
 it("responds correctly to mode change command", function() {
   let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
   let message = new Message('Mode Change', commands);
   let newRover = new Rover(98382);
   let response = newRover.receiveMessage(message);
   assert.strictEqual(newRover.mode,'LOW_POWER');
   assert.strictEqual(response.results[0].completed, true);
 });
 
 //test 12//
 it ("responds with false completed value when attempting to move in LOW_POWER mode", function() {
 let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
   let message = new Message('Mode Change', commands);
   let newRover = new Rover(98382);
   let response = newRover.receiveMessage(message);
   assert.strictEqual(newRover.mode, "LOW_POWER");
   assert.strictEqual(newRover.position, 92382);
   assert.strictEqual(response.results[0].completed, false);
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
      let response = {
        message: message.name,
        results: []
        }
  
          for (let i =0; i < message.commands.length; i++) {
            
            if (message.commands[i].commandType === 'MODE_CHANGE'){
                this.mode = 'LOW_POWER';
                this.position = 0;
                response.results.push({completed: true});              
                }
  
            else if (message.commands[i].commandType === 'MODE_CHANGE'){
                this.mode = 'LOW_POWER';    
                response.results.push({completed: false});              
            }
          
                  
            if (message.commands[i].commandType === 'STATUS_CHECK') {
                response.results.push ({
                  completed: true,  
                  roverStatus: 
                  {
                    mode: this.mode, 
                    generatorWatts: this.generatorWatts, 
                    position: this.position}});
            
             
            } else {
              response.results.push({completed: true});
  
                  }
                }
          return response;
        }
    }
  
  
  module.exports = Rover;