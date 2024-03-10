import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialsCategoiresComponent } from './detials-categoires.component';

describe('DetialsCategoiresComponent', () => {
  let component: DetialsCategoiresComponent;
  let fixture: ComponentFixture<DetialsCategoiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetialsCategoiresComponent]
    });
    fixture = TestBed.createComponent(DetialsCategoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
