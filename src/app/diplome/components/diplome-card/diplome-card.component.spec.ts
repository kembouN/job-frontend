import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeCardComponent } from './diplome-card.component';

describe('DiplomeCardComponent', () => {
  let component: DiplomeCardComponent;
  let fixture: ComponentFixture<DiplomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
