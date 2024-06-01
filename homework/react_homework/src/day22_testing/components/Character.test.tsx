import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Character from './Character';

describe('<Character />', () => {
  test('shows fields for "name" and "culture"', async () => {
    const view = render(<Character />);
    view.getByText('name').toBeInTheDocument();
  });
  // test('shows culture if it is present', async () => {});
  // test('shows alias if no name is present', async () => {});
  // test('shows how many books this characters made an appearance in', async () => {});
});
