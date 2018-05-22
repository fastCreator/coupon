'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            imgUrls: [],
            imageHeight: 0.387 * _wepy2.default.getSystemInfoSync().windowWidth,
            favorites: []
        }, _this.methods = {
            setissh: function setissh() {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var issh;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.request({ url: 'https://wx.firecloud.club/apis/issh' });

                                case 2:
                                    issh = _context.sent.data;

                                    _wepy2.default.setStorage({
                                        key: 'issh',
                                        data: issh
                                    });

                                case 4:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            },
            toSearch: function toSearch() {
                _wepy2.default.navigateTo({
                    url: 'search'
                });
            },
            hd: function hd(e) {
                var d = this.data.imgUrls[e.currentTarget.dataset.index].clip;
                var clip = d.title + '\n                    \u6DD8\u53E3\u4EE4:' + d.kl + '\n                    \u6D3B\u52A8\u5730\u5740\uFF1A' + d.dlj;
                (0, _util.copy)(clip, function () {
                    _wepy2.default.showModal({
                        title: '提示',
                        showCancel: false,
                        content: '\u6D3B\u52A8[' + d.title + ']\u94FE\u63A5\u590D\u5236\u6210\u529F\uFF0C\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00\u6216\u8005\u624B\u52A8\u6253\u5F00\u6DD8\u5B9D\u81EA\u52A8\u8DF3\u8F6C\uFF1B\u9047\u5230\u5EF6\u8FDF\uFF0C\u8BF7\u70B9\u51FB\u6DD8\u5B9D\u9876\u90E8\u641C\u7D22\u5373\u53EF'
                    });
                });
            },
            theme: function theme(e) {
                _wepy2.default.navigateTo({
                    url: 'them?favorites_id=' + this.data.favorites.find(function (it) {
                        return it.favorites_title === e.currentTarget.dataset.type;
                    }).favorites_id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.methods.setissh();
                                _context2.next = 3;
                                return _wepy2.default.request({ url: 'https://wx.firecloud.club/apis/imgUrls' });

                            case 3:
                                this.imgUrls = _context2.sent.data;

                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'onReady',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var d;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _util.tbk)('taobao.tbk.uatm.favorites.get', {
                                    fields: 'favorites_title,favorites_id,type',
                                    type: '-1'
                                });

                            case 2:
                                d = _context3.sent.data;

                                this.favorites = d.results.tbk_favorites;

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onReady() {
                return _ref3.apply(this, arguments);
            }

            return onReady;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImltZ1VybHMiLCJpbWFnZUhlaWdodCIsIndlcHkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwiZmF2b3JpdGVzIiwibWV0aG9kcyIsInNldGlzc2giLCJyZXF1ZXN0IiwidXJsIiwiaXNzaCIsInNldFN0b3JhZ2UiLCJrZXkiLCJ0b1NlYXJjaCIsIm5hdmlnYXRlVG8iLCJoZCIsImUiLCJkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImNsaXAiLCJ0aXRsZSIsImtsIiwiZGxqIiwic2hvd01vZGFsIiwic2hvd0NhbmNlbCIsImNvbnRlbnQiLCJ0aGVtZSIsImZpbmQiLCJpdCIsImZhdm9yaXRlc190aXRsZSIsInR5cGUiLCJmYXZvcml0ZXNfaWQiLCIkYXBwbHkiLCJmaWVsZHMiLCJyZXN1bHRzIiwidGJrX2Zhdm9yaXRlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLEksR0FBTztBQUNIQyxxQkFBUyxFQUROO0FBRUhDLHlCQUFhLFFBQVFDLGVBQUtDLGlCQUFMLEdBQXlCQyxXQUYzQztBQUdIQyx1QkFBVztBQUhSLFMsUUFpQlBDLE8sR0FBVTtBQUNBQyxtQkFEQSxxQkFDVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ0tMLGVBQUtNLE9BQUwsQ0FBYSxFQUFFQyxLQUFLLHFDQUFQLEVBQWIsQ0FETDs7QUFBQTtBQUNUQyx3Q0FEUyxpQkFDbUVYLElBRG5FOztBQUViRyxtREFBS1MsVUFBTCxDQUFnQjtBQUNaQyw2Q0FBSyxNQURPO0FBRVpiLDhDQUFNVztBQUZNLHFDQUFoQjs7QUFGYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1oQixhQVBLO0FBUU5HLG9CQVJNLHNCQVFNO0FBQ1JYLCtCQUFLWSxVQUFMLENBQWdCO0FBQ1pMLHlCQUFLO0FBRE8saUJBQWhCO0FBR0gsYUFaSztBQWFOTSxjQWJNLGNBYUZDLENBYkUsRUFhQztBQUNILG9CQUFJQyxJQUFJLEtBQUtsQixJQUFMLENBQVVDLE9BQVYsQ0FBa0JnQixFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBMUMsRUFBaURDLElBQXpEO0FBQ0Esb0JBQUlBLE9BQVVKLEVBQUVLLEtBQVosaURBQ1VMLEVBQUVNLEVBRFosNERBRVdOLEVBQUVPLEdBRmpCO0FBR0EsZ0NBQUtILElBQUwsRUFBVyxZQUFZO0FBQ25CbkIsbUNBQUt1QixTQUFMLENBQWU7QUFDWEgsK0JBQU8sSUFESTtBQUVYSSxvQ0FBWSxLQUZEO0FBR1hDLG1EQUFlVixFQUFFSyxLQUFqQjtBQUhXLHFCQUFmO0FBS0gsaUJBTkQ7QUFPSCxhQXpCSztBQTBCTk0saUJBMUJNLGlCQTBCQ1osQ0ExQkQsRUEwQkk7QUFDTmQsK0JBQUtZLFVBQUwsQ0FBZ0I7QUFDWkwseUJBQUssdUJBQXVCLEtBQUtWLElBQUwsQ0FBVU0sU0FBVixDQUFvQndCLElBQXBCLENBQXlCO0FBQUEsK0JBQU1DLEdBQUdDLGVBQUgsS0FBdUJmLEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCYSxJQUFyRDtBQUFBLHFCQUF6QixFQUFvRkM7QUFEcEcsaUJBQWhCO0FBR0g7QUE5QkssUzs7Ozs7Ozs7Ozs7QUFYTixxQ0FBSzNCLE9BQUwsQ0FBYUMsT0FBYjs7dUNBQ3NCTCxlQUFLTSxPQUFMLENBQWEsRUFBRUMsS0FBSyx3Q0FBUCxFQUFiLEM7OztBQUF0QixxQ0FBS1QsTyxrQkFBa0ZELEk7O0FBQ3ZGLHFDQUFLbUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBR2UsZUFBSSwrQkFBSixFQUFxQztBQUNoREMsNENBQVEsbUNBRHdDO0FBRWhESCwwQ0FBTTtBQUYwQyxpQ0FBckMsQzs7O0FBQVhmLGlDLGtCQUdBbEIsSTs7QUFDSixxQ0FBS00sU0FBTCxHQUFpQlksRUFBRW1CLE9BQUYsQ0FBVUMsYUFBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQjJCbkMsZUFBS29DLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgdGJrLCBjb3B5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGRhdGEgPSB7XG4gICAgICAgIGltZ1VybHM6IFtdLFxuICAgICAgICBpbWFnZUhlaWdodDogMC4zODcgKiB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGgsXG4gICAgICAgIGZhdm9yaXRlczogW11cbiAgICB9O1xuICAgIGFzeW5jIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubWV0aG9kcy5zZXRpc3NoKCk7XG4gICAgICAgIHRoaXMuaW1nVXJscyA9IChhd2FpdCB3ZXB5LnJlcXVlc3QoeyB1cmw6ICdodHRwczovL3d4LmZpcmVjbG91ZC5jbHViL2FwaXMvaW1nVXJscycgfSkpLmRhdGE7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfTtcbiAgICBhc3luYyBvblJlYWR5ICgpIHtcbiAgICAgICAgbGV0IGQgPSAoYXdhaXQgdGJrKCd0YW9iYW8udGJrLnVhdG0uZmF2b3JpdGVzLmdldCcsIHtcbiAgICAgICAgICAgIGZpZWxkczogJ2Zhdm9yaXRlc190aXRsZSxmYXZvcml0ZXNfaWQsdHlwZScsXG4gICAgICAgICAgICB0eXBlOiAnLTEnXG4gICAgICAgIH0pKS5kYXRhO1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IGQucmVzdWx0cy50YmtfZmF2b3JpdGVzO1xuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgYXN5bmMgc2V0aXNzaCAoKSB7XG4gICAgICAgICAgICBsZXQgaXNzaCA9IChhd2FpdCB3ZXB5LnJlcXVlc3QoeyB1cmw6ICdodHRwczovL3d4LmZpcmVjbG91ZC5jbHViL2FwaXMvaXNzaCcgfSkpLmRhdGE7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgIGtleTogJ2lzc2gnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlzc2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0b1NlYXJjaCAoKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJ3NlYXJjaCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoZCAoZSkge1xuICAgICAgICAgICAgbGV0IGQgPSB0aGlzLmRhdGEuaW1nVXJsc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uY2xpcDtcbiAgICAgICAgICAgIGxldCBjbGlwID0gYCR7ZC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAg5reY5Y+j5LukOiR7ZC5rbH1cbiAgICAgICAgICAgICAgICAgICAg5rS75Yqo5Zyw5Z2A77yaJHtkLmRsan1gO1xuICAgICAgICAgICAgY29weShjbGlwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg5rS75YqoWyR7ZC50aXRsZX1d6ZO+5o6l5aSN5Yi25oiQ5Yqf77yM6YCa6L+H5rWP6KeI5Zmo5omT5byA5oiW6ICF5omL5Yqo5omT5byA5reY5a6d6Ieq5Yqo6Lez6L2s77yb6YGH5Yiw5bu26L+f77yM6K+354K55Ye75reY5a6d6aG26YOo5pCc57Si5Y2z5Y+vYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoZW1lIChlKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJ3RoZW0/ZmF2b3JpdGVzX2lkPScgKyB0aGlzLmRhdGEuZmF2b3JpdGVzLmZpbmQoaXQgPT4gaXQuZmF2b3JpdGVzX3RpdGxlID09PSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlKS5mYXZvcml0ZXNfaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdfQ==