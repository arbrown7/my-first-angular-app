import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Server } from './server';

describe('Server', () => {
  let component: Server;
  let fixture: ComponentFixture<Server>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Server]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Server);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
