//var spawnSystem = require('role.harvester');
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");

module.exports.loop = function ()
{
    for(var name in Game.creeps){
      var creep = Game.creeps[name];
      if(creep.memory.role == "harvester"){
        roleHarvester.run(creep);
      } else if(creep.memory.role = "upgrader"){
        roleUpgrader.run(creep);
      }
    }
    //spawnSystem.run();
}

/* SNIPPETS
 Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrader1', {'role' : "roleName"}  );

 var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
*/
