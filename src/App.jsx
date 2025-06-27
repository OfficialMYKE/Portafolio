import NombreApellido from './components/NombreApellido'
import DatosPersonales from './components/DatosPersonales'
import Estudios from './components/Estudios'
import CursosRealizados from './components/CursosRealizados'
import HabilidadesBlandas from './components/HabilidadesBlandas'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import Contacto from './components/Contacto'
import './App.css'

function App() {
  return (
    <>
      <NombreApellido />
      <DatosPersonales />
      <Estudios />
      <CursosRealizados />
      <HabilidadesBlandas />
      <HabilidadesTecnicas />
      <Contacto />
    </>
  )
}

export default App

