import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyTaskPage } from './modify-task.page';

describe('ModifyTaskPage', () => {
  let component: ModifyTaskPage;
  let fixture: ComponentFixture<ModifyTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
