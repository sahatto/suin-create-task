function asia () {
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Hibiscus")
    } else if (index2 == list[1]) {
        game.splash("Chrysanthemum")
    } else if (index2 == list[2]) {
        game.splash("Jasmine")
    } else if (index2 == list[3]) {
        game.splash("Elephant Ears")
    } else if (index2 == list[4]) {
        game.splash("Azalea")
    } else {
        game.splash("Magnolia")
    }
}
function northAmerica () {
    game.showLongText("Enter the color flower you want to see!", DialogLayout.Full)
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Cardinal Flower")
    } else if (index2 == list[1]) {
        game.splash("Butterfly Weed")
    } else if (index2 == list[2]) {
        game.splash("Yellow Fritillart")
    } else if (index2 == list[3]) {
        game.splash("Virginia Sweetspire ")
    } else if (index2 == list[4]) {
        game.splash("Wild Lupine ")
    } else {
        game.splash("Eastern Purple Cornflower")
    }
}
function australia () {
    game.showLongText("Enter the color flower you want to see!", DialogLayout.Full)
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Mountain Devil Lambertia")
    } else if (index2 == list[1]) {
        game.splash("Fire Wheel")
    } else if (index2 == list[2]) {
        game.splash("The Golden Wattle")
    } else if (index2 == list[3]) {
        game.splash("Regal Birdflower")
    } else if (index2 == list[4]) {
        game.splash("Blue Lechenaultia")
    } else {
        game.splash("Sturt's Nightshade")
    }
}
function europe () {
    game.showLongText("Enter the color flower you want to see!", DialogLayout.Full)
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Red Poppy")
    } else if (index2 == list[1]) {
        game.splash("Orange Tulip")
    } else if (index2 == list[2]) {
        game.splash("Golden Lily")
    } else if (index2 == list[3]) {
        game.splash("Shamrock")
    } else if (index2 == list[4]) {
        game.splash("Gentian")
    } else {
        game.splash("Iris")
    }
}
function southAmerica () {
    game.showLongText("Enter the color flower you want to see!", DialogLayout.Full)
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Red Frangipani")
    } else if (index2 == list[1]) {
        game.splash("Peruvian Lily")
    } else if (index2 == list[2]) {
        game.splash("Lily of the Incas")
    } else if (index2 == list[3]) {
        game.splash("Guaimbe")
    } else if (index2 == list[4]) {
        game.splash("Blue Wild Plumbago")
    } else {
        game.splash("Jarcadana")
    }
}
function africa () {
    game.showLongText("Enter the color flower you want to see!", DialogLayout.Full)
    game.showLongText("Red, Orange, Yellow, Green, Blue, or Purple", DialogLayout.Full)
    game.splash(game.askForString("", 7))
    colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
    ]
    if (index2 == list[0]) {
        game.splash("Cape Primrose")
    } else if (index2 == list[1]) {
        game.splash("Hantamberg orange African Daisy")
    } else if (index2 == list[2]) {
        game.splash("Voltage Yellow")
    } else if (index2 == list[3]) {
        game.splash("Green and White African Violet")
    } else if (index2 == list[4]) {
        game.splash("Lily of the Nile")
    } else {
        game.splash("African Violet")
    }
}
// this function takes the user to the next step and shows them the choices and asks them for a number
function continentChoice (list: any[]) {
    game.setDialogFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    game.showLongText("North America, South America, Africa, Australia, Asia, or Europe", DialogLayout.Full)
    choice = game.askForString("", 12)
    continentList = [
    "north america",
    "south america",
    "africa",
    "australia ",
    "asia",
    "europe"
    ]
    if (choice == continentList[0]) {
        northAmerica()
    } else if (choice == continentList[1]) {
        southAmerica()
    } else if (choice == continentList[2]) {
        africa()
    } else if (choice == continentList[3]) {
        australia()
    } else if (choice == continentList[4]) {
        asia()
    } else {
        europe()
    }
}
let continentList: string[] = []
let choice = ""
let index2 = 0
let colorList: string[] = []
let list: number[] = []
scene.setBackgroundColor(7)
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
    `)
game.setDialogTextColor(1)
// This text intros the user and tells them what the game will include
game.showLongText("Hello! We are here to teach you about flowers from around the world! ", DialogLayout.Full)
// This long text is part two of the first text explaining what the game will be
game.showLongText("Please enter the name of the continent you want to learn about:", DialogLayout.Full)
for (let index = 0; index < 36; index++) {
    continentChoice(list)
    // This text intros the user and tells them what the game will include
    game.showLongText("Thank you for learning about different flowers from around the world! Press A to learn about a different flower!", DialogLayout.Full)
}
// This text intros the user and tells them what the game will include
game.showLongText("You have learned about all 36 flowers! We hope you enjoyed learning about flowers form around the world!", DialogLayout.Full)
