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
        <p>Hypertext interactive fiction is the digital equivalent of the\
        Choose Your Own Adventure (CYOA) books that were popular in the\
        1980s. The story is told in chunks, and you select from a range\
        of options to move it forward. Unlike the book form, however, the\
        digital form gives you far more flexibility to tell rich stories\
        and introduce more interesting game elements.</p>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    
    todo: new undum.SimpleSituation(
        "<p class='transient'>¿Desea recoger algún objeto más? Si o Continuar con la historia con estos objetos.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    situations: new undum.Situation({
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
    links: new undum.Situation({
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
    sticky: new undum.Situation({
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
    progress: new undum.Situation({
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
    saving: new undum.Situation({
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
    last: new undum.Situation({
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
    
    oneshot: new undum.SimpleSituation(
        "<p>Continuar historia.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>"
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
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
