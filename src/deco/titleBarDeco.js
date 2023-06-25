export function flower(leafeCount = 8, color = 'blue', lineWidth = 3, size = 600) {
    function f(angle) {
        const a = (size / 2) - 2;
        const t = angle * Math.PI / 180;
        const r = a * Math.sqrt(Math.abs(Math.cos((leafeCount / 2) * t)));

        // coordinates
        const x = r * Math.cos(t);
        const y = -r * Math.sin(t);
        return { x, y };
    }
    return canvasFromFunction(f, color, lineWidth, size, size);
}

function canvasFromFunction(func, color = 'blue', lineWidth = 3, width = 600, height = 600, scale = 1, startAngle = 0, endAngle = 360, angleStep = 1) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw the shape
    ctx.beginPath();

    for (let angle = startAngle; angle <= endAngle; angle += angleStep) {
        const { x, y } = func(angle);
        const scaledX = centerX + x * scale;
        const scaledY = centerY + y * scale;
        if (angle === startAngle) {
            ctx.moveTo(scaledX, scaledY);
        } else {
            ctx.lineTo(scaledX, scaledY);
        }
    }

    ctx.closePath();
    ctx.stroke();
    return canvas;
}