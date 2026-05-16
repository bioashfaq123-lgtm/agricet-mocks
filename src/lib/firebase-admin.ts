import admin from "firebase-admin";

// Initialise Firebase Admin SDK once (singleton pattern for Next.js hot-reload)
if (!admin.apps.length) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY ?? "";
  if (raw) {
    try {
      const serviceAccount = JSON.parse(
        // Vercel stores the JSON as a string; decode if base64-encoded
        Buffer.from(raw, "base64").toString("utf8").startsWith("{")
          ? Buffer.from(raw, "base64").toString("utf8")
          : raw
      );
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (e) {
      console.error("Firebase Admin init error:", e);
    }
  } else {
    console.warn("FIREBASE_SERVICE_ACCOUNT_KEY not set — Admin SDK disabled");
  }
}

export const adminDb = admin.apps.length ? admin.firestore() : null;
