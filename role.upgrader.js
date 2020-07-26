var roleUpgrader = {
  run: function(creep){
    if(creep.memory.isUpgrading == false){
      if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()){
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[0]);
        } else if(creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
          creep.memory.isUpgrading = true;
        }
      }
    } else {
      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
        creep.moveTo(creep.room.controller);
      }
      if(creep.store.getFreeCapacity() == 0){
        creep.memory.isUpgrading = false;
      }
    }
  }
}

module.exports = roleUpgrader;
