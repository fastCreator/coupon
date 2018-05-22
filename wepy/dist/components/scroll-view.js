'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyScroll = function (_wepy$component) {
    _inherits(MyScroll, _wepy$component);

    function MyScroll() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MyScroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyScroll.__proto__ || Object.getPrototypeOf(MyScroll)).call.apply(_ref, [this].concat(args))), _this), _this.emit = true, _this.data = {}, _this.methods = {
            scroll: function scroll(e) {
                var _this2 = this;

                var ele = e.currentTarget;
                if (ele.offsetHeight + ele.scrollTop + 2 >= ele.scrollHeight) {
                    if (this.emit === true) {
                        console.log('child');
                        this.$emit('scrollBottom', 100);
                    }
                    this.emit = false;
                    setTimeout(function () {
                        _this2.emit = true;
                    }, 200);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MyScroll, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onReady',
        value: function onReady() {
            console.log(this);
        }
    }]);

    return MyScroll;
}(_wepy2.default.component);

exports.default = MyScroll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC12aWV3LmpzIl0sIm5hbWVzIjpbIk15U2Nyb2xsIiwiZW1pdCIsImRhdGEiLCJtZXRob2RzIiwic2Nyb2xsIiwiZSIsImVsZSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJzZXRUaW1lb3V0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLEksR0FBTyxJLFFBQ1BDLEksR0FBTyxFLFFBS1BDLE8sR0FBVTtBQUNOQyxrQkFETSxrQkFDQ0MsQ0FERCxFQUNJO0FBQUE7O0FBQ04sb0JBQUlDLE1BQU1ELEVBQUVFLGFBQVo7QUFDQSxvQkFBSUQsSUFBSUUsWUFBSixHQUFtQkYsSUFBSUcsU0FBdkIsR0FBbUMsQ0FBbkMsSUFBd0NILElBQUlJLFlBQWhELEVBQThEO0FBQzFELHdCQUFJLEtBQUtULElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUNwQlUsZ0NBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsNkJBQUtDLEtBQUwsQ0FBVyxjQUFYLEVBQTJCLEdBQTNCO0FBQ0g7QUFDRCx5QkFBS1osSUFBTCxHQUFZLEtBQVo7QUFDQWEsK0JBQVcsWUFBTTtBQUNiLCtCQUFLYixJQUFMLEdBQVksSUFBWjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdIO0FBQ0o7QUFiSyxTOzs7OztpQ0FKRCxDQUFFOzs7a0NBQ0Q7QUFDTlUsb0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7Ozs7RUFOaUNHLGVBQUtDLFM7O2tCQUF0QmhCLFEiLCJmaWxlIjoic2Nyb2xsLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNjcm9sbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBlbWl0ID0gdHJ1ZTtcbiAgICBkYXRhID0ge307XG4gICAgb25Mb2FkKCkge31cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgc2Nyb2xsKGUpIHtcbiAgICAgICAgICAgIGxldCBlbGUgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBpZiAoZWxlLm9mZnNldEhlaWdodCArIGVsZS5zY3JvbGxUb3AgKyAyID49IGVsZS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbWl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGxCb3R0b20nLCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbiJdfQ==