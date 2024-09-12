addLayer("c", {
    name: "Clicker", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "cl", // This appears on the layer's node. Default is the id with the first letter capitalized/
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "green",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "levels", // Name of prestige currency
    baseResource: "clicks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    base: 2,
    canBuyMax() {return hasUpgrade("sp",11)},
    branches:["p"],
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for ☽", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    clickables: {
        11: {
            display() {return "click"},
            canClick() {return "True"},
            onClick() {
                return player.points=player.points.add(player[this.layer].points)
            }
        }
    }
})

