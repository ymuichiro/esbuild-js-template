const warningLog = warning => {
  warning.forEach(warn => {
    console.error('warning: ', warn.text);
    console.error('detail: ', warn.detail);
    console.error('path: ', `${warn.location.file}:${warn.location.line}:${warn.location.column}`);
    console.error(' -> ', warn.location.lineText);
  });
};
const errorLog = errors => {
  errors.forEach(err => {
    console.error('error: ', err.text);
    console.error('path: ', `${err.location.file}:${err.location.line}:${err.location.column}`);
    console.error(' -> ', err.location.lineText);
  });
};

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
    sourcemap: true,
    watch: {
      onRebuild: (error, result) => {
        console.log('----------------------------');
        if (error) {
          console.error(new Date().toLocaleString(), ' watch build failed ');
          if (error.warnings) warningLog(error.warnings);
          if (error.errors) errorLog(error.errors);
        } else {
          if (result) {
            console.log(new Date().toLocaleString(), ' watch build succeeded ');
            if (result.warnings) warningLog(result.warnings);
          }
        }
      },
    },
  })
  .catch(error => {
    console.error(JSON.stringify(error, null, 2));
  })
  .then(event => {
    console.log('============================');
    console.log('Compile start... ', new Date().toLocaleDateString());
  });
