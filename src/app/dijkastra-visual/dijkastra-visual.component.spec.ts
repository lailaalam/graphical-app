import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DijkastraVisualComponent } from './dijkastra-visual.component';

describe('DijkastraVisualComponent', () => {
  let component: DijkastraVisualComponent;
  let fixture: ComponentFixture<DijkastraVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DijkastraVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DijkastraVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
