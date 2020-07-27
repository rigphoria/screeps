var roleRepairer = {
  run: function(creep){
    if(creep.memory.isRepairing){
      var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => {return (
                                    structure.structureType == STRUCTURE_ROAD ||
                                    structure.structureType == STRUCTURE_CONTAINER &&
                                    structure.hits / structure.hitsMax < 0.4)}});

      if(targets.length > 0){
        console.log(creep.repair(targets[0], creep.store.getCapacity(RESOURCE_ENERGY)));
        if(creep.repair(targets[0], creep.store.getCapacity(RESOURCE_ENERGY)) == ERR_NOT_IN_RANGE){
          creep.moveTo(targets[0]);
        }
      } else {
        //creep.moveTo(Game.Flags["IdleRepairers"]);
      }

      if(creep.store.getFreeCapacity() == creep.store.getCapacity()){
        creep.memory.isRepairing = false;
      }
    } else {
      var targets = creep.room.find(FIND_STRUCTURES, {
                  filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
                   i.store[RESOURCE_ENERGY] > 0
                 });
      if(targets.length > 0){
          if(creep.withdraw(targets[0],RESOURCE_ENERGY, 100) == ERR_NOT_IN_RANGE){
          creep.moveTo(targets[0]);
        }
      }

      if(creep.store.getFreeCapacity() == 0){
        creep.memory.isRepairing = true;
      }
    }
  }
}

module.exports = roleRepairer;
