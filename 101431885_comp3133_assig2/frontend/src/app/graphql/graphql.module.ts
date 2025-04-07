// src/app/graphql/graphql.module.ts
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

// Update this URL to match your backend GraphQL endpoint
const uri = 'http://localhost:4000/graphql'; 

export function createApollo(httpLink: HttpLink) {
  // Auth link to attach the JWT token to requests
  const auth = setContext((_, { headers }) => {
    // Get the authentication token from local storage
    const token = localStorage.getItem('token');
    
    // Return the headers with or without the token
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    };
  });

  // Http link to connect to the GraphQL endpoint
  const http = httpLink.create({ uri });
  
  // Combine the links
  const link = ApolloLink.from([auth, http]);

  return {
    link,
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule { }