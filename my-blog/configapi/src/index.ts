import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Middleware para configurar CORS
const corsHandler = (
  req: functions.https.Request, 
  res: functions.Response<any>, 
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

// Crear un registro
export const createData = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const newData = req.body;
    await admin.firestore().collection('Blog').add(newData);
    res.status(201).send('Registro creado exitosamente');
  } catch (error) {
    console.error('Error al crear el registro:', error);
    res.status(500).send('Error interno del servidor');
  }
});


// Leer registros
export const getData = functions.https.onRequest(async (req: functions.https.Request, res: functions.Response<any>) => {
    corsHandler(req, res, () => {});
    try {
      const snapshot = await admin.firestore().collection('Blog').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      res.status(500).send('Error interno del servidor');
    }
  });

// Actualizar un registro
export const updateData = functions.https.onRequest(async (req, res) => {
  corsHandler(req, res, () => {});
  try {
    const { id } = req.params;
    const newData = req.body;
    await admin.firestore().collection('Blog').doc(id).update(newData);
    res.status(200).send('Registro actualizado exitosamente');
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Eliminar un registro
export const deleteData = functions.https.onRequest(async (req, res) => {
    corsHandler(req, res, () => {});
    try {
      const id = req.query.id as string; // Obtén el ID del query string
      if (!id) {
        throw new Error('ID no proporcionado');
      }
      await admin.firestore().collection('Blog').doc(id).delete();
      res.status(200).send('Registro eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      res.status(500).send('Error interno del servidor');
    }
  });
