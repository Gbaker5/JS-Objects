//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkCharacter(chName,chStance,chSponsor,chMove){
this.characterName = chName
this.stance = chStance
this.sponsor = chSponsor
this.specialMove = chMove
this.flip = function(){
    console.log('Kickflip!!!')
}
this.taunt = function(){
    console.log('Dont Make me Use my ${this.specialMove}')
}
this.grab = function(){
    console.log('MELON GRAB')
}

}
let kareemCampbell = new TonyHawkCharacter('kareem','goofy','element','ghetto bird')

let buckyLasek = new TonyHawkCharacter('bucky', 'regular', 'idk', 'the fandangle')

let rodneyMullen = new TonyHawkCharacter('rodney', 'regular, idk', 'heelflip darkside')

let tonyHawk = new TonyHawkCharacter('tony', 'goofy', 'idk', 'The 900')
