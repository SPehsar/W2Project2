class Cat {
    constructor(name, age, gender, breed) {

        this.legs = 4
        this.hasFur = true
        this.name = name
        this.age = age
        this.gender = gender
        this.breed = breed

    }

    weight(catWeight) {
        console.log('\nThis ' + this.breed+ " cat weighs " + catWeight + ' lbs!')
    }
    
    ownership(){
        console.log("\nWe have a " + this.age + " year old " + this.gender + " " + this.breed + " cat.")
    }
    catLikeability(likeOrDislikeEtc) {
        console.log("\nMy family " + likeOrDislikeEtc +  " " + this.name + "!")
    }

}

console.log("\nFirst instance of Cat class ===================")
// =================  Test Block for the first instance - Start
const bingo = new Cat('bingo', 15, "male", "Siamese")
console.log(bingo)
bingo.ownership()
bingo.weight(8)
bingo.catLikeability("love")
// =================  Test Block for the first instance - End

console.log("\n")

console.log("\nSecond instance of Cat class ===================")
// =================  Test Block for the 2nd instance - Start
const ladyInBlack = new Cat('Lady-in-black', 6, "female", "Persian")
console.log(ladyInBlack)
ladyInBlack.ownership()
ladyInBlack.weight(12)
ladyInBlack.catLikeability("worship")
// =================  Test Block for the 2nd instance - End