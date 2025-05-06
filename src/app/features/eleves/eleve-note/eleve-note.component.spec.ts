import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveNoteComponent } from './eleve-note.component';

describe('EleveNoteComponent', () => {
  let component: EleveNoteComponent;
  let fixture: ComponentFixture<EleveNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EleveNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
