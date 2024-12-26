import './style.css'
import * as THREE from 'three' // ES Module import
import gsap from 'gsap'


// Scene
const scene = new THREE.Scene()

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// mesh.scale.x = 2 
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

// Group
// const group = new THREE.Group()
// group.scale.y = 2
// group.rotation.y = 0.2
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff000 })
// )
// cube1.position.x = - 1.5
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff000 })
// )
// cube2.position.x = 0
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff000 })
// )
// cube3.position.x = 1.5
// group.add(cube3)

// Size
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
// let time = Date.now()
// const clock = new THREE.Clock()
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})
const tick = () => {
    console.log('tick')
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time 
    // time = currentTime
    // const elapsedTime = clock.getElapsedTime()

    // mesh.rotation.y += 0.01 * deltaTime
    // mesh.rotation.x = Math.cos(elapsedTime)
    // mesh.rotation.y = Math.sin(elapsedTime)
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()