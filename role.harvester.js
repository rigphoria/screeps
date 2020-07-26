var roleHarvester = {
  /** @param (Creep) creep **/
  run: function(creep){
    if(creep.memory.isHarvesting == true){
      if(creep.store.getFreeCapacity() > 0){
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[0]);
        }
      }
      
      if(creep.store.getFreeCapacity() == 0){
        creep.memory.isHarvesting = false;
      }
    } else {
      if(creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        creep.moveTo(Game.spawns["Spawn1"]);
      }

      if(creep.store.getFreeCapacity() == creep.store.getCapacity()){
        creep.memory.isHarvesting = true;
      }
    }
  }
};

module.exports = roleHarvester;
