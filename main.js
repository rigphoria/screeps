//var spawnSystem = require('role.harvester');
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");

module.exports.loop = function ()
{
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == "harvester");
    for(var i = 0; i < harvesters.length; i++){
      roleHarvester.run(harvesters[i]);
    }
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader");
    for(var i = 0; i < upgraders.length; i++){
      roleUpgrader.run(upgraders[i]);
    }
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
    for(var i = 0; i < builders.length; i++){
      roleBuilder.run(builders[i]);
    }

    // for(var name in Game.creeps){
    //   var creep = Game.creeps[name];
    //   if(creep.memory.role = "builder"){
    //     roleBuilder.run(creep);
    //   }
    // }
    //spawnSystem.run();
}

/* SNIPPETS
 Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrader1', {'role' : "roleName"}  );
 var harvesters = _.filter(Game.creeps, (creep) => memory.role == 'harvester');
 var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
*/
