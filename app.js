import playersData from "./testdata.json" with { type: "json" };

import Batsman from "./models/batsman.js";
import Bowler from "./models/bowler.js";
import AllRounder from "./models/allrounder.js";
import Team from "./models/team.js";
import AuctionUtils from "./utils/auctionUtils.js";


const team1 = new Team(
    1,
    "Chennai Super Kings",
    "MS Dhoni",
    100
);  

const team2 = new Team(
    2,
    "Royal Challengers Bengaluru",
    "Virat Kohli",
    100
);

const players = [];

playersData.forEach((player) => {

    if (!AuctionUtils.validateAge(player)) {
        console.log(`${player.name} skipped because age is below 18.`);
        return;
    }

    if (!AuctionUtils.validatePrice(player)) {
        console.log(`${player.name} skipped because sold price is less than base price.`);
        return;
    }

    AuctionUtils.convertNameToUpper(player);

    let playerObject;

    if (player.role === "Batsman") {

        playerObject = new Batsman(
            player.id,
            player.name,
            player.age,
            player.country,
            player.role,
            player.basePrice,
            player.soldPrice,
            player.battingStyle,
            player.runs,
            player.strikeRate
        );

    } else if (player.role === "Bowler") {

        playerObject = new Bowler(
            player.id,
            player.name,
            player.age,
            player.country,
            player.role,
            player.basePrice,
            player.soldPrice,
            player.bowlingStyle,
            player.wickets,
            player.economy
        );

    } else if (player.role === "AllRounder") {

        playerObject = new AllRounder(
            player.id,
            player.name,
            player.age,
            player.country,
            player.role,
            player.basePrice,
            player.soldPrice,
            player.battingStyle,
            player.bowlingStyle,
            player.runs,
            player.wickets
        );

    } else {

        console.log(`Unknown player role: ${player.role}`);
        return;
    }

    players.push(playerObject);
});

players.forEach((player, index) => {

    if (index < 5) {
        team1.addPlayer(player);
    } else {
        team2.addPlayer(player);
    }

});

console.log("\n================ TEAM DETAILS ================\n");
team1.displayTeam();
team2.displayTeam();


AuctionUtils.displayAuctionResults([team1, team2]);