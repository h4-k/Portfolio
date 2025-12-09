// Subtle Digital Rain Effect

export const initMatrixRain = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Katakana + Latin characters + Hacker symbols
  const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF@#$%&<>?';
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops: number[] = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * -100; // Random start positions
  }

  const draw = () => {
    // Very subtle fade for longer, dreamier trails
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `bold ${fontSize}px "JetBrains Mono"`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      
      // Cyber Green Gradient Logic
      const isHead = Math.random() > 0.95; // 5% chance of being a bright "head"
      
      if (isHead) {
         ctx.fillStyle = '#ffffff'; // White tip
         ctx.shadowColor = '#00dc82';
         ctx.shadowBlur = 15; // Stronger glow
      } else {
         // Varying shades of green
         ctx.fillStyle = Math.random() > 0.5 ? '#00dc82' : '#00ff9d'; 
         ctx.shadowBlur = 2;
         ctx.shadowColor = '#00dc82';
      }
      
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  const interval = setInterval(draw, 33); // ~30FPS

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', handleResize);
  };
};