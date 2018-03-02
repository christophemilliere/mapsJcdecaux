import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { JcdecauxService } from './service/jcdecaux.service';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'apiGoogleMap',
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [
    JcdecauxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
