import React, { useState } from 'react';

const cursos = [
  { titulo: 'HTML desde cero', descripcion: 'Curso completo sobre estructura HTML, formularios, etiquetas semánticas y SEO.', plataforma: 'Goole' },
  { titulo: 'Python aplicado a la automatización', descripcion: 'Scripts, automatización de tareas, manejo de archivos, web scraping.', plataforma: 'Coursera' },
  { titulo: 'Gestión de Proyectos Ágiles', descripcion: 'Scrum, Kanban, gestión de tiempos y liderazgo ágil.', plataforma: 'Google' },
  { titulo: 'Fundamentos de Marketing Digital', descripcion: 'Estrategias, funnels de venta, branding y analítica.', plataforma: 'Google Digital Garage' }
];

export function CursosRealizados() {
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