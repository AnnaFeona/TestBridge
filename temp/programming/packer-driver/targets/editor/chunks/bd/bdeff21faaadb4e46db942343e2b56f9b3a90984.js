System.register(["__unresolved_0"], function (_export2, _context2) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export2("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export2("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        System.register("chunks:///_virtual/internal", [], function () {
          return {
            execute: function () {}
          };
        });

        (function (r) {
          r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal');
        })(function (mid, cid) {
          System.register(mid, [cid], function (_export, _context) {
            return {
              setters: [function (_m) {
                var _exportObj = {};

                for (var _key in _m) {
                  if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
              }],
              execute: function () {}
            };
          });
        }); // #endregion ORIGINAL CODE


        _export2("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=bdeff21faaadb4e46db942343e2b56f9b3a90984.js.map