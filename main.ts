import { createStorage } from "https://esm.sh/unstorage@1.16.1";
import fsDriver from "https://esm.sh/unstorage@1.16.1/drivers/fs-lite";
import { Tinyfeed } from "./pkg/mod.ts";

const storage = createStorage({
    driver: fsDriver({ base: "./data" }),
});

const tinyfeed = new Tinyfeed({
    title: "Smallfeed",
    feeds: [
        "https://blog.smallweb.run/feed.xml",
        "https://jvns.ca/atom.xml",
    ],
    storage,
})

export default tinyfeed;
