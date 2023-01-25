import React from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import logo from '../../assets/logo.svg';

import styles from './header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />

      <form className={styles.newTaskForm}>
        <input placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header >
  )
}

export { Header }