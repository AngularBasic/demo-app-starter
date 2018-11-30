import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  it('create an instance', () => {
    const pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });
  it('should not modify non-array', () => {
    const pipe = new JoinPipe();
    const result = pipe.transform('hello');
    expect(result).toBe('hello');
  });
  it('should convert array to string', () => {
    const pipe = new JoinPipe();
    const result = pipe.transform([1, 2, 3]);
    expect(result).toBe('1, 2, 3');
  });
  it('should convert array to string with given separator', () => {
    const pipe = new JoinPipe();
    const result = pipe.transform([1, 2, 3], '+');
    expect(result).toBe('1+2+3');
  });
  it('should not throw error on undefined input', () => {
    const pipe = new JoinPipe();
    const result = pipe.transform(null);
    expect(result).toBe(null);
  });
});
