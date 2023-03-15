const url = import.meta.env.VITE_API_URL

export async function obtenerClientes(){   
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    return resultado
}

export async function obtenerCliente(id){   
    const respuesta = await fetch(url+"/"+id)
    const resultado = await respuesta.json()

    return resultado
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(datos, id){
    try {
        const respuesta = await fetch(url+"/"+id, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(url+"/"+id, {
            method: 'DELETE',
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}