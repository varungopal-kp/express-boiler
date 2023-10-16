const request = require("supertest");
const axios = require("axios");
const { getToken } = require("../helpers/testTokenHandler");

describe("Authenticated API Route", () => {
  it("should return success 200 for contacts all api", async () => {
    const token = await getToken();

    const apiResponse = await axios.get(
      `${process.env.DOMAIN_URL}/api/contacts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    expect(apiResponse.status).toBe(200);
  });
});
