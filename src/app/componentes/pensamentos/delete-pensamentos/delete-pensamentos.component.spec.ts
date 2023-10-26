import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePensamentosComponent } from './delete-pensamentos.component';

describe('DeletePensamentosComponent', () => {
  let component: DeletePensamentosComponent;
  let fixture: ComponentFixture<DeletePensamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePensamentosComponent]
    });
    fixture = TestBed.createComponent(DeletePensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
