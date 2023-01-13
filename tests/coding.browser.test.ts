/*
 * @Author: Quarter
 * @Date: 2022-10-13 14:46:38
 * @LastEditors: Quarter
 * @LastEditTime: 2023-01-05 14:48:09
 * @FilePath: /universal-utils/tests/coding.browser.test.ts
 * @Description:
 */

import BUTILS from "browser";
import PublicKey from "./data/public-key";
import PrivateKey from "./data/private-key";
import { describe, expect, test } from "vitest";

describe("func RSAEncrypt And RSADecrypt", () => {
  test("encrypt and decrypt correct", () => {
    expect(
      BUTILS.Coding.RSADecrypt(
        PrivateKey,
        // eslint-disable-next-line max-len
        BUTILS.Coding.RSAEncrypt(PublicKey, "This is a test!"),
      ),
    ).toBe("This is a test!");
  });
});
