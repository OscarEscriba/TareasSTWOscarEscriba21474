function PostForm() {
    const [formData, setFormData] = React.useState({
        title: '',
        content: '',
        author: '',
        category: '',
        created_at: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            showAlert("Post creado correctamente", data)
            // Aquí puedes manejar la respuesta de la API, como redirigir a otra página o mostrar un mensaje de éxito
        } catch (error) {
            showAlert('Error al crear el post. Por favor, inténtalo de nuevo más tarde.', error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="created_at">Created At:</label>
                <input type="datetime-local" id="created_at" name="created_at" value={formData.created_at} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


window.PostForms = PostForm;
