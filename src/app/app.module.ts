import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommitListComponent } from './commit-list/commit-list.component';

const routes: Routes = [
  { path: '', component: CommitListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CommitListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
