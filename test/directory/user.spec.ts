import { User } from "../../src/directory";
import dotenv from "dotenv";
describe("User Manager", () => {
  let user: User;
  beforeEach(() => {
    dotenv.config();
    return (user = new User({
      corpId: process.env.CORPID,
      corpSecret: process.env.CORP_SECRET,
    }));
  });
  it("Get User Info", async () => {
    const ret = await user.get("kaireewu");
    console.log(ret.data);
    expect(ret.data.english_name).toEqual("aidenxiong");
  });
});