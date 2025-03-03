
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to cover full viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const colors = ["#FF007F", "#FFFFFF"]; // Neon Pink & White

// Function to create random shapes
function createShapes() {
    for (let i = 0; i < 100; i++) {
        shapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            type: Math.random() > 0.66 ? "triangle" : (Math.random() > 0.5 ? "circle" : "square"),
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 0.2 + 0.05,  // Reduced speed (was 0.5 + 0.2 before)
            angle: Math.random() * Math.PI * 2
        });
    }
}

// Function to draw each shape
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let shape of shapes) {
        ctx.fillStyle = shape.color;
        ctx.beginPath();

        if (shape.type === "circle") {
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (shape.type === "square") {
            ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
        } else if (shape.type === "triangle") {
            ctx.moveTo(shape.x, shape.y - shape.size);
            ctx.lineTo(shape.x - shape.size, shape.y + shape.size);
            ctx.lineTo(shape.x + shape.size, shape.y + shape.size);
            ctx.closePath();
            ctx.fill();
        }
    }
}

// Function to update shape positions
function updateShapes() {
    for (let shape of shapes) {
        shape.x += Math.cos(shape.angle) * shape.speed;
        shape.y += Math.sin(shape.angle) * shape.speed;

        // Loop around screen edges
        if (shape.x > canvas.width) shape.x = 0;
        if (shape.x < 0) shape.x = canvas.width;
        if (shape.y > canvas.height) shape.y = 0;
        if (shape.y < 0) shape.y = canvas.height;
    }
}

// Animation loop
function animate() {
    drawShapes();
    updateShapes();
    requestAnimationFrame(animate);
}

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize
createShapes();
animate();
