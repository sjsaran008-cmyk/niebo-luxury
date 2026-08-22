import sharp from "sharp";
import fs from "fs";
import path from "path";

const sourceDir = path.resolve("src/assets");
const outputDir = path.resolve("src/assets-optimized");

const supported = [".jpg", ".jpeg", ".png", ".webp"];

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(inputPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!supported.includes(ext)) continue;

    const relativePath = path.relative(sourceDir, inputPath);
    const outputPath = path.join(
      outputDir,
      relativePath.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp")
    );

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(`${relativePath} -> ${path.relative(outputDir, outputPath)}`);
  }
}

await processDirectory(sourceDir);

console.log("\n? Image optimization completed.");
