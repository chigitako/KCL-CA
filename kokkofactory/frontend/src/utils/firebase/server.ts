import * as admin from 'firebase-admin';
import serviceAccount from '../../../serviceAccountKey.json'; // 相対パスでインポート

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const createClient = () => {
  return admin.auth();
};