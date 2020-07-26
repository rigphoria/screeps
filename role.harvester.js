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
      //var extensions = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: {structureType: STRUCTURE_EXTENSION}});
      var targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                      structure.structureType == STRUCTURE_SPAWN ||
                      structure.structureType == STRUCTURE_TOWER) &&
                      structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
              }
          });
          if(targets.length > 0) {
              if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
              }
          }

      if(creep.store.getFreeCapacity() == creep.store.getCapacity()){
        creep.memory.isHarvesting = true;
      }
    }
  }
};

module.exports = roleHarvester;
