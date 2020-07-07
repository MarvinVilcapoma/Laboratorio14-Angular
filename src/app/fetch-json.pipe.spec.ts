import { FetchJsonPipe } from './fetch-json.pipe';

describe('FetchJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new FetchJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
