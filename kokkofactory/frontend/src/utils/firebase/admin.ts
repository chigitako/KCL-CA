import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = admin.auth();