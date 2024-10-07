let npcs = [
    { id: 'npc1', lines: ["Hihihihi!!!", "I hope your birthday is going well <33", "And I know that sometimes shit gets rough", "but Im very proud of you for pushing through", "I dont really know what a chicken sounds like", "bkaak bkaak", "I love you so so much"], currentLine: -1, isInteracting: false, gif: 'chickengif.gif' },
    { id: 'npc2', lines: ["Bkaak bkaak","Im in a little basket :3", "I tried to get one like this for your flowers", "Im still happy you liked them though <3","I am so happy that im with you", "I know that was quite abrupt","I didnt how how to transition that smoothly", "but I really mean it", "I love your eyes", "I love your smile", "I will stop being cringe now", "But I really like you Myren <3" ], currentLine: -1, isInteracting: false, gif: 'comp1.gif' },
    { id: 'npc3', lines: ["moo moo", "Im a cow :3", "I tried to make this look cutesy", "so I hope you like the little game I made", "I completely learned html, css, and java script for this", "I know I might have spoiled it earlier", "but i still hope you like it <3", "anyways...", "my dumb fucking son wont stop complaining", '"oooh stop eating grass"', "just hand me another beer holy shit", "hes fucking purple like who made him like that", "go talk to him" ], currentLine: -1, isInteracting: false, gif: 'cowgif.gif' },
    { id: 'npc4', lines: ["Im a little cute blue cow", "I am so joyous and happy", "nothing in the world could hurt me", "hey....", ".", "..", "...", "....", ".....", "can I tell you something...", "all my dad does is eat grass...", "every second...", "every minute...", "every hour...", "every day...", "every week...", "every month...", "every year...", "every decade...", "every century...", "every millennium...", "every decillennium...", "every centillennium...", "every megennia...", "every decamegennia...", "every hectomegennia...", "every gigennium...", "every decagigennium...", "every hectogigennium...", "every teragennium...", "every decateragennium...", "every petagennium...", "every decapetagennium...", "every hectopetagennium...", "every exagennium...", "every decaexagennium...", "every hectoexagennium...", "every zettagennium...", "every decazettagennium...", "every hectozettagennium...", ".", "..", "...", "....", "I made like all of those up XD", "anyways...", "EXPLORE!!!"], currentLine: -1, isInteracting: false, gif: 'babycow.gif' },
    { id: 'npc5', lines: ["Quack quack!", "im in a little silly barrel", ".", "..", "...", "....", "I dont really know what to say", "but I really hope you like this <3", "I love you so much myren", "and im so proud of you", "<eeeee"], currentLine: -1, isInteracting: false, gif: 'duckgif.gif' },
    { id: 'npc6', lines: ["I am the all might FIRE ANT!!!", "Bow before me!", "The earth trembles beneath my feet.", "The gods fear me!!!!", "I will burn everything!", "My little minions will come after you", "They are only slightly south from my position >:D", "whatever you do...", "do NOT go look for them", ".", "..", "...", "....", ".....", "......", ".......", "........", ".........", "god I fucking hate that dung beetle..."], currentLine: -1, isInteracting: false, gif: 'lavaant.gif' },
    { id: 'npc7', lines: [
        "The Fire Ant sees everything, Myren...",
        "Even in your darkest nightmares.",
        "He knows your every move...",
        "Do you really think you can hide?",
        "There’s nowhere you can run.",
        "He’s always watching... waiting.",
        "Your time is running out.",
        "Each step brings you closer to doom.",
        "The Fire Ant doesn’t forgive.",
        "One wrong step, and you'll beg...",
        "...for mercy...",
        "But mercy never comes."], currentLine: -1, isInteracting: false, gif: 'TunnelingMole.gif' },
    
    { id: 'npc8', lines: [
        "You're trapped, Myren...",
        "Nowhere to run, nowhere to hide.",
        "MWHAHAHAHAHAHA...",
        "The Fire Ant’s wrath is inevitable.",
        "You think you're safe?",
        "Foolish.",
        "The Fire Ant’s gaze never blinks.",
        "He sees you, Myren.",
        "Always.",
        "Stay in line, or we’ll have a little... 'chat.'",
        "Disobey, and your fate is sealed.",
        "Run, and it will be worse."], currentLine: -1, isInteracting: false, gif: 'RhinoBeetle.gif' },
    
    { id: 'npc9', lines: [
        "Messy business, Myren...",
        "You dont want to mess with us...",
        "We are full of EVIL MWHAHAHAHAHHAHA",
        "Everyone is powerless to our ruling!!!",
        "Youre no exception.",
        "MWAHAHAHAHAHAHA...",
        "We'll deal with you soon enough.",
        "Piece by piece, we'll dismantle you.",
        "You think you can escape us?",
        "Think again.",
        "You're just a speck of dust...",
        "Ready to be swept away."], currentLine: -1, isInteracting: false, gif: 'InfectedMouse.gif' },
    
    { id: 'npc10', lines: [
        "I hear everything, Myren...",
        "Even the things you fear to speak.",
        "Your secrets? They scream to me.",
        "There’s nowhere to hide from me.",
        "MWAHAHAHAHAHA...",
        "The Fire Ant already knows it all.",
        "He knows what you’ve done.",
        "And what you haven’t.",
        "We strike from the shadows...",
        "Silent...",
        "Deadly...",
        "You’ll be buried beneath your own sins."], currentLine: -1, isInteracting: false, gif: 'EngorgedTick.gif' },
    
        { id: 'npc11', lines: [
            "MWAHAHAHAHAHAHA! I’m the mighty Dung Beetle!",
            "You better be scared, Myren!",
            "I’m part of the Fire Ant’s elite mafia crew!",
            "You’ll never escape us! Fear my wrath!",
            "I’ll roll you up like a pile of dung!",
            "No one crosses me and survives!",
            "MWAHAHAHAHAHAHA!",
            "...",
            "uhh...",
            "...",
            "fuck...",
            "...",
            "Man I hate this shit...",
            "I don’t want to be here! This is way too much!",
            "I was happy just rolling dung!",
            'Now im stuck with this "mafia" shit',
            "HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE"], currentLine: -1, isInteracting: false, gif: 'DungBeetle.gif' },
        

];

let moveInterval;
let animationInterval;
let frame = 1; // Track the current animation frame for the player
const maxFrames = 8; // Total frames per direction for the player
let activeDirection = null; // Track the current direction being held
const interactionRange = 90; // Maximum distance to interact with NPCs
let activeNPC = null; // Track which NPC the player is currently interacting with
let isTextComplete = true; // Track if the current text is fully displayed (starts as true to allow initial interaction)
let npcInteractions = 0;
const totalNPCs = npcs.length;
const npcInteractionCounter = document.getElementById('npc-interaction-counter');
let interactedNPCs = new Set(); // To track unique NPCs interacted with

function updateNPCInteractionCounter() {
    const npcInteractionCounter = document.getElementById('npc-interaction-counter');
    npcInteractionCounter.textContent = `NPCs interacted with: ${npcInteractions} / ${totalNPCs}`;
}

// Ensure the player starts with the correct initial sprite
function initializePlayer() {
    const character = document.getElementById('character');
    character.style.backgroundImage = `url('Walking/down1.png')`; // Set initial player sprite
}

// Initialize NPCs to display GIFs
function initializeNPCs() {
    npcs.forEach(npc => {
        const npcElement = document.getElementById(npc.id);
        npcElement.innerHTML = `<img src="${npc.gif}" alt="${npc.id}" style="width: 100%; height: 100%">`; // Use an img tag inside the NPC div
    });
}

// Function to update the interaction counter text
function updateNPCInteractionCounter() {
    npcInteractionCounter.textContent = `NPCs interacted with: ${npcInteractions} / ${totalNPCs}`;
}

// Function to handle interaction with NPCs and cycle through text
function interactWithNPC() {
    if (activeNPC && isTextComplete) { // Only allow interaction if the text is complete
        advanceNPCText(); // Display the next line of dialogue if near an NPC

        // Check if it's the first time interacting with this NPC
        if (!interactedNPCs.has(activeNPC.id)) {
            interactedNPCs.add(activeNPC.id);
            npcInteractions++; // Increment interaction count
            updateNPCInteractionCounter(); // Update the on-screen counter
        }
    }
}

// Other functions like moveWorld, changeCharacterSprite, etc...
function preloadImages() {
    const images = [
        'Walking/up1.png', 'Walking/up2.png', 'Walking/up3.png', // Add all up direction frames
        'Walking/down1.png', 'Walking/down2.png', 'Walking/down3.png', // Add all down direction frames
        'Walking/left1.png', 'Walking/left2.png', 'Walking/left3.png', // Add all left direction frames
        'Walking/right1.png', 'Walking/right2.png', 'Walking/right3.png' // Add all right direction frames
    ];

    images.forEach(function(image) {
        const img = new Image();
        img.src = image;
    });
}
// Start NPC GIFs and background music when the page loads
    window.onload = function () {
        preloadImages();
        let loadingText = document.querySelector('#loading-screen h1');
        let loadingStates = ["Loading.", "Loading..", "Loading..."];
        let loadingIndex = 0;

        // Function to cycle through "Loading.", "Loading..", "Loading..."
        function animateLoading() {
            loadingText.textContent = loadingStates[loadingIndex]; // Update text
            loadingIndex = (loadingIndex + 1) % loadingStates.length; // Loop through the states
        }

        // Set interval to update the loading text every 500ms (0.5 seconds)
        let loadingInterval = setInterval(animateLoading, 500);

        // Display the loading screen for 5 seconds, then transition to the game
        setTimeout(function() {
            clearInterval(loadingInterval); // Stop the loading animation after 5 seconds
            document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
            document.getElementById('world').style.display = 'block'; // Show the game world
        }, 10000); // 5000 ms = 5 seconds

        // Initialize NPCs, player, and other game elements
        initializeNPCs();
        initializePlayer();
        
        // Start the background music
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.5; // Adjust volume if needed
        backgroundMusic.play(); // Play the music when the page loads
        updateNPCInteractionCounter(); // Initialize the counter when the page loads
    };


function moveWorld(direction) {
    const world = document.getElementById('world');
    let x = parseInt(world.dataset.x || 0, 10);
    let y = parseInt(world.dataset.y || 0, 10);

    // Adjust the world position based on the direction
    switch (direction) {
        case 'left':
            x += 10; // Moderate step size for smoother, faster movement
            break;
        case 'right':
            x -= 10;
            break;
        case 'up':
            y += 10;
            break;
        case 'down':
            y -= 10;
            break;
    }

    // Move the world background position independently
    let backgroundPositionX = parseInt(window.getComputedStyle(world).backgroundPositionX, 10);
    let backgroundPositionY = parseInt(window.getComputedStyle(world).backgroundPositionY, 10);

    switch (direction) {
        case 'left':
            backgroundPositionX += 10; // Move background with moderate speed
            break;
        case 'right':
            backgroundPositionX -= 10;
            break;
        case 'up':
            backgroundPositionY += 10;
            break;
        case 'down':
            backgroundPositionY -= 10;
            break;
    }

    // Apply the new background position to simulate movement
    world.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;

    // Move the NPCs in the same direction and speed as the world
    const npcs = document.querySelectorAll('.npc');
    npcs.forEach(npc => {
        // Get current position from inline styles or dataset
        let npcX = parseInt(npc.style.left || npc.dataset.x, 10);
        let npcY = parseInt(npc.style.top || npc.dataset.y, 10);

        // Adjust the NPCs' position based on the world movement
        switch (direction) {
            case 'left':
                npcX += 10;
                break;
            case 'right':
                npcX -= 10;
                break;
            case 'up':
                npcY += 10;
                break;
            case 'down':
                npcY -= 10;
                break;
        }

        // Update the NPC's position with new values
        npc.style.left = `${npcX}px`;
        npc.style.top = `${npcY}px`;

        // Update the data attributes to store the new position
        npc.dataset.x = npcX;
        npc.dataset.y = npcY;
    });

    // Store the world's new position
    world.dataset.x = x;
    world.dataset.y = y;

    // Check for proximity to NPCs after world movement
    checkProximityToNPCs();
}



// Function to change the character sprite based on the direction and frame number
function changeCharacterSprite(direction) {
    const character = document.getElementById('character');

    // Increment the frame and loop back to 1 if we exceed maxFrames
    frame = (frame % maxFrames) + 1;

    // Change the sprite based on the direction and frame number
    switch (direction) {
        case 'up':
            character.style.backgroundImage = `url('Walking/up${frame}.png')`;
            break;
        case 'down':
            character.style.backgroundImage = `url('Walking/down${frame}.png')`;
            break;
        case 'left':
            character.style.backgroundImage = `url('Walking/left${frame}.png')`;
            break;
        case 'right':
            character.style.backgroundImage = `url('Walking/right${frame}.png')`;
            break;
    }
}

// Function to start moving the player and the world
// Function to start moving the player and the world
function startMoving(direction) {
    if (activeDirection !== direction) {
        stopMoving(); // Stop any previous movement if changing direction
        activeDirection = direction;

        // Move and animate immediately before setting the interval
        moveWorld(direction);
        changeCharacterSprite(direction);

        // Start moving the world in the given direction at a regular interval
        moveInterval = setInterval(function () {
            moveWorld(direction);
            checkProximityToNPCs(); // Check proximity during movement
        }, 40); // Faster but not too slow

        // Start updating the character's walking animation at a regular interval
        animationInterval = setInterval(function () {
            changeCharacterSprite(direction);
        }, 120); // Faster animation for smoother walking
    }
}

// Function to stop moving the player and stop animation
function stopMoving() {
    clearInterval(moveInterval); // Stop the movement interval
    clearInterval(animationInterval); // Stop the animation interval
    frame = 1; // Reset the frame when movement stops
    activeDirection = null; // Reset the active direction
}

// Function to handle interaction with NPCs and cycle through text
function interactWithNPC() {
    if (activeNPC && isTextComplete) { // Only allow interaction if the text is complete
        advanceNPCText(); // Display the next line of dialogue if near an NPC
    }
}

// Function to display the current line of NPC text, letter by letter
function displayNPCText() {
    const dialogueBox = document.getElementById('dialogue-box');
    if (activeNPC) {
        const text = activeNPC.lines[activeNPC.currentLine];
        dialogueBox.textContent = ''; // Clear the dialogue box before displaying new text
        dialogueBox.style.display = 'block'; // Show the dialogue box
        isTextComplete = false; // Reset the flag before starting to show the next line

        // Display each letter with a delay
        let currentIndex = 0;
        function showNextLetter() {
            if (currentIndex < text.length) {
                // Append the next character (including spaces) to the dialogue box
                dialogueBox.textContent += text[currentIndex];
                currentIndex++;
                setTimeout(showNextLetter, 20); // 0.02 seconds delay between each letter
            } else {
                isTextComplete = true; // Mark text as fully displayed
            }
        }

        showNextLetter(); // Start showing the text
    }
}

// Function to advance to the next line of dialogue, only if the previous one is fully displayed
function advanceNPCText() {
    if (activeNPC && isTextComplete) {
        // Move to the next line, loop back to the start if at the end
        activeNPC.currentLine = (activeNPC.currentLine + 1) % activeNPC.lines.length;
        displayNPCText(); // Update the dialogue box with the new line
    }
}

// Function to check proximity to NPCs and update `activeNPC`
function checkProximityToNPCs() {
    const player = document.getElementById('character');
    const playerRect = player.getBoundingClientRect();
    let npcFound = false; // Track if we find an NPC within range

    npcs.forEach(npc => {
        const npcElement = document.getElementById(npc.id);
        const npcRect = npcElement.getBoundingClientRect();

        // Calculate the distance between the player and the NPC
        const distance = Math.sqrt(
            Math.pow(playerRect.x - npcRect.x, 2) +
            Math.pow(playerRect.y - npcRect.y, 2)
        );

        // If player is within the interaction range, set activeNPC to this NPC
        if (distance < interactionRange) {
            activeNPC = npc; // Set the active NPC to the one in range
            npcFound = true; // Mark that an NPC was found within range
        }
    });

    // If no NPC is found within range, reset activeNPC and hide the dialogue box
    const dialogueBox = document.getElementById('dialogue-box');
    if (!npcFound) {
        activeNPC = null;
        dialogueBox.style.display = 'none'; // Hide the dialogue box when no NPC is nearby
    }
}

// Event listener for key presses
document.addEventListener('keydown', function (event) {
    // Move the world when arrow keys are pressed
    switch (event.key) {
        case 'ArrowLeft':
            startMoving('left');
            break;
        case 'ArrowRight':
            startMoving('right');
            break;
        case 'ArrowUp':
            startMoving('up');
            break;
        case 'ArrowDown':
            startMoving('down');
            break;
    }

    // Interact with NPC or advance dialogue when 'X' is pressed
    if (event.key === 'x' || event.key === 'X') {
        if (activeNPC) {
            advanceNPCText(); // Go to the next line if the previous one is done
        } else {
            interactWithNPC(); // Start interacting with an NPC if not already interacting
        }
    }
});

// Stop movement when the key is released
document.addEventListener('keyup', function () {
    stopMoving();
});

