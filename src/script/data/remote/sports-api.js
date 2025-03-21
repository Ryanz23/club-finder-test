const BASE_URL = 'https://sports-api.dicoding.dev';
 
class SportsApi {
  static async searchClub(query) {
    const response = await fetch(`${BASE_URL}/teams/search?t=${query}`);

    if (response.status >= 200 && response.status < 300) {
      const responseJson = await response.json();
      const { teams: clubs } = responseJson;

      if (clubs.length > 0) {
        return clubs;
      } else {
        throw new Error(`\`${query}\` is not found`);
      }
    } else {
      throw new Error(`Something went wrong`);
    }
  }
}
 
export default SportsApi;