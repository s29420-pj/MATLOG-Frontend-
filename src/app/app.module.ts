import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    EditProfileComponent,
  ],
  providers: [],
})
export class AppModule {}
