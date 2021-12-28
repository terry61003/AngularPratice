import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffDialogHomeComponent } from './diff-dialog-home.component';

describe('DiffDialogHomeComponent', () => {
  let component: DiffDialogHomeComponent;
  let fixture: ComponentFixture<DiffDialogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffDialogHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffDialogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
