'use strict'

const Project = use('App/Models/Proyecto');
const Autorizacion = use('App/Services/AutorizacionService');

class ProyectoController {
    async index({auth}){
        const user = await auth.getUser();
        return await user.proyectos().fetch();
    }

    async create({auth, request}){
        const user = await auth.getUser();
        const {nombre} = request.all();
        const project = new Project();
        project.fill({
            nombre
        });
        await user.proyectos().save(project);
        return project;
    }

    async destroy({auth,response,params}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        Autorizacion.verificarPermiso(project,user);
        await project.delete();
        return project;
        
    }

    async update({auth, params, request}){
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        Autorizacion.verificarPermiso(project, user);
        project.merge(request.only('nombre'));
        await project.save();
        return project;
    }
}

module.exports = ProyectoController
