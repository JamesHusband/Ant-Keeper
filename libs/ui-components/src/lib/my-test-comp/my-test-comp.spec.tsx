import { render } from '@testing-library/react';

import MyTestComp from './my-test-comp';

describe('MyTestComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyTestComp />);
    expect(baseElement).toBeTruthy();
  });
});
