import Player from "./player.js";

class Bowler extends Player {

    constructor(id, name, age, country, role, basePrice, soldPrice, bowlingStyle, wickets, economy) {
        super( id, name, age, country, role, basePrice, soldPrice );
        this.bowlingStyle = bowlingStyle;
        this.wickets = wickets;
        this.economy = economy;
    }

    displayBowler() {

        console.log(`
ID             : ${this.id}
Name           : ${this.name}
Role           : ${this.role}
Bowling Style  : ${this.bowlingStyle}
Wickets        : ${this.wickets}
Economy        : ${this.economy}
Base Price     : ${this.basePrice} Cr
Sold Price     : ${this.soldPrice} Cr
`);

    }
}

export default Bowler;