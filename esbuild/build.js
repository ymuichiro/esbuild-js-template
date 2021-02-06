require('esbuild')
  .build({
    define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
    target: 'es2015',
    platform: 'browser',
    entryPoints: ['src/app.ts'],
    outdir: 'public',
    color: true,
    bundle: true,
    minify: true,
    sourcemap: false,
  })
  .catch(error => {
    console.error(JSON.stringify(error, null, 2));
  })
  .then(event => {
    console.log('============================');
    console.log('Compile start... ', new Date().toLocaleDateString());
  });
