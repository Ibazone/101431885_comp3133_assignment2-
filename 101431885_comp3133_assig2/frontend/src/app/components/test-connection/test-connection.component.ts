// src/app/components/test-connection/test-connection.component.ts
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const TEST_QUERY = gql`
  query {
    getAllEmployees {
      id
      first_name
      last_name
      email
    }
  }
`;

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent implements OnInit {
  loading = true;
  error: any;
  employees: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: TEST_QUERY
    }).valueChanges.subscribe({
      next: (result: any) => {
        this.employees = result.data?.getAllEmployees || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
        console.error('GraphQL error:', err);
      }
    });
  }
}