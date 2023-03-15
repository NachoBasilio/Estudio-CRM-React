import { useNavigate } from "react-router-dom"



export default function Cliente({cliente}) {
    const {nombre, empresa, email, telefono, id} = cliente
    const navigate = useNavigate()

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">EMAIL:</span> {email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">TELEFONO:</span> {telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button 
                type="button"
                className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                onClick={()=>{navigate(`/clientes/${id}/editar`)}}
                >editar</button>
                <button 
                type="button"
                className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >eliminar</button>
            </td>
        </tr>
  )
}
