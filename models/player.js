class Player {
    constructor(id, name, age, country, role, basePrice, soldPrice) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.country = country;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = soldPrice;
    }

    displayPlayer() {
        console.log(`
ID         : ${this.id}
Name       : ${this.name}
Age        : ${this.age}
Country    : ${this.country}
Role       : ${this.role}
Base Price : ${this.basePrice} Cr
Sold Price : ${this.soldPrice} Cr
`);
    }
}

export default Player;