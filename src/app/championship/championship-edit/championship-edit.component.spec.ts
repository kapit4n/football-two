import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipEditComponent } from './championship-edit.component';

describe('ChampionshipEditComponent', () => {
  let component: ChampionshipEditComponent;
  let fixture: ComponentFixture<ChampionshipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
