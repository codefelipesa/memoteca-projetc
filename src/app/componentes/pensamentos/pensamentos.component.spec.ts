import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentosComponent } from './pensamentos.component';

describe('PensamentosComponent', () => {
  let component: PensamentosComponent;
  let fixture: ComponentFixture<PensamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensamentosComponent]
    });
    fixture = TestBed.createComponent(PensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
