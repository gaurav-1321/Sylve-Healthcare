const fs = require('fs');
const path = require('path');

const pathsToDelete = [
  path.join(__dirname, 'frontend', 'app', 'login'),
  path.join(__dirname, 'frontend', 'app', 'signup'),
  path.join(__dirname, 'frontend', 'app', 'forgot-password'),
  path.join(__dirname, 'frontend', 'app', 'dashboard'),
  path.join(__dirname, 'frontend', 'app', '(auth)', 'register')
];

for (const p of pathsToDelete) {
  try {
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true });
      console.log('Deleted:', p);
    }
  } catch (e) {
    console.error('Failed to delete:', p, e);
  }
}
console.log('Cleanup complete! Please restart your backend and frontend servers.');
