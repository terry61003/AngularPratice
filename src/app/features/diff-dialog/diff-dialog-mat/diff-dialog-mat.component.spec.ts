import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffDialogMatComponent } from './diff-dialog-mat.component';

describe('DiffDialogMatComponent', () => {
  let component: DiffDialogMatComponent;
  let fixture: ComponentFixture<DiffDialogMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffDialogMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffDialogMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
