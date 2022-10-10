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

let rodneyMullen = new TonyHawkCharacter('rodney', 'regular', 'street', 'heelflip darkside')

let tonyHawk = new TonyHawkCharacter('tony', 'goofy', 'vert', 'The 900')

let bobBurnquist = new TonyHawkCharacter('bob', 'regular', 'all around', 'rocket Tailslide')

let steveCaballero = new TonyHawkCharacter('steve', 'goofy', 'all around', 'hang ten')

let chadMuska = new TonyHawkCharacter('chad', 'regular', 'street', 'Hurricane')

let elissaSteamer = new TonyHawkCharacter('elissa', 'regular', 'street', 'madonna tailslide')

let runeGlifberg = new TonyHawkCharacter('rune', 'regular', 'vert', 'christ air')

let ericKoston = new TonyHawkCharacter('eric', 'goofy', 'street', 'pizza guy')

let andrewReynolds = new TonyHawkCharacter('andrew', 'regular', 'street', 'hardflip late flip')

let geoffRowley = new TonyHawkCharacter('geoff', 'regular', 'street', 'triple heelflip')