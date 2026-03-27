import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/agreement-inquiry/agreement-inquiry.component').then((m) => {
        return m.AgreementInquiryComponent;
      }),
  },
];
