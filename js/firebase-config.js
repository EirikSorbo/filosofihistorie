// ============================================================================
//  FIREBASE-KONFIGURASJON
// ----------------------------------------------------------------------------
//  Fyll inn verdiene du får når du oppretter et Firebase-prosjekt.
//  Se README.md for steg-for-steg-guide (tar ca. 5 minutter).
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyCg35k3JFEec8HVJEKXbKn216oekBH192c",
  authDomain: "filosofihistorie-68ff7.firebaseapp.com",
  projectId: "filosofihistorie-68ff7",
  storageBucket: "filosofihistorie-68ff7.firebasestorage.app",
  messagingSenderId: "670882057775",
  appId: "1:670882057775:web:e7c4a6f68e716edc12c0da",
};

// ----------------------------------------------------------------------------
//  LÆRER-TILGANG (Google-innlogging)
//  Google-kontoene som skal ha lærertilgang. Bare disse e-postadressene får
//  låse opp admin-funksjoner (veto, gjenopprett, slett, endre grenser).
//
//  Den SAMME listen må også settes i firestore.rules (funksjonen isTeacher),
//  for det er der den ekte sikkerheten ligger. Klientlisten styrer bare hva
//  som vises i grensesnittet.
// ----------------------------------------------------------------------------

export const TEACHER_EMAILS = [
  "eirik.sorbo@gmail.com",
];
