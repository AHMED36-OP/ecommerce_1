import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudectComponent } from './proudect.component';

describe('ProudectComponent', () => {
  let component: ProudectComponent;
  let fixture: ComponentFixture<ProudectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudectComponent]
    });
    fixture = TestBed.createComponent(ProudectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
