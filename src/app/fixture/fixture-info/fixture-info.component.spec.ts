import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureInfoComponent } from './fixture-info.component';

describe('FixtureInfoComponent', () => {
  let component: FixtureInfoComponent;
  let fixture: ComponentFixture<FixtureInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
