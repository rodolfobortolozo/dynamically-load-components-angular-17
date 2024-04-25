import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('Modal2Service', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
