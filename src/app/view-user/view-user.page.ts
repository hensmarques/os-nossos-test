import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../services/data.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {
  public user!: User;
  
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.user = await this.data.getUserById(parseInt(id));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Usuários' : '';
  }

  formatDate(date: string | Date) {
    return (new Date(date)).toLocaleDateString()
  }
}
