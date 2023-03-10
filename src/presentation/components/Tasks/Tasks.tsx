import React from 'react';

import styles from './tasks.module.css'

const Tasks: React.FC = () => {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>
    </section>
  )
}

export { Tasks }