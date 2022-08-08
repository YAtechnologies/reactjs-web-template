import { getApi } from '../../api/get.api';

export async function fetchUsers() {
  const data = await getApi('users');
  const response = {
    users: data,
  };

  return response;
}
