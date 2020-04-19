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
     return message;        
  }
}

  let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);  
  let rover = new Rover(2000);




  rover.receiveMessage()


