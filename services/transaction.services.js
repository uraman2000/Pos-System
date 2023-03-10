import { ipcRenderer } from "electron";

const table = "transaction";
export default class TransactionServices {
  async select() {
    return await ipcRenderer.invoke("SELECT", table);
  }
  async update(data) {
    await ipcRenderer.invoke("UPDATE", table, data);
  }
  async insertTrasaction(transaction, item) {
    await ipcRenderer.invoke("InsertTransanction", transaction, item);
  }

  async Upsert(data) {
    await ipcRenderer.invoke("UPSERT", table, data);
  }
  async insert(data) {
    await ipcRenderer.invoke("CREATE", table, data);
  }
  async delete(data) {
    await ipcRenderer.invoke("DELETE", table, data);
  }
}
