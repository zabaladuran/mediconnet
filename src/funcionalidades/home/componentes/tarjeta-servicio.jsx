export function ServicioTarjeta({ titulo, descripcion, className }) {
  return (
    <div className="border w-[324px] h-[198px] flex justify-center items-center flex-col">
      <h1 className="font-bold">{titulo}</h1>
      <p className={className}>{descripcion}</p>
    </div>
  );
}
