import React from 'react';
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // initialize cos and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()).then((data) => {
            // redirect
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
        }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviçoes</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject;