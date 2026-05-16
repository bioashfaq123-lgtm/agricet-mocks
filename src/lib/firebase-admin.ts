import admin from "firebase-admin";

if (!admin.apps.length) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY ?? "";
  if (raw) {
    try {
      // Try plain JSON first, then base64-encoded JSON
      let serviceAccount: admin.ServiceAccount;
      try {
        serviceAccount = JSON.parse(raw);
      } catch {
        serviceAccount = JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
      }
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Firebase Admin SDK initialized successfully");
    } catch (e) {
      console.error("Firebase Admin init error:", e);
    }
  } else {
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not set — Admin SDK disabled");
  }
}

export const adminDb = admin.apps.length ? admin.firestore() : null;
