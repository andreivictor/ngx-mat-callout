import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FileLoaderService } from './file-loader.service';

describe('FileLoaderService', () => {
  let service: FileLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(FileLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
