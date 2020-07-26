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
      var sources = creep.room.find(FIND_SOURCES);
      if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE){
        creep.moveTo(sources[1]);
      }

      if(creep.store.getFreeCapacity() == 0){
        creep.memory.isBuilding = true;
      }
    }
  }
}

module.exports = roleBuilder;
