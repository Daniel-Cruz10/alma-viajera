import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Solteros } from './solteros';

describe('Solteros', () => {
  let component: Solteros;
  let fixture: ComponentFixture<Solteros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solteros],
    }).compileComponents();

    fixture = TestBed.createComponent(Solteros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
