import React, {useState}from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono faPencil
import Input from './inputs';
import Button from './Button';
import useApi  from "../Views/useApi.ts";

import './ModalStyle.css';

const AddPostModal = ({ closeModal }) => {
    const [Titulo, setTitle] = useState('');
    const [Contenido, setContent] = useState('');
    const [Autor, setAuthor] = useState('');
    const [Categoria] = useState('');
    const [Resumen, setResumen] = useState('');
    const [URLimagen, setImagen] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const { createData } = useApi();

    const handleSubmit = async () => {
        try {
            // Verificar si los campos obligatorios están vacíos
            if (!Titulo || !Contenido || !Autor || !selectedCategory || !Resumen || !URLimagen) {
                console.error('Todos los campos son obligatorios');
                return;
            }
            
            // Enviar solicitud solo si los campos obligatorios no están vacíos
            await createData({
                Titulo,
                Contenido,
                Autor,
                Categoria: selectedCategory,
                Resumen,
                URLimagen
            });
            closeModal(); // Cierra el modal después de enviar el formulario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const categoryOptions =['Tecnologia','Ciencia','IA', 'Electronicos'];
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className='titulo-container'>
                    <FontAwesomeIcon icon={faAnchor} />
                    <h2 className="Titulo">Agregar nuevo post</h2>
                </div>
                <label htmlFor="title">Título:</label>
                <Input type="text" id="title" name="title" value={Titulo} onChange={(e) => setTitle(e.target.value)} height="40px" required />

                <label>Autor:</label>
                <Input  
                    type="text" 
                    id="author" 
                    name="author" 
                    value={Autor} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    style={{ height: "40px" }}  
                    required 
                />

                <label>Categoría:</label>
                <select value={selectedCategory} onChange={handleCategoryChange} style={{ height: "40px", width: "100%" }} required>
                        <option value="">Seleccione una categoría</option>
                        {categoryOptions.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>

                <label>Resumen:</label>
                <Input 
                    id="resumen" 
                    type="text" 
                    name="resumen" 
                    value={Resumen} 
                    onChange={(e) => setResumen(e.target.value)} 
                    height="50px" 
                    required 
                />

                <label>URL de la imagen:</label>
                <Input 
                    id="imagen" 
                    type="text" 
                    name="imagen" 
                    value={URLimagen} 
                    onChange={(e) => setImagen(e.target.value)} 
                    height="40px" 
                    required 
                />

                <label>Contenido:</label>
                <Input 
                    id="content" 
                    type="text" 
                    name="content" 
                    value={Contenido} 
                    onChange={(e) => setContent(e.target.value)} 
                    height="90px" 
                    required 
                />

                <div className='Boton'>
                    <Button className="Boton" onClick={handleSubmit} color="#12706d">Agregar post</Button>
                </div>
            </div>
        </div>
    );
};

export default AddPostModal;
