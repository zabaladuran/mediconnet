import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar as CalendarIcon,
  Stethoscope,
  Clock,
  Info,
  HelpCircle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
import { Calendar } from "../../../components/ui/calendar";

export default function FormularioCitasPaciente() {
  const [form, setForm] = useState({
    nombre: "",
    identificacion: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert("Formulario enviado");
  };

  // Opciones de ejemplo
  const tiposConsulta = ["Consulta General", "Control", "Especialista"];
  const especialidades = ["Medicina General", "Pediatría", "Cardiología"];
  const doctores = [
    "Dr. García Martínez",
    "Dra. Rodríguez López",
    "Dr. Sánchez Pérez",
  ];
  const horas = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

  // Estado para los nuevos campos
  const [detalles, setDetalles] = useState({
    tipoConsulta: "",
    especialidad: "",
    doctor: "",
    fecha: null,
    hora: "",
  });

  const handleDetalles = (campo, valor) => {
    setDetalles({ ...detalles, [campo]: valor });
  };

  // Estado para los campos adicionales
  const [motivo, setMotivo] = useState("");
  const [primeraConsulta, setPrimeraConsulta] = useState(false);
  const [alergias, setAlergias] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-white">
      <h1 className="text-3xl font-bold text-center mb-2">
        Agendar Cita Médica
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Complete el formulario para programar su consulta
      </p>
      <Card className="w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader className="flex flex-row items-center gap-2 mb-4">
            <User className="text-gray-700" />
            <CardTitle className="text-lg">Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre Completo</Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ingrese su nombre completo"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="identificacion">Número de Identificación</Label>
              <Input
                id="identificacion"
                name="identificacion"
                type="text"
                value={form.identificacion}
                onChange={handleChange}
                placeholder="Ingrese su número de identificación"
                required
                className="mt-1"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <Label htmlFor="telefono">Teléfono</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Phone size={18} />
                  </span>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Ingrese su teléfono"
                    required
                    className="pl-10 mt-1"
                  />
                </div>
              </div>
              <div className="w-full">
                <Label htmlFor="correo">Correo Electrónico</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <Mail size={18} />
                  </span>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="Ingrese su correo"
                    required
                    className="pl-10 mt-1"
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#16a34a] text-white font-semibold mt-4"
            >
              Agendar Cita
            </Button>
          </CardContent>
        </form>
      </Card>
      <Card className="w-full max-w-2xl mt-8">
        <CardHeader className="flex flex-row items-center gap-2 mb-4">
          <Stethoscope className="text-gray-700" />
          <CardTitle className="text-lg">Detalles de la Cita</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Tipo de Consulta */}
          <div>
            <Label>Tipo de Consulta</Label>
            <Select
              value={detalles.tipoConsulta}
              onValueChange={(v) => handleDetalles("tipoConsulta", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione el tipo de consulta" />
              </SelectTrigger>
              <SelectContent>
                {tiposConsulta.map((tipo) => (
                  <SelectItem key={tipo} value={tipo}>
                    {tipo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Especialidad Médica */}
          <div>
            <Label>Especialidad Médica</Label>
            <Select
              value={detalles.especialidad}
              onValueChange={(v) => handleDetalles("especialidad", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione la especialidad" />
              </SelectTrigger>
              <SelectContent>
                {especialidades.map((esp) => (
                  <SelectItem key={esp} value={esp}>
                    {esp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Doctor */}
          <div>
            <Label>Doctor</Label>
            <Select
              value={detalles.doctor}
              onValueChange={(v) => handleDetalles("doctor", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione el doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctores.map((doc) => (
                  <SelectItem key={doc} value={doc}>
                    {doc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Fecha de la Cita */}
          <div>
            <Label className="mb-2 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" /> Fecha de la Cita
            </Label>
            <Calendar
              mode="single"
              selected={detalles.fecha}
              onSelect={(date) => handleDetalles("fecha", date)}
              className="rounded-md border"
            />
          </div>
          {/* Hora de la Cita */}
          <div>
            <Label className="mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Hora de la Cita
            </Label>
            <Select
              value={detalles.hora}
              onValueChange={(v) => handleDetalles("hora", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione la hora" />
              </SelectTrigger>
              <SelectContent>
                {horas.map((hora) => (
                  <SelectItem key={hora} value={hora}>
                    {hora}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl mt-8">
        <CardHeader className="flex flex-row items-center gap-2 mb-4">
          <Info className="text-gray-700" />
          <CardTitle className="text-lg">Información Adicional</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Motivo de la Consulta */}
          <div>
            <Label htmlFor="motivo">Motivo de la Consulta</Label>
            <textarea
              id="motivo"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              rows={3}
              placeholder="Describa brevemente el motivo de su consulta"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            />
          </div>
          {/* ¿Es su primera consulta? */}
          <div className="flex items-center gap-2">
            <input
              id="primeraConsulta"
              type="checkbox"
              checked={primeraConsulta}
              onChange={(e) => setPrimeraConsulta(e.target.checked)}
              className="accent-[#16a34a] w-5 h-5"
            />
            <Label htmlFor="primeraConsulta" className="cursor-pointer">
              ¿Es su primera consulta?
            </Label>
          </div>
          {/* Alergias o Condiciones Especiales */}
          <div>
            <Label htmlFor="alergias">Alergias o Condiciones Especiales</Label>
            <textarea
              id="alergias"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              rows={2}
              placeholder="Indique si tiene alergias o condiciones especiales"
              value={alergias}
              onChange={(e) => setAlergias(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>
      {/* Sección de ayuda */}
      <Card className="w-full max-w-2xl mt-8 bg-gray-50 border border-gray-200">
        <CardHeader className="flex flex-row items-center gap-2 mb-2">
          <HelpCircle className="text-gray-700" />
          <CardTitle className="text-lg">¿Necesita ayuda?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-2">
            Estamos aquí para asistirle en el proceso de agendar su cita
          </p>
          <div className="mb-2">
            <span className="font-semibold">Línea de atención:</span>{" "}
            0800-123-4567
          </div>
          <div className="mb-4">
            <span className="font-semibold">Horario:</span> Lunes a Viernes de
            8:00 AM a 8:00 PM
          </div>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
          >
            <HelpCircle className="w-4 h-4" /> Chat de Ayuda
          </Button>
        </CardContent>
      </Card>
      {/* Botón de confirmación */}
      <div className="w-full max-w-2xl flex flex-col items-center mt-8">
        <Button
          className="w-full bg-[#16a34a] text-white font-semibold py-2 rounded hover:bg-green-700"
          type="submit"
        >
          Confirmar Cita
        </Button>
        <span className="text-gray-500 text-sm mt-2">
          Recibirá un correo electrónico con la confirmación de su cita
        </span>
      </div>
    </div>
  );
}
