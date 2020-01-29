const scene = new THREE.Scene(); // this is where we put the object , camera and light

// next this we do is create is the camera!!
// there are two type of camera -> prespective and orthoraphic camera

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);//(field of view, aspect ratio, near clipping plane, far clippling plane)


//next thing we need is renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// now since we have created the scene so far, lets create the BOX!! WOO HOOO!!.....

//so we need what we called BoxGeometry

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});

const cube = new THREE.Mesh(geometry,material);

scene.add(cube);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    renderer.render(scene, camera);
}

animate();