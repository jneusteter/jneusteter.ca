import fs from "fs";
import path from "path";

// Replace with your actual paths
const sourceFilePath = "db.db";
const backupFolder = "backups";

function copyFileWithTimestamp() {
  // Generate a timestamp string (e.g., YYYYMMDD_HHMMSS)
  const timestamp = new Date().toISOString();
  const fileExtension = path.extname(sourceFilePath);
  const fileNameWithoutExt = path.basename(sourceFilePath, fileExtension);

  // Construct the new filename with the timestamp
  const backupFileName = `${fileNameWithoutExt}_${timestamp}${fileExtension}`;
  const destinationFilePath = path.join(backupFolder, backupFileName);

  // Copy the file
  fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
    if (err) {
      console.error("Error copying file:", err);
    } else {
      console.log(`File copied successfully to ${destinationFilePath}`);
    }
  });
}

copyFileWithTimestamp();
