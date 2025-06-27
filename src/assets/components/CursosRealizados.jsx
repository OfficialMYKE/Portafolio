import React, { useState } from 'react';

const cursos = [
  { titulo: 'Curso de introducción al desarrollo web: HTML y CSS', descripcion: 'Fundamentos esenciales de desarrollo web con HTML y CSS para crear estructuras y estilos visuales en páginas digitales.', plataforma: 'Google' },
  { titulo: 'Transformación digital para el empleo', descripcion: 'Adquisición de competencias digitales clave para adaptarse al entorno laboral actual y mejorar la empleabilidad en la era digital.', plataforma: 'Google' },
  { titulo: 'Python Essentials', descripcion: 'Principios fundamentales de programación en Python, incluyendo sintaxis básica, estructuras de control y manejo de datos para resolver problemas de forma eficiente.', plataforma: 'CEC-EPN' },
  { titulo: 'Gestión de Proyectos Ágiles Ciberseguridad en el Teletrabajo', descripcion: 'metodologías ágiles para la gestión eficiente de proyectos, con un enfoque en prácticas de ciberseguridad aplicadas al entorno del teletrabajo.', plataforma: 'Google' },
  { titulo: 'Competencias digitales para profesionales', descripcion: 'Formación en habilidades digitales clave para potenciar la productividad, comunicación y gestión de la información en entornos profesionales.', plataforma: 'Google' }
];

function CursosRealizados() {
  const [modal, setModal] = useState(null);

  return (
    <div className="card">
      <h2>Cursos Realizados</h2>
      <ul>
        {cursos.map((curso, index) => (
          <li key={index} className="cursor-pointer" onClick={() => setModal(curso)}>
            {curso.titulo}
          </li>
        ))}
      </ul>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modal.titulo}</h3>
            <p className="text-secondary"><strong>Plataforma:</strong> {modal.plataforma}</p>
            <p className="mt-4">{modal.descripcion}</p>
            <button 
              className="btn btn-secondary mt-6" 
              onClick={() => setModal(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default CursosRealizados;