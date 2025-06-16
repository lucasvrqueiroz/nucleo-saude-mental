import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('nsm.db');

export const createTables = () => {
  db.transaction(tx => {

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT UNIQUE,
        senha TEXT
      );`
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS humor_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        humor TEXT NOT NULL,
        date TEXT NOT NULL
      );`
    );
  });
};

export const inserirUsuario = (nome, email, senha, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);`,
      [nome, email, senha],
      (_, result) => callback(true),
      (_, error) => {
        console.log("Erro ao inserir usuário:", error);
        callback(false);
      }
    );
  });
};

export const buscarUsuario = (email, senha, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM usuarios WHERE email = ? AND senha = ?;`,
      [email, senha],
      (_, { rows }) => {
        callback(rows.length > 0 ? rows._array[0] : null);
      },
      (_, error) => {
        console.log("Erro ao buscar usuário:", error);
        callback(null);
      }
    );
  });
};

export const buscarUsuarioPorId = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM usuarios WHERE id = ?;`,
      [id],
      (_, { rows }) => {
        callback(rows.length > 0 ? rows._array[0] : null);
      },
      (_, error) => {
        console.log("Erro ao buscar usuário por ID:", error);
        callback(null);
      }
    );
  });
};

export const inserirHumor = (userId, humor, callback) => {
  const now = new Date().toISOString();
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO humor_history (user_id, humor, date) VALUES (?, ?, ?);`,
      [userId, humor, now],
      (_, result) => {
        console.log("Humor registrado com sucesso.");
        callback(true);
      },
      (_, error) => {
        console.log("Erro ao registrar humor:", error);
        callback(false);
      }
    );
  });
};

export const buscarHistoricoHumor = (userId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM humor_history WHERE user_id = ? ORDER BY date DESC;`,
      [userId],
      (_, { rows }) => {
        callback(rows._array);
      },
      (_, error) => {
        console.log("Erro ao buscar histórico de humor:", error);
        callback([]);
      }
    );
  });
};
