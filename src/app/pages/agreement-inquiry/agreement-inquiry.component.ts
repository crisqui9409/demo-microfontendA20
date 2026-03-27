import { Component, inject } from '@angular/core';
import { MyIpService } from '../../services/my-ip.service';

@Component({
  selector: 'bocc-agreement-inquiry',
  imports: [],
  templateUrl: './agreement-inquiry.component.html',
  styleUrl: './agreement-inquiry.component.scss',
})
export class AgreementInquiryComponent {
   private myIpService = inject(MyIpService);

  ngOnInit(): void {
    this.myIpService.getMyIp().subscribe((resp) => {
      console.log('ip micro: ', resp);
    });
  }
}
