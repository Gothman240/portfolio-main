import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRedesComponent } from './new-redes.component';

describe('NewRedesComponent', () => {
  let component: NewRedesComponent;
  let fixture: ComponentFixture<NewRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
