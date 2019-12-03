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

  read_services() {
    return this.firestore.collection('Servico').snapshotChanges();
  }
  
}