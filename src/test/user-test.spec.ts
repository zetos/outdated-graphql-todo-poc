import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
import { suite, test } from "mocha-typescript";
import testFunction from "../app";
chai.use(chaiAsPromised);

@suite("User Test class")
class UserTests {

  @test("testFunction Test - It works fine")
  public testFunction(done) {
    chai.expect(testFunction()).to.deep.equal("Lucifer and Beelzebub are legends");
    done();
  }
}