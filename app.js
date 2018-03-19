var path = require("path");

var apos = require("apostrophe")({
  shortName: "bestevidence-site",

  bundlers: ["apostrophe-blog", "apostrophe-events"],
  modules: {
    "apostrophe-templates": { viewsFolderFallback: path.join(__dirname, "views") },
    "apostrophe-blog": {},
    "apostrophe-blog-pages": {},
    "apostrophe-blog-widgets": {},
    "apostrophe-images-widgets": {},
    "as-helpers": {},
    "link-widgets": {},
    "page-link-widgets": {},
    "messages": {},
    "messages-submit-widgets": {},
    "stories": {},
    "stories-submit-widgets": {},
    "apostrophe-attachments": {
      uploadfs: {
        backend: "s3",
        secret: process.env.AWS_SECRET,
        key: process.env.AWS_ID,
        bucket: process.env.AWS_BUCKET,
        region: "eu-west-1"
      }
    }
  }
});
