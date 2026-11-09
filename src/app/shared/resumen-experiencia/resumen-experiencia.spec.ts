import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenExperiencia } from './resumen-experiencia';

describe('ResumenExperiencia', () => {
  let component: ResumenExperiencia;
  let fixture: ComponentFixture<ResumenExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenExperiencia],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenExperiencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
