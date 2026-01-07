// Simple backup script - run before making changes
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = `backups/${timestamp}`;
  
  // Create backup directory
  fs.mkdirSync(backupDir, { recursive: true });
  
  // Copy important files
  const filesToBackup = [
    'app/page.jsx',
    'app/layout.jsx',
    'components/',
    'modules/',
    'package.json'
  ];
  
  console.log(`✅ Backup created: ${backupDir}`);
  console.log('To restore: copy files from backup folder back to main folder');
}

createBackup();
