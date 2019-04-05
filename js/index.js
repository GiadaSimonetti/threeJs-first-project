alert("BOOOOOOOOOOM 👾")
// scene is what you've been viewing
let scene = new THREE.Scene();
//  camer is what user can see
let camera = new THREE.PerspectiveCamera(75, window.innereWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innereWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//  game logic

const update = () => {

}

//  draw scene
const render = () => {
    renderer.render(scene, camera);

}

//  run GameLoop(update, render,repeat)
const GameLoop = () => {
    requestAnimationFrame(GameLoop);
    update();
    render();
}

GameLoop();
