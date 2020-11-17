import SQLite from 'react-native-sqlite-storage'

export class BaseManager {
  constructor() {
    this.sqlite = SQLite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
    this.sqlite.openDatabase({
      name: "day18",
      location: "default"
    }).then((db) => {
      this.dbInstance = db;
    })
  }

  createTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql(
          "CREATE TABLE users (" +
            "id	INTEGER," +
            "fullname	TEXT," +
            "username	TEXT," +
            "password	TEXT," +
            "level	TEXT," +
            "allow_camera	TEXT," +
            "picture_file	TEXT," +
            "PRIMARY KEY(id AUTOINCREMENT))"
      ).then((val) => {
        resolve(true)
      }).catch((err) => {
        console.log("error in base manager -> ", err);
        reject(false)
      })
    });
  }

  addData(fullname, username, password, level) {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql(
        "INSERT INTO users (fullname, username, password, level, allow_camera)" +
        `VALUES('${fullname}','${username}','${password}','${level}','N')`
      ).then((username) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  addDataHardcode() {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql(
        "INSERT INTO users (fullname, username, password, level, allow_camera)" +
        `VALUES('dendi pradika', 'dendi', '211', 'HRD', 'N')`
      ).then((username) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  getTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql(
        "SELECT * FROM users"
      ).then(([values]) => {
        var array = [];
        for (let index = 0; index < values.rows.length; index++) {
          const element = values.rows.item(index);
          array.push(element);
        }
        resolve(array);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql('DELETE FROM users WHERE id = ?', [id])
      .then((val) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  allowCamera(id) {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql('UPDATE users SET allow_camera=? WHERE id = ?', ['Y', id])
      .then((val) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  savePicture(id, nameFile) {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql('UPDATE users SET picture_file=? WHERE id = ?', [nameFile, id])
      .then((val) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }

  dropTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql(
        "DROP TABLE users"
      ).then((val) => {
        resolve(true);
      }).catch((err) => {
        reject(false);
      })
    });
  }
}