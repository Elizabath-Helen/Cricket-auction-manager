import Player from "./player.js";

class Batsman extends Player {

    constructor(id, name, age, country, role, basePrice, soldPrice, battingStyle, runs, strikeRate) {
        super(id, name, age, country, role, basePrice, soldPrice);
        this.battingStyle = battingStyle;
        this.runs = runs;
        this.strikeRate = strikeRate;
    }

    displayBatsman() {
        console.log(`
ID            : ${this.id}
Name          : ${this.name}
Role          : ${this.role}
Batting Style : ${this.battingStyle}
Runs          : ${this.runs}
Strike Rate   : ${this.strikeRate}
Base Price    : ${this.basePrice} Cr
Sold Price    : ${this.soldPrice} Cr
`);
    }
}

export default Batsman;