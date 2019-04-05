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

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 30;

//  game logic

const update = () => {
    // torus.rotation.x += 0.01
    // torus.rotation.y += 0.01
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
