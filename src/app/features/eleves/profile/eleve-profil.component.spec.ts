import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveProfilComponent } from './eleve-profil.component';

describe('EleveProfilComponent', () => {
  let component: EleveProfilComponent;
  let fixture: ComponentFixture<EleveProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleveProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
