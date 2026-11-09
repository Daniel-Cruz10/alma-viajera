import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quinceaneras } from './quinceaneras';

describe('Quinceaneras', () => {
  let component: Quinceaneras;
  let fixture: ComponentFixture<Quinceaneras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quinceaneras],
    }).compileComponents();

    fixture = TestBed.createComponent(Quinceaneras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
