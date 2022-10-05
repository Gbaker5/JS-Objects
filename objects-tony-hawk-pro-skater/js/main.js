//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkCharacter(chName,chStance,chStyle,chMove){
this.characterName = chName
this.stance = chStance
this.style = chStyle
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
let kareemCampbell = new TonyHawkCharacter('kareem','goofy','street','ghetto bird')

let buckyLasek = new TonyHawkCharacter('bucky', 'regular', 'vert', 'fingerflip airwalk')

let rodneyMullen = new TonyHawkCharacter('rodney', 'regular, idk', 'heelflip darkside')

let tonyHawk = new TonyHawkCharacter('tony', 'goofy', 'birdhouse', 'The 900')

let bobBurnquist = new TonyHawkCharacter('bob', 'regular', 'idk', 'rocket Tailslide')

let steveCaballero = new TonyHawkCharacter('steve', 'goofy', 'idk', 'hang ten')

let chadMuska = new TonyHawkCharacter('chad', 'regular', 'idk', 'Hurricane')

let elissaSteamer = new TonyHawkCharacter('elissa', 'regular', 'idk', 'madonna tailslide')
