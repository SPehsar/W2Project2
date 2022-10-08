class PiratesCharacter {
    constructor(pirateArray) {
        this.name = pirateArray[0]
        this.numberOfEyes = pirateArray[1]
        this.numberOfLegs = pirateArray[2]
        this.numberOfHands = pirateArray[3]
        this.emotionCharacter = "vicious"
    }

    pirateID() {
        console.log(this.name + " was a " + this.emotionCharacter + ' pirate!')
    }

    piratePhyscal() {
        console.log("Pirates may have lost eyes, hands or legs during their career!!!")
        console.log(`${this.name}  had  ${this.numberOfEyes} eye(s), ${this.numberOfLegs} leg(s), and ${this.numberOfHands} hznds.`)
    }

    pirateOriginality(nationality) {
        console.log(this.name + " was a pirate known to be from  " + nationality + '!')
    }

}

const jollyRoger = [["Captain Jack Sparrow", 2, 2, 2],  ["Captain Barbosa", 2, 1, 2], ["Dread Pirate Roberts", 2, 2, 2]]
const blackPearl = [["Long John Silver", 2, 1, 2] , ["Captain Flint", 1, 1, 1] , ["Captain Hook", 2, 2, 1]]

for(let i =0; i < 3; i++){
    const pirateInfo = new PiratesCharacter(jollyRoger[i])
    console.log(pirateInfo)
}

for(let i =0; i < 3; i++){
    const pirateInfo = new PiratesCharacter(blackPearl[i])
    console.log(pirateInfo)
}