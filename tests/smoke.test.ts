import { describe, expect, it } from 'bun:test';
import { apiDocs } from '../src/index';

describe('@manicjs/api-docs', () => {
  it('returns a plugin descriptor', () => {
    const plugin = apiDocs();
    expect(plugin.name).toBe('@manicjs/api-docs');
    expect(typeof plugin.configureServer).toBe('function');
  });
});
