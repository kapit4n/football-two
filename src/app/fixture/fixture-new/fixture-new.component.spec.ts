import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureNewComponent } from './fixture-new.component';

describe('FixtureNewComponent', () => {
  let component: FixtureNewComponent;
  let fixture: ComponentFixture<FixtureNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
