function Tarjeta({ titulo, imagen, descripcion, botonTexto, accionBoton }) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>

      <img
        src={imagen}
        alt={titulo}
        className="imagen"
      />

      <p>{descripcion}</p>

      <button onClick={accionBoton}>
        {botonTexto}
      </button>
    </div>
  )
}

export default Tarjeta