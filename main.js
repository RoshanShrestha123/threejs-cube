const scene = new THREE.Scene(); 
let rotationSpeed = 0.01;
let meshMaterial = 0x00ff00;
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const texture = new THREE.TextureLoader().load('boxImage.jpg');
const material = new THREE.MeshBasicMaterial({map:texture});

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x +=rotationSpeed;
    cube.rotation.y +=rotationSpeed;
    renderer.render(scene, camera);
}

animate();