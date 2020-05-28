import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewFormComponent } from './product-new-form.component';

describe('ProductNewFormComponent', () => {
  let component: ProductNewFormComponent;
  let fixture: ComponentFixture<ProductNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
