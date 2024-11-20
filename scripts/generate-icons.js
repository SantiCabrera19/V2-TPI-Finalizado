const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Definimos los tamaños para cada carpeta mipmap
const sizes = {
  'mipmap-mdpi': 48,
  'mipmap-hdpi': 72,
  'mipmap-xhdpi': 96,
  'mipmap-xxhdpi': 144,
  'mipmap-xxxhdpi': 192
};

async function generateIcons() {
  // Usamos el LogoTPI-512x512.png como fuente
  const sourceIcon = path.join(process.cwd(), 'public', 'LogoTPI-512x512.png');
  
  for (const [folder, size] of Object.entries(sizes)) {
    const targetDir = path.join(process.cwd(), 'android', 'app', 'src', 'main', 'res', folder);
    
    // Crear la carpeta si no existe
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Generar el ícono redimensionado
    await sharp(sourceIcon)
      .resize(size, size)
      .toFile(path.join(targetDir, 'ic_launcher.png'));
      
    console.log(`Generado ic_launcher.png ${size}x${size}px en ${folder}`);
  }
}

generateIcons().catch(console.error);