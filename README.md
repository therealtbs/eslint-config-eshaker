# eslint-config-eshaker
Config for eShaker JS projects.
Extends the [Airbnb configs](https://github.com/airbnb/javascript)

###Available configs:
- `eshaker` - includes `react`, `react-a11y`, `redux-saga` and `eshaker/base`
- `eshaker/base` - includes `airbnb-base`

###Install:
```
npm i --save eslint-config-eshaker
# Install peer-deps
npm i --save eslint-plugin-{react,jsx-a11y,redux-saga}
```
###Use:
In your .eslintrc.json
```json
{
  "extends": "eshaker"
}
```
or in your package.json
```json5
{
  /* ... all the usual package.json stuff ... */
  "eslintConfig": {
    "extends": "eshaker"
  }
}
```
