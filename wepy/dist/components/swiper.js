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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJNeVNjcm9sbCIsImVtaXQiLCJkYXRhIiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJlbGUiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIiRlbWl0Iiwic2V0VGltZW91dCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxJLEdBQU8sSSxRQUNQQyxJLEdBQU8sRSxRQUtQQyxPLEdBQVU7QUFDTkMsa0JBRE0sa0JBQ0NDLENBREQsRUFDSTtBQUFBOztBQUNOLG9CQUFJQyxNQUFNRCxFQUFFRSxhQUFaO0FBQ0Esb0JBQUlELElBQUlFLFlBQUosR0FBbUJGLElBQUlHLFNBQXZCLEdBQW1DLENBQW5DLElBQXdDSCxJQUFJSSxZQUFoRCxFQUE4RDtBQUMxRCx3QkFBSSxLQUFLVCxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEJVLGdDQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLDZCQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEyQixHQUEzQjtBQUNIO0FBQ0MseUJBQUtaLElBQUwsR0FBWSxLQUFaO0FBQ0FhLCtCQUFXLFlBQU07QUFDZiwrQkFBS2IsSUFBTCxHQUFZLElBQVo7QUFDSCxxQkFGQyxFQUVDLEdBRkQ7QUFHSDtBQUNKO0FBYkssUzs7Ozs7aUNBSkQsQ0FBRTs7O2tDQUNEO0FBQ05VLG9CQUFRQyxHQUFSLENBQVksSUFBWjtBQUNIOzs7O0VBTmlDRyxlQUFLQyxTOztrQkFBdEJoQixRIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U2Nyb2xsIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGVtaXQgPSB0cnVlO1xuICAgIGRhdGEgPSB7fTtcbiAgICBvbkxvYWQoKSB7fVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzY3JvbGwoZSkge1xuICAgICAgICAgICAgbGV0IGVsZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGlmIChlbGUub2Zmc2V0SGVpZ2h0ICsgZWxlLnNjcm9sbFRvcCArIDIgPj0gZWxlLnNjcm9sbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVtaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCcpO1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsQm90dG9tJywgMTAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=