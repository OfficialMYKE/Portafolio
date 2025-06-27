import React, { useState } from 'react';

const habilidades = [
  { nombre: 'HTML', nivel: 90, detalle: 'Estructura semántica, formularios, etiquetas personalizadas, SEO básico.' },
  { nombre: 'CSS', nivel: 85, detalle: 'Flexbox, Grid, responsive design, animaciones, variables CSS.' },
  { nombre: 'Python', nivel: 80, detalle: 'POO, automatización, pandas, NumPy, backend con Flask.' },
  { nombre: 'C++', nivel: 70, detalle: 'Programación estructurada y orientada a objetos, algoritmos, estructuras de datos.' },
  { nombre: 'R', nivel: 60, detalle: 'Análisis estadístico, visualización de datos, ggplot2.' },
  { nombre: 'PostgreSQL', nivel: 50, detalle: 'Joins, vistas, funciones, relaciones y normalización.' },
  { nombre: 'SQL', nivel: 78, detalle: 'Consultas, agrupaciones, subconsultas, optimización de bases relacionales.' },
  {nombre: 'React', nivel: 65, detalle: 'Componentes, estado, eventos, hooks, routing.'}
];

export function HabilidadesTecnicas() {
  const [modal, setModal] = useState(null);

  return (
    <div className="card">
      <h2>Habilidades Técnicas</h2>
      <p className="text-secondary mb-6">
        Mi experiencia técnica abarca desde el diseño web hasta la programación en múltiples lenguajes 
        y el análisis de datos.
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        {habilidades.map((hab, index) => (
          <div 
            key={index} 
            className="progress-container cursor-pointer"
            onClick={() => setModal(hab)}
          >
            <div className="progress-header">
              <span className="progress-label">{hab.nombre}</span>
              <span className="progress-value">{hab.nivel}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${hab.nivel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modal.nombre}</h3>
            <p className="mt-4">{modal.detalle}</p>
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

export default HabilidadesTecnicas;