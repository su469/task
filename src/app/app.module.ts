import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AppComponent } from './app.component';
import { SortPipe } from './pipe/sort.pipe';






@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
