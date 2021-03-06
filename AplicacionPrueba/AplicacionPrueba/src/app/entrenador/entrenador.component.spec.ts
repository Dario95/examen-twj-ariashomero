import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorComponent } from './Entrenador.component';

describe('EntrenadorComponent', () => {
  let component: EntrenadorComponent;
  let fixture: ComponentFixture<EntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
