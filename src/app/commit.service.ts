import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private http:HttpClient) { }

  listCommits(){
    return this.http.get("https://api.github.com/repos/kingstar1227/typescript_test/commits");
  }
}
