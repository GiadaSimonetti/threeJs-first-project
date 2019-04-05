alert( "BOOOOOOOOOOM 👾" )
// scene is what you've been viewing
const scene = new THREE.Scene();
//  camera is what user can see
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

//  create the shape
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//  create material, color or image texture
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube ); // till here I can't see anything becauase I need to change the position of the camera
camera.position.z = 3;

//  game logic

const update = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
}

//  draw scene
const render = () => {
    renderer.render( scene, camera );

}

//  run GameLoop(update, render,repeat)
const GameLoop = () => {
    requestAnimationFrame( GameLoop );
    update();
    render();
}

GameLoop();
