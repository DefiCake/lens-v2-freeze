# Freeze reproduction

`yarn start --reset-cache`

Then pick android build by typing `a`

Then go to `App.tsx` and check that commenting and uncommenting the LensConfig line `environment` (using `development` or `mainnet`) freezes the build
