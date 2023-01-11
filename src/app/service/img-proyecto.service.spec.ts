import { TestBed } from '@angular/core/testing';

import { ImgProyectoService } from './img-proyecto.service';

describe('ImgProyectoService', () => {
  let service: ImgProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
