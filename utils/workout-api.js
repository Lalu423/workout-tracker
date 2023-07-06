const workout = async () => {
  const url = 'https://wger.de/api/v2/exercise';
  const headers = { Authorization: 'Token 56c76d8178d0eee843d444734daf71278e39d1ab' };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch workout data: ' + error.message);
  }
};


module.exports = { workout }





