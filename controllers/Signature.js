import Signature from "../models/SignatureModel";

// Obtener todas las asignaturas
export const getAllSignatures = async (req, res) => {
  try {
    const signatures = await Signature.findAll();
    res.json(signatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la firma' });
  }
};

// Crear una nueva signatura
export const createSignature = async (req, res) => {
  const { signatureName } = req.body;
  try {
    const newSignature = await Signature.create({ signatureName });
    res.json(newSignature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la signatura' });
  }
};

// Otros métodos CRUD según sea necesario 

export const updateSignature = async (req, res) => {
 
}

export const getSignatureByid = async (req, res) => {
  
}

export const DeleteSignature = async (req, res) => {
  
}



