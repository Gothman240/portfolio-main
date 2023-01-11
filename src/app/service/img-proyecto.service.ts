import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgProyectoService {

  url: string = "";
  imgRef: string = "";

  constructor(private storage: Storage) { }

  public uploadImg($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'proyectos/' + name)
    uploadBytes(imgRef, file)
    .then(response => {this.imgRef = response.ref.fullPath;
      this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imgagesRef = ref(this.storage, 'proyectos')
    list(imgagesRef)
    .then(async response =>{
      for(let item of response.items){
        if(this.imgRef == item.fullPath){
          this.url = await getDownloadURL(item);
          console.log("La url es:" + this.url);
        }
      }
    } )
    .catch(error => console.log(error))
  }
}
