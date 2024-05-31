import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';

admin.initializeApp();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud como JSON

const db = admin.firestore();

// Middleware para configurar CORS
const corsHandler = (
  req: express.Request, // Usa el tipo de Request de Express
  res: express.Response<any>, // Usa el tipo de Response de Express
  next: () => void
) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).send('OK');
    return;
  }
  next();
};

// Crear una ubicación
app.post('/locations', async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const { uid, location } = req.body;
    await db.collection('locations').doc(uid).set({ location });
    res.status(201).send('Ubicación creada exitosamente');
  } catch (error) {
    console.error('Error al crear la ubicación:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Leer todas las ubicaciones
app.get('/locations', async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const snapshot = await db.collection('locations').get();
    const locations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(locations);
  } catch (error) {
    console.error('Error al obtener las ubicaciones:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Leer una ubicación por UID
app.get('/locations/:uid', async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const { uid } = req.params;
    const doc = await db.collection('locations').doc(uid).get();
    if (!doc.exists) {
      res.status(404).send('Ubicación no encontrada');
    } else {
      res.status(200).json({ id: doc.id, ...doc.data() });
    }
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Actualizar una ubicación por UID
app.put('/locations/:uid', async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const { uid } = req.params;
    const { location } = req.body;
    await db.collection('locations').doc(uid).update({ location });
    res.status(200).send('Ubicación actualizada exitosamente');
  } catch (error) {
    console.error('Error al actualizar la ubicación:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Eliminar una ubicación por UID
app.delete('/locations/:uid', async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const { uid } = req.params;
    await db.collection('locations').doc(uid).delete();
    res.status(200).send('Ubicación eliminada exitosamente');
  } catch (error) {
    console.error('Error al eliminar la ubicación:', error);
    res.status(500).send('Error interno del servidor');
  }
});

export const api = functions.https.onRequest(app);
