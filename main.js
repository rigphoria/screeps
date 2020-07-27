var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var roleFiller = require("role.storagefiller");
var roleRepairer = require("role.repairer");

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
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == "repairers");
    for(var i = 0; i < repairers.length; i++){
      roleRepairer.run(repairers[i]);
    }
    var fillers = _.filter(Game.creeps, (creep) => creep.memory.role == "filler");
    for(var i = 0; i < fillers.length; i++){
      roleFiller.run(fillers[i]);
    }

    if(harvesters.length < 3){
      Game.spawns["Spawn1"].spawnCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        'Harvester' + harvesters[0].ticksToLive, {memory: {'role' : "harvester", "isHarvesting" : true}});
    } else if(upgraders.length < 3){
      Game.spawns["Spawn1"].spawnCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        'Upgrader' + harvesters[0].ticksToLive, {memory: {'role' : "upgrader", "isUpgrading" : false}});
    } else if(builders.length < 2){
      Game.spawns["Spawn1"].spawnCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        'Builder' + harvesters[0].ticksToLive, {memory: {'role' : "builder", "isBuilding" : false}});
    } else if(repairers.length < 3){
      Game.spawns["Spawn1"].spawnCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        'Repairer' + harvesters[0].ticksToLive, {memory: {'role' : "repairer", "isRepairing" : false}});
    } else if(fillers.length < 3){
      Game.spawns["Spawn1"].spawnCreep( [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
        'Filler' + harvesters[0].ticksToLive, {memory: {'role' : "filler", "isFilling" : false}});
    }
}

/* SNIPPETS
 Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Upgrader1', {'role' : "roleName"}  );
 var harvesters = _.filter(Game.creeps, (creep) => memory.role == 'harvester');
 var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
*/
