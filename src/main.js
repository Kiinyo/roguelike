const Display = new ROT.Display({width:100, height: 50});
const Display_Element = Display.getContainer();
document.body.appendChild(Display_Element);
Display_Element.addEventListener('click', (event) => { console.log("Clicked on Display_Element"); });
Display_Element.addEventListener('contextmenu', (event) => { console.log("Right Clicked on Display_Element"); event.preventDefault(); });

function handle_input (event) {
    const code = event.code;

    switch (code) {
        case "KeyA":
            Player.x--;
            break;
        case "KeyD":
            Player.x++;
            break;
        case "KeyW":
            Player.y--;
            break;
        case "KeyS":
            Player.y++;
            break;
    }

    Display.clear();
    Display.draw(Player.x, Player.y, '@', 'white');
}

document.addEventListener('keydown', (event) => { console.log("Keydown on Display_Element"); handle_input(event) });


let Player = {
    x: 10,
    y: 10
}

console.log("Display_Element: ", Display_Element);


// Wait until things are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    Display.draw(Player.x, Player.y, '@', 'white');
});