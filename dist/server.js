"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
const app = _express2.default.call(void 0, );

app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());

app.use(_routes2.default);

app.listen(3333, () => {
    console.log('http://localhost:3333');
});