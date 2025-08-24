import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Datos del formulario:', data);
    alert(`Buscando: ${data.query}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <input
        type="text"
        placeholder="Escribe el nombre de una canción o artista"
        {...register('query', { required: 'Este campo es obligatorio' })}
        className={errors.query ? 'error' : ''}
      />
      {errors.query && <p className="error-message">{errors.query.message}</p>}
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;