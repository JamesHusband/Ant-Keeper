import { render } from '@testing-library/react';

import MyTestComp from '.';

describe('MyTestComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyTestComp />);
    expect(baseElement).toBeTruthy();
  });
});
