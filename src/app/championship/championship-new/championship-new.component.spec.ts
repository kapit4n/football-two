import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipNewComponent } from './championship-new.component';

describe('ChampionshipNewComponent', () => {
  let component: ChampionshipNewComponent;
  let fixture: ComponentFixture<ChampionshipNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show save a new championship', () => {
    // Query the fields to fill
    // Fill data with valid data
    // Click on save button to save the championship
    // Verify that the data have been saved
    expect(component).toBeTruthy();
  });

});
