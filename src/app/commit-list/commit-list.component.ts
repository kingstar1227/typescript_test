import { Component, OnInit } from '@angular/core';
import { CommitService } from '../commit.service';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  constructor(private commitService: CommitService) { }

  commitList = [];
  page = 1;
  pageSize = 5;
  collectionSize = this.commits.length || 0;

  get commits(): any[] {
    return this.commitList.map((commit, i) => ({id: i + 1, ...commit}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit() {
    this.commitService.listCommits().subscribe((commits: any[]) => {
      this.collectionSize = commits.length;
      this.commitList = commits;
    })
  }

}
