﻿define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var linq = require(['services/JSLINQ']);

    var vm = {
        activate: activate,
        title: 'Location Schedule',

        games: ko.observableArray(),

        scoreboardAlert: function () {
            var scoreboardCoach = (this.team1TakesScoreboard ? this.team1 : this.team2);
            logger.log(scoreboardCoach + ' takes scoreboard and scorebook home.', null, 'locationSchedule', true);
        }
    };

    return vm;

    //#region Internal Methods
    function activate(data) {
        //logger.log('Location Schedule View Activated', null, 'locationSchedule', true);
        logger.log('incoming location: ' + data.name);
        logger.log(leagueData);
        vm.title = 'Location Schedule for ' + data.name;


        //var test = JSLINQ(games).Where(function (item) { return item.team1 == "Michelotti-Red"; });

        //var filtered2 = linq(games).Where(function (item) { return item.team1 == data.name; });
        var filtered = ko.utils.arrayFilter(leagueData.games, function (item) { return item.location == data.name; });

        vm.games(filtered);

        return true;
    }
    //#endregion
});