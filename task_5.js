const team = {
    members: ['Superman', 'Batman', 'Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function () {
        return this.members.map(function (member) {
            return `${member} is on team ${team.teamName}`; // Instead of "this" is we use "team"
        });
    }
};
team.teamSummary();