import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPollComponent } from './create-new-poll.component';

describe('CreateNewPollComponent', () => {
  let component: CreateNewPollComponent;
  let fixture: ComponentFixture<CreateNewPollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewPollComponent]
    });
    fixture = TestBed.createComponent(CreateNewPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
