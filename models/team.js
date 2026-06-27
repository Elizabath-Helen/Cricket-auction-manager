class Team {

    constructor(teamId, teamName, captain, budget) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.captain = captain;
        this.budget = budget;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
        this.budget -= player.soldPrice;
    }

    displayTeam() {
        console.log(`\n==============================`);
        console.log(`Team : ${this.teamName}`);
        console.log(`Captain : ${this.captain}`);
        console.log(`Remaining Budget : ${this.budget} Cr`);

        console.log("\nPlayers:");

        this.players.forEach(player => {

            console.log(
                `${player.id} | ${player.name} | ${player.role} | ${player.soldPrice} Cr`
            );

        });
        console.log("==============================");
    }
}

export default Team;