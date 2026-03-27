import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementInquiryComponent } from './agreement-inquiry.component';

describe('AgreementInquiryComponent', () => {
  let component: AgreementInquiryComponent;
  let fixture: ComponentFixture<AgreementInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreementInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
