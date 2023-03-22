import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewUserPage } from './view-user.page';
import { ViewUserPageRoutingModule } from './view-user-routing.module';

describe('ViewUserPage', () => {
  let component: ViewUserPage;
  let fixture: ComponentFixture<ViewUserPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewUserPage],
      imports: [IonicModule.forRoot(), ViewUserPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
