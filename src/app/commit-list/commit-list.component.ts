import { Component, OnInit } from '@angular/core';
import { CommitService } from '../commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  constructor(private commitService: CommitService) { }
  commits = [];

  ngOnInit() {

  }

}
