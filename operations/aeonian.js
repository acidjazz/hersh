require('aeonian').config({
  bucket: {
    localDir: './public/',
    prefix: 'hersh-'
  },
  environments: {
    staging: 'E2SC7NXWYVMEMP',
  }
}).deploy(process.argv[2])
