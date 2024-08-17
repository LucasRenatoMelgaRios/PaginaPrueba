import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PostObra } from "../services/PostObra";

export const ClasificacionPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    const onSubmit = async (data) => {
      // Agrega el ID y Estado automáticamente
      const obraData = {
        ...data,
        id: Date.now().toString(), // Genera un ID único basado en el timestamp
        estado: "En Curso", // El estado siempre será "En Curso"
      };
  
      try {
        // Llama a la función PostObra para enviar los datos
        const response = await PostObra(obraData);
        console.log("Obra creada exitosamente:", response);
        reset(); // Reinicia el formulario después del envío
      } catch (error) {
        console.error("Error al crear la obra:", error);
      }
    };
  
    return (
      <FormContainer>
        <h1>Agregar Nueva Obra</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label>Nombre:</label>
            <input
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres"
                }
              })}
              placeholder="Nombre de la obra"
            />
            {errors.nombre && <ErrorText>{errors.nombre.message}</ErrorText>}
          </FormField>
  
          <FormField>
            <label>Avatar (URL):</label>
            <input
              {...register("avatar", {
                required: "La URL del avatar es obligatoria",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Debe ser una URL válida"
                }
              })}
              placeholder="URL de la imagen del avatar"
            />
            {errors.avatar && <ErrorText>{errors.avatar.message}</ErrorText>}
          </FormField>
  
          <FormField>
            <label>Capítulos:</label>
            <input
              type="number"
              {...register("capitulos", {
                required: "El número de capítulos es obligatorio",
                min: {
                  value: 1,
                  message: "Debe tener al menos 1 capítulo"
                }
              })}
              placeholder="Número de capítulos"
            />
            {errors.capitulos && <ErrorText>{errors.capitulos.message}</ErrorText>}
          </FormField>
  
          <FormField>
            <label>Tipo:</label>
            <select
              {...register("tipo", {
                required: "El tipo es obligatorio"
              })}
            >
              <option value="Comic">Comic</option>
              <option value="Manga">Manga</option>
              <option value="Novela">Novela</option>
              {/* Agrega más opciones si es necesario */}
            </select>
            {errors.tipo && <ErrorText>{errors.tipo.message}</ErrorText>}
          </FormField>
  
          <FormField>
            <label>Descripción:</label>
            <textarea
              {...register("descripcion", {
                required: "La descripción es obligatoria",
                minLength: {
                  value: 10,
                  message: "La descripción debe tener al menos 10 caracteres"
                }
              })}
              placeholder="Descripción de la obra"
            />
            {errors.descripcion && <ErrorText>{errors.descripcion.message}</ErrorText>}
          </FormField>
  
          <SubmitButton type="submit">Agregar Obra</SubmitButton>
        </form>
      </FormContainer>
    );
  };

// Estilos CSS con styled-components
const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 150px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #ffffff;
  }

  input,
  select,
  textarea {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #2e2e2e;
    color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorText = styled.span`
  color: #ff4d4d;
  font-size: 12px;
  margin-top: 5px;
`;