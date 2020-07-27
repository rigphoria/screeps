var roleBuilder = {
  run: function(creep){
    if(creep.memory.isBuilding == true){
      var buildSites = creep.room.find(FIND_CONSTRUCTION_SITES);
      if(buildSites.length > 0){
        if(creep.build(buildSites[0]) == ERR_NOT_IN_RANGE){
          creep.moveTo(buildSites[0]);
        }
      }

      if(creep.store.getFreeCapacity() == creep.store.getCapacity()){
        creep.memory.isBuilding = false;
      }
    } else {
      var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER &&
                        structure.store[RESOURCE_ENERGY] > 100);
                }
            });
      if(targets.length > 0){
        if(creep.withdraw(targets[0],RESOURCE_ENERGY,
          creep.store.getCapacity(RESOURCE_ENERGY) - creep.store.getFreeCapacity()) == ERR_NOT_IN_RANGE){
        creep.moveTo(targets[0]);
        }
      } else {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE){
          creep.moveTo(sources[1]);
        }
      }

      if(creep.store.getFreeCapacity() == 0){
        creep.memory.isBuilding = true;
      }
    }
  }
}

module.exports = roleBuilder;
