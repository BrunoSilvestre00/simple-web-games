import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {test} from "node:test";
import {runInNewContext} from "node:vm";

const template = readFileSync(new URL("../public/404.html", import.meta.url), "utf8");
const script = template.match(/<script>([\s\S]*?)<\/script>/)[1];

for (const basePath of ["/simple-web-games/", "/"]) {
    for (const route of ["tic-tac-toe", "genesis", "hangman", "minesweeper"]) {
        for (const suffix of ["", "/"]) {
            test(`legacy URL ${basePath}${route}${suffix} redirects to its hash route`, () => {
                let redirected;
                runInNewContext(
                    script.replace("<%= htmlWebpackPlugin.options.basePath %>", basePath),
                    {
                        location: {
                            pathname: `${basePath}${route}${suffix}`,
                            search: "?example=1",
                            replace: (url) => {
                                redirected = url;
                            }
                        }
                    }
                );
                assert.equal(redirected, `${basePath}#/${route}?example=1`);
            });
        }
    }
}
