'use strict'

const Proyecto = use('App/Models/Proyecto');
const Tarea = use('App/Models/Tarea');
const Autorizacion = use('App/Services/AutorizacionService');

class TareaController {
    async create ({auth, request, params}){
        const user = await auth.getUser();
        const{descripcion} = request.all();
        const {id} = parms;
        const proyecto = await Proyecto.find(id);
        Autorizacion.verficarPermiso(proyecto,user);
        const tarea = new Tarea();
        tarea.fill({
            description
        });
        await proyecto.tareas().save(tarea);
        return tarea;   
    }
}

module.exports = TareaController
