import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const repositories = [
      { name: 'ReactJS-HOL' },
      { name: 'Angular-HOL' },
      { name: 'Microservices-HOL' }
    ];

    axios.get.mockResolvedValue({
      data: repositories
    });

    const response = await GitClient.getRepositories('techiesyed');

    expect(response.data).toEqual(repositories);
    expect(response.data[0].name).toBe('ReactJS-HOL');
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/techiesyed/repos'
    );
  });
});