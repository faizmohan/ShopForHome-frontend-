import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysideComponent } from './categoryside.component';

describe('CategorysideComponent', () => {
  let component: CategorysideComponent;
  let fixture: ComponentFixture<CategorysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
