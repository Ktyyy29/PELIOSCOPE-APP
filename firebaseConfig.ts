import * as firebaseApp from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // The databaseURL is the primary config needed for Realtime Database operations
  databaseURL: "https://pelioscope-emotion-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
// FIX: Use namespace import and cast to any to resolve TS error "Module 'firebase/app' has no exported member 'initializeApp'"
// This allows the code to compile even if the environment's type definitions for Firebase are mismatched, assuming runtime is v9.
const app = (firebaseApp as any).initializeApp(firebaseConfig);
export const db = getDatabase(app);