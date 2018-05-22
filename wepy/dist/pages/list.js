'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _scrollView = require('./../components/scroll-view.js');

var _scrollView2 = _interopRequireDefault(_scrollView);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "scroll-view": { "bindscrolltolower": "nextPage", "xmlns:v-on": "", "scroll-y": "scroll-y", "class": "list" } }, _this.$events = { "scroll-view": { "v-on:scrolltolower": "nextPage" } }, _this.components = {
            'scroll-view': _scrollView2.default
        }, _this.data = {
            SORT: {
                popular: 'tk_total_sales_des',
                sales: 'total_sales_des',
                price: 'price_asc'
            },
            filter: {
                page_no: 1,
                page_size: 10,
                platform: 1,
                sort: 'tk_total_sales_des',
                q: '',
                has_coupon: true
            },
            list: []
        }, _this.methods = {
            nextPage: function nextPage() {
                this.filter.page_no = this.filter.page_no + 1;
                this.search();
            },
            godetils: function godetils(e) {
                var d = e.currentTarget.dataset;
                wx.navigateTo({
                    url: '../detils/index?num_iid=' + d.num_iid + '&coupon_id=' + d.coupon_id + '&coupon=' + d.coupon
                });
            },
            selectCoupon: function selectCoupon(e) {
                this.filter.has_coupon = !!e.detail.value.length;
                this.setData({
                    list: []
                });
                this.search();
            },
            toggleSort: function toggleSort(e) {
                this.setData({
                    list: []
                });
                this.filter.sort = e.currentTarget.dataset.sort;
                this.search();
            },
            parseInfo: function parseInfo(v) {
                if (v) {
                    console.log(v);
                    return v.match(/减(\d+)元/)[1];
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad(option) {
            this.data.filter.q = option.search || '123';
            this.search();
        }
    }, {
        key: 'onReady',
        value: function onReady() {}
    }, {
        key: 'search',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var that, d;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = this;

                                wx.showLoading({
                                    title: '加载中'
                                });
                                _context.next = 4;
                                return (0, _util.tbk)('taobao.tbk.sc.material.optional', that.data.filter);

                            case 4:
                                d = _context.sent.data;


                                wx.hideLoading();

                                if (!(!d.result_list.map_data || !d.result_list.map_data.length)) {
                                    _context.next = 10;
                                    break;
                                }

                                wx.showLoading({
                                    title: '暂无更多'
                                });
                                setTimeout(function () {
                                    wx.hideLoading();
                                }, 500);
                                return _context.abrupt('return', false);

                            case 10:
                                d.result_list.map_data.forEach(function (it) {
                                    if (it.coupon_info) {
                                        it.coupon = it.coupon_info.match(/减(\d+)元/)[1] + '元劵';
                                    }
                                });
                                this.list = that.list.concat(d.result_list.map_data);
                                this.$apply();

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function search() {
                return _ref2.apply(this, arguments);
            }

            return search;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzY3JvbGxWaWV3IiwiZGF0YSIsIlNPUlQiLCJwb3B1bGFyIiwic2FsZXMiLCJwcmljZSIsImZpbHRlciIsInBhZ2Vfbm8iLCJwYWdlX3NpemUiLCJwbGF0Zm9ybSIsInNvcnQiLCJxIiwiaGFzX2NvdXBvbiIsImxpc3QiLCJtZXRob2RzIiwibmV4dFBhZ2UiLCJzZWFyY2giLCJnb2RldGlscyIsImUiLCJkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJudW1faWlkIiwiY291cG9uX2lkIiwiY291cG9uIiwic2VsZWN0Q291cG9uIiwiZGV0YWlsIiwidmFsdWUiLCJsZW5ndGgiLCJzZXREYXRhIiwidG9nZ2xlU29ydCIsInBhcnNlSW5mbyIsInYiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJvcHRpb24iLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImhpZGVMb2FkaW5nIiwicmVzdWx0X2xpc3QiLCJtYXBfZGF0YSIsInNldFRpbWVvdXQiLCJmb3JFYWNoIiwiaXQiLCJjb3Vwb25faW5mbyIsImNvbmNhdCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxxQkFBb0IsVUFBckIsRUFBZ0MsY0FBYSxFQUE3QyxFQUFnRCxZQUFXLFVBQTNELEVBQXNFLFNBQVEsTUFBOUUsRUFBZixFLFFBQ1RDLE8sR0FBVSxFQUFDLGVBQWMsRUFBQyxzQkFBcUIsVUFBdEIsRUFBZixFLFFBQ1RDLFUsR0FBYTtBQUNOLDJCQUFlQztBQURULFMsUUFHVkMsSSxHQUFPO0FBQ0hDLGtCQUFN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TUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBEMkJDLGVBQUtDLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgc2Nyb2xsVmlldyBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbC12aWV3JztcbmltcG9ydCB7IHRiayB9IGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNjcm9sbC12aWV3XCI6e1wiYmluZHNjcm9sbHRvbG93ZXJcIjpcIm5leHRQYWdlXCIsXCJ4bWxuczp2LW9uXCI6XCJcIixcInNjcm9sbC15XCI6XCJzY3JvbGwteVwiLFwiY2xhc3NcIjpcImxpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wic2Nyb2xsLXZpZXdcIjp7XCJ2LW9uOnNjcm9sbHRvbG93ZXJcIjpcIm5leHRQYWdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICdzY3JvbGwtdmlldyc6IHNjcm9sbFZpZXdcbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICAgIFNPUlQ6IHtcbiAgICAgICAgICAgIHBvcHVsYXI6ICd0a190b3RhbF9zYWxlc19kZXMnLFxuICAgICAgICAgICAgc2FsZXM6ICd0b3RhbF9zYWxlc19kZXMnLFxuICAgICAgICAgICAgcHJpY2U6ICdwcmljZV9hc2MnXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgcGFnZV9ubzogMSxcbiAgICAgICAgICAgIHBhZ2Vfc2l6ZTogMTAsXG4gICAgICAgICAgICBwbGF0Zm9ybTogMSxcbiAgICAgICAgICAgIHNvcnQ6ICd0a190b3RhbF9zYWxlc19kZXMnLFxuICAgICAgICAgICAgcTogJycsXG4gICAgICAgICAgICBoYXNfY291cG9uOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3Q6IFtdXG4gICAgfTtcbiAgICBvbkxvYWQob3B0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0YS5maWx0ZXIucSA9IG9wdGlvbi5zZWFyY2ggfHwgJzEyMyc7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7fVxuXG4gICAgYXN5bmMgc2VhcmNoKCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGQgPSAoYXdhaXQgdGJrKCd0YW9iYW8udGJrLnNjLm1hdGVyaWFsLm9wdGlvbmFsJywgdGhhdC5kYXRhLmZpbHRlcikpLmRhdGE7XG5cbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgaWYgKCFkLnJlc3VsdF9saXN0Lm1hcF9kYXRhIHx8ICFkLnJlc3VsdF9saXN0Lm1hcF9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pqC5peg5pu05aSaJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGQucmVzdWx0X2xpc3QubWFwX2RhdGEuZm9yRWFjaChpdCA9PiB7XG4gICAgICAgICAgICBpZiAoaXQuY291cG9uX2luZm8pIHtcbiAgICAgICAgICAgICAgICBpdC5jb3Vwb24gPSBpdC5jb3Vwb25faW5mby5tYXRjaCgv5YePKFxcZCsp5YWDLylbMV0gKyAn5YWD5Yq1JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoYXQubGlzdC5jb25jYXQoZC5yZXN1bHRfbGlzdC5tYXBfZGF0YSk7XG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgbmV4dFBhZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlci5wYWdlX25vID0gdGhpcy5maWx0ZXIucGFnZV9ubyArIDE7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB9LFxuICAgICAgICBnb2RldGlscyhlKSB7XG4gICAgICAgICAgICBsZXQgZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBgLi4vZGV0aWxzL2luZGV4P251bV9paWQ9JHtkLm51bV9paWR9JmNvdXBvbl9pZD0ke1xuICAgICAgICAgIGQuY291cG9uX2lkXG4gICAgICAgIH0mY291cG9uPSR7ZC5jb3Vwb259YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdENvdXBvbihlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlci5oYXNfY291cG9uID0gISFlLmRldGFpbC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGxpc3Q6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZVNvcnQoZSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsaXN0OiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlci5zb3J0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc29ydDtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlSW5mbyh2KSB7XG4gICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2Lm1hdGNoKC/lh48oXFxkKynlhYMvKVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=