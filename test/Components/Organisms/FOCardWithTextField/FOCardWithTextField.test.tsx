/**
 * @jest-environment jsdom
 */

import * as React from "react";
import "@testing-library/jest-dom";
import { FATextField } from "@Atoms";
import { FOCardWithTextField } from "@Organisms";

import { render } from "@testing-library/react";

describe("FOCardWithTextField", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FOCardWithTextField
        testID="card-textfield-test"
        buttonSubmitLabel="submit"
        title="Forgot Password"
        subheader="Please type your company email address and we’ll send an email notification with reset link to change your password."
        form={
          <FATextField
            css={{}}
            testID="input-test"
            required
            fullWidth
            variant="standard"
            type="email"
            label={"Company email"}
            placeholder="Input company email"
          />
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
