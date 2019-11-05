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

/*  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }

  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  */  
}