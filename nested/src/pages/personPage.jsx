import { Link } from "react-router-dom";

function PersonPage() {

    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full space-y-6">
            <Link to={"/menu"}>
            Back
            </Link>
            {/* Título y botón de agregar */}
            <div className="pt-4 flex items-center justify-between">
              <h1 className="text-4xl font-extrabold text-gray-900">Personas</h1>
            </div>
    
            {/* Barra de búsqueda y filtros */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="Buscar personas..."
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-700">Activos</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-700">Inactivos</span>
                </label>
              </div>
            </div>
            <button className="px-4 py-2 font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Agregar Persona
            </button>
            {/* Tabla de resultados */}
            <div className="overflow-x-auto bg-white shadow-md">
              <table className="min-w-full table-fixed border-collapse border border-slate-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">ID</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950 uppercase tracking-wider">Nombre</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Apellido</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Edad</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Sexo</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Dirección</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Teléfono</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Correo</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Seguridad Social</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Patología</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Fecha de Registro</th>
                    <th className="px-4 py-2 border border-slate-300 text-left text-xs font-medium text-gray-950  uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white ">
                  {/* Ejemplo de un registro de persona */}
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500">12345</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Juan</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Pérez</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">30</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">M</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Av. Siempre Viva 123</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">555-1234</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">juan.perez@example.com</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Yes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Diabetes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">2023-08-15</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                        <button className="mr-2 text-primary hover:text-primary-dark">Editar</button>| 
                        <button className="mx-2 text-red-600 hover:text-red-800">Eliminar</button>|
                        <button className="ml-2 text-gray-600 hover:text-gray-800">Ver más</button>
                    </td>
                  </tr>
                  {/* Fin de un registro de persona */}
                  {/* Ejemplo de un registro de persona */}
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500">12345</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Juan</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Pérez</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">30</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">M</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Av. Siempre Viva 123</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">555-1234</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">juan.perez@example.com</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Yes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Diabetes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">2023-08-15</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                      <button className="mr-2 text-primary hover:text-primary-dark">Editar</button>| 
                      <button className="mx-2 text-red-600 hover:text-red-800">Eliminar</button>|
                      <button className="ml-2 text-gray-600 hover:text-gray-800">Ver más</button>
                    </td>
                  </tr>
                  {/* Fin de un registro de persona */}
                  {/* Ejemplo de un registro de persona */}
                  <tr className="divide-x divide-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-500">12345</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Juan</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Pérez</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">30</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">M</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Av. Siempre Viva 123</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">555-1234</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">juan.perez@example.com</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Yes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">Diabetes</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">2023-08-15</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
                      <button className="mr-2 text-primary hover:text-primary-dark">Editar</button>| 
                      <button className="mx-2 text-red-600 hover:text-red-800">Eliminar</button>|
                      <button className="ml-2 text-gray-600 hover:text-gray-800">Ver más</button>
                    </td>
                  </tr>
                  {/* Fin de un registro de persona */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}

export {PersonPage};