class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Name required.");
    }
    this.commands = commands;
  }
}

class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}


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
    
      if (message.commands[i].commandType === 'STATUS_CHECK') {
    
          response.results.push ({
            completed: true,  
            roverStatus: { 
              "mode": this.mode,
              "generatorWatts": this.generatorWatts,
              "position": this.position
            }
          });

    }   if (message.commands[i].commandType === 'MODE_CHANGE'){
      this.mode = "LOW_POWER";
      this.position = 0;
   }
    
    else {
      response.results.push({completed: true});
    }
  }
   return response;
    }
  }

let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
// new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
console.log(response);

// added a comment



