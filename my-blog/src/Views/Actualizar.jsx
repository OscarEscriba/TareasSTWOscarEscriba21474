import React, { useState } from 'react';
import useApi from './useApi.ts'; // Importa tu hook useApi
import Input from '../Components/inputs';
import Button from '../Components/Button';

const UpdateDataView = () => {
  const { updateData } = useApi(); // Obtiene la función de actualización de tu hook

  const [formData, setFormData] = useState({
    id: '',
    newTitle: '',
    newContent: '',
    newCategory: '',
    newAuthor: '',
    newSummary: '',
    newImageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateData(formData.id, {
        Titulo: formData.newTitle,
        Contenido: formData.newContent,
        Categoria: formData.newCategory,
        Autor: formData.newAuthor,
        Resumen: formData.newSummary,
        URLimagen: formData.newImageUrl,
      });
      // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito o redirigir a otra página
      setFormData({
        id: '',
        newTitle: '',
        newContent: '',
        newCategory: '',
        newAuthor: '',
        newSummary: '',
        newImageUrl: '',
      }); // Resetea el formulario después de la actualización exitosa
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrar un mensaje de error al usuario
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };

  return (
    <div style={{ backgroundColor: 'blue', color: 'lightGreen', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Actualizar Datos</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="id"
          placeholder="ID del registro a actualizar"
          value={formData.id}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newTitle"
          placeholder="Nuevo título"
          value={formData.newTitle}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newContent"
          placeholder="Nuevo contenido"
          value={formData.newContent}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newCategory"
          placeholder="Nueva categoría"
          value={formData.newCategory}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newAuthor"
          placeholder="Nuevo autor"
          value={formData.newAuthor}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newSummary"
          placeholder="Nuevo resumen"
          value={formData.newSummary}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="newImageUrl"
          placeholder="Nueva URL de imagen"
          value={formData.newImageUrl}
          onChange={handleChange}
        />
        <Button type="submit" style={{ marginTop: '20px' }} color={"green"}>Actualizar Datos</Button>
      </form>
    </div>
  );
};

export default UpdateDataView;

