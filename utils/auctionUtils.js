class AuctionUtils {

    static convertNameToUpper(player) {
        player.name = player.name.toUpperCase();
        return player;
    }

    static validateAge(player) {
        if (player.age > 18) {
            return true;
        }
        return false;
    }

    static validatePrice(player) {
        if (player.soldPrice >= player.basePrice) {
            return true;
        }
        return false;
    }

    static displayAuctionResults(teams) {
        console.log("\n========== FINAL AUCTION RESULTS ==========\n");
       
        teams.forEach(team => {
            console.log(`Team : ${team.teamName}`);

            team.players.forEach(player => {
                console.log(`${player.id} | ${player.name} | ${player.role} | ${team.teamName}`);
            });

            console.log("-----------------------------------------");

        });

    }

}

export default AuctionUtils;