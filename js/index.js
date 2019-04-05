alert( "BOOOOOOOOOOM 👾" )

let width = window.innerWidth;
let height = window.innerHeight;

// scene is what you've been viewing
const scene = new THREE.Scene();
//  camera is what user can see
const camera = new THREE.PerspectiveCamera( 75, width  / height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width , height );
document.body.appendChild(renderer.domElement);

window.addEventListener( 'resize', function(){
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height ;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls( camera, renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

let cubeMaterials = [
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide } ), // RIGHT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide } ), // LEFT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/3.png'), side: THREE.DoubleSide } ), // TOP SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide } ), // BOTTOM SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/5.png'), side: THREE.DoubleSide } ), // FRONT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide } ), // BACK SIDE
]

//  create material, color or image texture	//
const material = new THREE.MeshFaceMaterial( cubeMaterials );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );
camera.position.z = 3;

//  game logic

const update = () => {
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
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
