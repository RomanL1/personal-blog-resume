let appPromise;

module.exports = async function handler(req, res) {
  appPromise ??= import('../dist/personal-blog-resume/server/server.mjs')
    .then(({ app }) => app());

  return (await appPromise)(req, res);
};
