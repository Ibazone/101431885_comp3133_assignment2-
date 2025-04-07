// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestConnectionComponent } from './components/test-connection/test-connection.component';


import { AppRoutingModule } from './app-routng.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    TestConnectionComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule is deprecated, use provideHttpClient instead
    GraphQLModule
  ],
  providers: [
    provideHttpClient()
  ],
  // Removed bootstrap array as AppComponent is a standalone component
})

export class AppModule { }

function provideHttpClient(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error('Function not implemented.');
}
