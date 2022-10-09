//  Here I have used to approaches.  
//  1. One createe instance of object and log on screen immidiately (inside the loop)
//  2.  Creating an array of instantiated objects, and then print on the screen.
//      This way you may use array index to get to each instantiated objects. (outside the loop)
//  I used the 1st method ; but it can be commented and use the second method that lines are commented.
//  By removing // you can use those (the second spproach.) commenting those

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

// Two array of pirotes to use to instatiate.
const jollyRoger = [["Captain Jack Sparrow", 2, 2, 2],  ["Captain Barbosa", 2, 1, 2], ["Dread Pirate Roberts", 2, 2, 2]]
const blackPearl = [["Long John Silver", 2, 1, 2] , ["Captain Flint", 1, 1, 1] , ["Captain Hook", 2, 2, 1]]


// Looping through array to instantiate an object with each piraye's name and info
// Then It log it on the screen
const jollyRogerInstaniatedObjectsArray = []  // empty array for instaiated objects
const blackPearlInstaniatedObjectsArray = []  // empty array for instaiated objects

for(let i =0; i < 3; i++){
    const pirateInfo = new PiratesCharacter(jollyRoger[i])
    console.log(pirateInfo)  // Logging whole pirate array of instatiated obejects on the screen if we want from here
    jollyRogerInstaniatedObjectsArray.push(pirateInfo)  // the array of instanciated objects
}

for(let i =0; i < 3; i++){
    const pirateInfo = new PiratesCharacter(blackPearl[i])
    console.log(pirateInfo)  // Logging whole pirate array of instatiated obejects on the screen if we want from here
    blackPearlInstaniatedObjectsArray.push(pirateInfo) // the array of instanciated objects

}


// ******** Second method of logging on the screen ********
// // JollyRogerInstaniatedObjectsArray
// console.log(jollyRogerInstaniatedObjectsArray)  // Logging whole pirate array of instatiated obejects on the screen if we want from here
// console.log(jollyRogerInstaniatedObjectsArray[1])   //  Logging pirate obeject "INDIVIDUALLY" on the screen if we want from here


// console.log(blackPearlInstaniatedObjectsArray)  // Logging whole pirate array of instatiated obejects on the screen if we want from here
// console.log(blackPearlInstaniatedObjectsArray[1])   //  Logging pirate obeject "INDIVIDUALLY" on the screen if we want from here

