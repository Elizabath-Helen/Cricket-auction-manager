import Player from "./player.js";

class AllRounder extends Player {

    constructor( id, name, age, country, role, basePrice, soldPrice, battingStyle, bowlingStyle, runs, wickets){
        super( id, name, age, country, role, basePrice, soldPrice);
        this.battingStyle = battingStyle;
        this.bowlingStyle = bowlingStyle;
        this.runs = runs;
        this.wickets = wickets;
    }

    displayAllRounder() {

        console.log(`
ID              : ${this.id}
Name            : ${this.name}
Role            : ${this.role}
Batting Style   : ${this.battingStyle}
Bowling Style   : ${this.bowlingStyle}
Runs            : ${this.runs}
Wickets         : ${this.wickets}
Base Price      : ${this.basePrice} Cr
Sold Price      : ${this.soldPrice} Cr
`);

    }
}

export default AllRounder;