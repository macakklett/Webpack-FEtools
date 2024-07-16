import { createLogger } from '../logger';

it('should be return stored logs', () => {
  const logger = createLogger('user login');

  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = createLogger('user login');
  logger.log('logged success');

  expect(logger.getLogs()).toEqual(['log - user login - logged success']);
});

it('should save errors', () => {
  const logger = createLogger('user login');
  logger.error('logged failed');

  expect(logger.getLogs()).toEqual(['error - user login - logged failed']);
});
