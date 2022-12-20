import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailcontentComponent } from './mailcontent.component';

describe('MailcontentComponent', () => {
  let component: MailcontentComponent;
  let fixture: ComponentFixture<MailcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
