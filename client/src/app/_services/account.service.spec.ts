import { User } from './../_models/user';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AccountService } from './account.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('AccountService', () => {
  let service: AccountService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AccountService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login a user', () => {
    const resp: User = { username: 'john', token: 'ey123456' };
    const model = { username: 'john', password: '123456' };

    service.login(model).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
      },
    });

    const req = httpTestingController.expectOne(
      service.baseUrl + 'account/login'
    );
    expect(req.request.method).toEqual('POST');
    expect(req.request.body.username).toEqual('john');
    expect(req.request.body.password).toEqual('123456');

    req.flush({ payload: resp });
  });

  it('should logout a user', () => {
    pending();
  });

  it('should not login a non existant user', () => {
    pending();
  });

  it('should set the current user to local storage', () => {
    pending();
  });
});
