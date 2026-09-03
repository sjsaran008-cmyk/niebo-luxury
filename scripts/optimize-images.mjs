import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve("src/assets");
const exts = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (exts.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }

  return files;
}

const files = await getFiles(ROOT);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const temp = `${file}.optimized.webp`;

  try {
    let image = sharp(file);
    const metadata = await image.metadata();

    const maxWidth =
      file.toLowerCase().includes("hero") ? 1920 :
      file.toLowerCase().includes("logo") ? 1000 :
      1600;

    if (metadata.width && metadata.width > maxWidth) {
      image = image.resize({
        width: maxWidth,
        withoutEnlargement: true,
      });
    }

    await image
      .webp({ quality: 82, effort: 6 })
      .toFile(temp);

    const oldSize = fs.statSync(file).size;
    const newSize = fs.statSync(temp).size;

    if (newSize < oldSize) {
      fs.unlinkSync(file);
      fs.renameSync(temp, file.replace(/\.[^.]+$/, ".webp"));
      console.log(`? ${path.relative(ROOT, file)} | ${(oldSize/1024/1024).toFixed(2)}MB ? ${(newSize/1024/1024).toFixed(2)}MB`);
    } else {
      fs.unlinkSync(temp);
      console.log(`- Skipped: ${path.relative(ROOT, file)} (already optimized)`);
    }
  } catch (err) {
    console.log(`? ${file}: ${err.message}`);
  }
}
