import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private isLoaded = false;
  //Clave generada desde google cloud para la API
  private apiKey = 'AIzaSyATHPvV8ab2wwOn8m0iyfOz7NrG72Ty83I'; 

  loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isLoaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        this.isLoaded = true;
        resolve();
      };

      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }
}