import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})

export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  read_Students() {
    return this.firestore.collection('Users').snapshotChanges();
  }

  read_Students_id(id) {
    return this.firestore.collection('Users').doc(id).valueChanges();
  }

  create_NewDelivery(record) {
    return this.firestore.collection('Delivery').add(record);
  }

  create_NewServico(record) {
    return this.firestore.collection('Servico').add(record);
  }

  create(record, colecao) {
    return this.firestore.collection(colecao).add(record);
  }

  read_services() {
    return this.firestore.collection('Servico').snapshotChanges();
  }
  read_delivery() {
    return this.firestore.collection('Delivery').snapshotChanges();
  }
  read_EntregadorCliente() {
    return this.firestore.collection('EntregadorCliente').snapshotChanges();
  }

  delete(record_id,colecao) {
    this.firestore.doc(colecao+'/' + record_id).delete();
    console.log("RecordID:"+ record_id);
    console.log("COLECAO:"+colecao);
  }

  read_id(record_id,colecao) {
    return this.firestore.collection('Delivery').doc(record_id).valueChanges();
  }

  testegrava(record){
    return this.firestore.collection('Teste').add(record);

  }
  
}