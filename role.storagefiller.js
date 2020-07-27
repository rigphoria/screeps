var roleFiller = {
  /** @param (Creep) creep **/
  run: function(creep){
    if(creep.memory.isFilling){
      var targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
                  return (structure.structureType == STRUCTURE_CONTAINER &&
                      structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
              }
          });
      if(targets.length > 0) {
          if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
          }
        } else {
          creep.moveTo(Game.flags["IdleFillers"]);
        }
        if(creep.store.getFreeCapacity() == creep.store.getCapacity()){
          creep.memory.isFilling = false;
        }
      } else {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[1]);
        }
        if(creep.store.getFreeCapacity() == 0){
          creep.memory.isFilling = true;
        }
      }
    }
  }

module.exports = roleFiller;
