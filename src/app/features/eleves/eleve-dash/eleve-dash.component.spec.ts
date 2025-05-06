import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveDashComponent } from './eleve-dash.component';

describe('EleveDashComponent', () => {
  let component: EleveDashComponent;
  let fixture: ComponentFixture<EleveDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleveDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
