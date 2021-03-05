// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Comienzo de un nuevo día</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Beep-beep! <br> suena el despertador, anunciando el comienzo de un nuevo día. Medio dormido apaga la alarma y enciende la luz.</p>\
        \
        <p>Aquí se te pasa por la cabeza el primer dilema del día. <a href='telefono'>¿Coger el teléfono como cada mañana y consultar las notícias que están por venir?</a> o <a href='levantarte'>levantarte inmediatamente</a>.</p>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
    ),
    //Comienzo de la historia
    todo: new undum.SimpleSituation(
        "<p class='transient'>¿Desea recoger algún objeto más? Si o Continuar con la historia con estos objetos.</p>",
    ),
    // Menu elecciones.
    // Paraguas
    opcion1: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
                system.animateQuality(
                    'paraguas', character.qualities.paraguas+1
                );
        },
        tags: ["topic"],
        optionText: "Paraguas",
        displayOrder: 1
    }),
    // Llaves de casa.
    opcion2: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
            
                system.animateQuality(
                    'llavesCasa', character.qualities.llavesCasa+1
                );
        },
        tags: ["topic"],
        optionText: "Llaves de casa",
        displayOrder: 1
    }),
    // Llaves del coche.
    opcion3: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
            
                system.animateQuality(
                    'llavesCoche', character.qualities.llavesCoche+1
                );
        },
        tags: ["topic"],
        optionText: "Llaves del coche",
        displayOrder: 1
    }),
    // Nota de la compra
    opcion4: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
            
                system.animateQuality(
                    'notaCompra', character.qualities.notaCompra+1
                );
        },
        tags: ["topic"],
        optionText: "Nota de la compra",
        displayOrder: 1
    }),
    // Peine
    opcion5: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
            
                system.animateQuality(
                    'peine', character.qualities.peine+1
                );
        },
        tags: ["topic"],
        optionText: "Peine",
        displayOrder: 1
    }),
    // Botella de agua
    opcion6: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
            
                system.animateQuality(
                    'botellaAgua', character.qualities.botellaAgua+1
                );
        },
        tags: ["topic"],
        optionText: "Botella de agua",
        displayOrder: 1
    }),
    //Continuar despues de coger objetos
    continua: new undum.SimpleSituation(
        {
        enter: function(character, system, from) {
            if(character.qualities.paraguas > 0){
                system.write($("#opcion1").html());
                
            }else{
                system.write($("#opcion2").html());
            }
            
        }
        }),
    //Si coges el telefono desde la cama...
    telefono: new undum.SimpleSituation(
        "<p>Decides coger el telefono.</p>",
        {
            heading: "Telefono",
        }
    ),
    //Si decides levantarte
    levantarte: new undum.SimpleSituation(
        "<p>Decides levantarte.</p>",
        {
            heading: "Levantarte",
        }
    )
    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    botellaAgua: new undum.OnOffQuality(
        "Botella de agua", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    peine: new undum.OnOffQuality(
        "Peine", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    notaCompra: new undum.OnOffQuality(
        "Nota de compra", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    cartera: new undum.OnOffQuality(
        "Cartera", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    llavesCoche: new undum.OnOffQuality(
        "Llaves del coche", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    llavesCasa: new undum.OnOffQuality(
        "Llaves de casa", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    ),
    paraguas: new undum.OnOffQuality(
        "Paraguas", {priority:"0002", group:'objetos', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    objetos: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    // BORRAR
    //HASTA AQUÍ
    character.qualities.paraguas = 0;
    character.qualities.llavesCasa = 0;
    character.qualities.llavesCoche = 0;
    character.qualities.cartera = 0;
    character.qualities.notaCompra = 0;
    character.qualities.peine = 0;
    character.qualities.botellaAgua = 0;
    
    system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");
};
