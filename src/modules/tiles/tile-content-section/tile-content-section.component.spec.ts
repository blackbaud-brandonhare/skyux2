import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import {
  beforeEach,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';

import { TestComponent } from './fixtures';

describe('Tile content section component', () => {
  let tcb: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (_tcb: TestComponentBuilder) => {
    tcb = _tcb;
  }));

  it('should render the section content in the expected element', () => {
    return tcb
      .createAsync(TestComponent)
      .then((fixture: ComponentFixture<TestComponent>) => {
        let el = fixture.nativeElement;

        fixture.detectChanges();

        expect(
          el.querySelectorAll('.sky-tile-content-section .test-content').length
        ).toBe(1);
      }
    );
  });
});
