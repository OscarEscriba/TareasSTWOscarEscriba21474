import React, {useState}from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono faPencil
import Input from './inputs';
import Button from './Button';
import './ModalStyle.css';

const AddPostModal = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category] = useState('');
    const [resumen, setResumen] = useState('');
    const [imagen, setImagen] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:4000/posts', {
                title,
                content,
                author,
                category,
                resumen,
                imagen
            });
            closeModal(); // Cierra el modal después de enviar el formulario
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };
    const categoryOptions =['Tecnologia','Ciencia','Inteligencia Artificial', 'Electronicos'];
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className='titulo-container'>
                    <FontAwesomeIcon icon={faAnchor} />
                    <h2 className="Titulo">Agregar nuevo post</h2>
                </div>
                <label htmlFor="title">Título:</label>
                <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} height="40px" required />

                <label>Autor:</label>
                <Input  
                    type="text" 
                    id="author" 
                    name="author" 
                    value={author} 
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
                    value={resumen} 
                    onChange={(e) => setResumen(e.target.value)} 
                    height="50px" 
                    required 
                />

                <label>URL de la imagen:</label>
                <Input 
                    id="imagen" 
                    type="text" 
                    name="imagen" 
                    value={imagen} 
                    onChange={(e) => setImagen(e.target.value)} 
                    height="40px" 
                    required 
                />

                <label>Contenido:</label>
                <Input 
                    id="content" 
                    type="text" 
                    name="content" 
                    value={content} 
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
