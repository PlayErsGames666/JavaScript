// 1. Сцена и Камера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.set(0, 4, 6);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// 2. Новые параметры (8 рукавов, randomness: 0.7)
const parameters = {
    count: 70000,
    size: 0.012,
    radius: 6,
    branches: 8,       // 8 рукавов
    spin: 1,
    randomness: 0.7,   // Увеличенная разбросанность
    insideColor: '#ff6030',
    outsideColor: '#1b3984'
};

// 3. Генерация галактики
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(parameters.count * 3);
const colors = new Float32Array(parameters.count * 3);

const colorInside = new THREE.Color(parameters.insideColor);
const colorOutside = new THREE.Color(parameters.outsideColor);

for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX = (Math.random() - 0.5) * parameters.randomness * radius;
    const randomY = (Math.random() - 0.5) * parameters.randomness * radius;
    const randomZ = (Math.random() - 0.5) * parameters.randomness * radius;

    positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3]     = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// 4. Логика скролла и анимации камеры
let scrollY = window.scrollY;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Функция быстрой прокрутки по клику на кнопку
function scrollToSection(index) {
    window.scrollTo({
    top: window.innerHeight * index,
    behavior: 'smooth'
    });
}

// 5. Анимационный цикл
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();
    
    // Медленное постоянное вращение
    points.rotation.y = elapsedTime * 0.05;

    // Нормализуем скролл (значение от 0 до 1)
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;

    // Движение камеры по траектории при скролле
    // По мере ухода вниз камера снижается и приближается к центру
    const targetX = Math.sin(scrollProgress * Math.PI * 2) * 2;
    const targetY = 4 - scrollProgress * 3.5; 
    const targetZ = 6 - scrollProgress * 5;

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// 6. Ресайз
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});