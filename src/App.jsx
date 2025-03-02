import { useState } from "react";

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"
import styles from "./NomeUsuario.module.css";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <div className={styles.nomeUsuario}>
        <label>Nome de usuário do github:</label>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

    </>
  )
}

export default App
