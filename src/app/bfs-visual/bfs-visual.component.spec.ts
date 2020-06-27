import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsVisualComponent } from './bfs-visual.component';

describe('BfsVisualComponent', () => {
  let component: BfsVisualComponent;
  let fixture: ComponentFixture<BfsVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfsVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfsVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
