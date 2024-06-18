import { statement } from "../src/statement";
import fs from "fs";

test("example statement", () => {
  const invoice = JSON.parse(fs.readFileSync("test/invoice.json", "utf8"));
  const plays = JSON.parse(fs.readFileSync("test/plays.json", "utf8"));
  expect(statement(invoice, plays)).toMatchSnapshot();
});

test("statement with new play types", () => {
  const invoice = JSON.parse(
    fs.readFileSync("test/invoice_new_plays.json", "utf8")
  );
  const plays = JSON.parse(fs.readFileSync("test/new_plays.json", "utf8"));
  expect(() => {
    statement(invoice, plays);
  }).toThrow(/unknown type/);
});

function invoice() {
  return {
    "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 55
        },
        {
          "playID": "as-like",
          "audience": 35
        },
        {
          "playID": "othello",
          "audience": 40
        }
      ]
    };
}
