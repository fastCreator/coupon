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
            value: '',
            tags: ['连衣裙', '女鞋', '两件套', 'T恤', '零食'],
            history: []
        }, _this.methods = {
            selectTag: function selectTag(e) {
                var it = e.target.dataset.item;
                this.search(it);
            },
            setHistory: function setHistory() {
                var history = _wepy2.default.getStorageSync('historySearch');
                this.setData({ history: history.split(',') });
            },
            clearHistory: function clearHistory() {
                _wepy2.default.setStorageSync('historySearch', '');
                this.setHistory();
            },
            inputValue: function inputValue(e) {
                this.setData({ value: e.detail.value });
            },
            search: function search(v) {
                if (v.type) {
                    v = this.data.value;
                }
                if (!v) return false;
                var history = _wepy2.default.getStorageSync('historySearch');
                if (history) {
                    var s = history.split(',');
                    if (!~s.indexOf(v)) {
                        _wepy2.default.setStorageSync('historySearch', history + ',' + v);
                    }
                } else {
                    _wepy2.default.setStorageSync('historySearch', v);
                }
                this.setHistory();
                _wepy2.default.navigateTo({
                    url: 'list?search=' + v
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onReady',
        value: function onReady() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJ2YWx1ZSIsInRhZ3MiLCJoaXN0b3J5IiwibWV0aG9kcyIsInNlbGVjdFRhZyIsImUiLCJpdCIsInRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwic2VhcmNoIiwic2V0SGlzdG9yeSIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsInNldERhdGEiLCJzcGxpdCIsImNsZWFySGlzdG9yeSIsInNldFN0b3JhZ2VTeW5jIiwiaW5wdXRWYWx1ZSIsImRldGFpbCIsInYiLCJ0eXBlIiwicyIsImluZGV4T2YiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLGtCQUFNLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLENBRkg7QUFHSEMscUJBQVM7QUFITixTLFFBT1BDLE8sR0FBVTtBQUNOQyx1QkFBVyxtQkFBU0MsQ0FBVCxFQUFZO0FBQ25CLG9CQUFJQyxLQUFLRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLElBQTFCO0FBQ0EscUJBQUtDLE1BQUwsQ0FBWUosRUFBWjtBQUNILGFBSks7QUFLTkssd0JBQVksc0JBQVc7QUFDbkIsb0JBQUlULFVBQVVVLGVBQUtDLGNBQUwsQ0FBb0IsZUFBcEIsQ0FBZDtBQUNBLHFCQUFLQyxPQUFMLENBQWEsRUFBRVosU0FBU0EsUUFBUWEsS0FBUixDQUFjLEdBQWQsQ0FBWCxFQUFiO0FBQ0gsYUFSSztBQVNOQywwQkFBYyx3QkFBVztBQUNyQkosK0JBQUtLLGNBQUwsQ0FBb0IsZUFBcEIsRUFBcUMsRUFBckM7QUFDQSxxQkFBS04sVUFBTDtBQUNILGFBWks7QUFhTk8sd0JBQVksb0JBQVNiLENBQVQsRUFBWTtBQUNwQixxQkFBS1MsT0FBTCxDQUFhLEVBQUVkLE9BQU9LLEVBQUVjLE1BQUYsQ0FBU25CLEtBQWxCLEVBQWI7QUFDSCxhQWZLO0FBZ0JOVSxvQkFBUSxnQkFBU1UsQ0FBVCxFQUFZO0FBQ2hCLG9CQUFJQSxFQUFFQyxJQUFOLEVBQVk7QUFDUkQsd0JBQUksS0FBS3JCLElBQUwsQ0FBVUMsS0FBZDtBQUNIO0FBQ0Qsb0JBQUksQ0FBQ29CLENBQUwsRUFBUSxPQUFPLEtBQVA7QUFDUixvQkFBSWxCLFVBQVVVLGVBQUtDLGNBQUwsQ0FBb0IsZUFBcEIsQ0FBZDtBQUNBLG9CQUFJWCxPQUFKLEVBQWE7QUFDVCx3QkFBSW9CLElBQUlwQixRQUFRYSxLQUFSLENBQWMsR0FBZCxDQUFSO0FBQ0Esd0JBQUksQ0FBQyxDQUFDTyxFQUFFQyxPQUFGLENBQVVILENBQVYsQ0FBTixFQUFvQjtBQUNoQlIsdUNBQUtLLGNBQUwsQ0FBb0IsZUFBcEIsRUFBcUNmLFVBQVUsR0FBVixHQUFnQmtCLENBQXJEO0FBQ0g7QUFDSixpQkFMRCxNQUtPO0FBQ0hSLG1DQUFLSyxjQUFMLENBQW9CLGVBQXBCLEVBQXFDRyxDQUFyQztBQUNIO0FBQ0QscUJBQUtULFVBQUw7QUFDQUMsK0JBQUtZLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssaUJBQWlCTDtBQURWLGlCQUFoQjtBQUdIO0FBbENLLFM7Ozs7O2lDQUZELENBQUU7OztrQ0FDRCxDQUFFOzs7O0VBUG1CUixlQUFLYyxJOztrQkFBbkI1QixLIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBkYXRhID0ge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHRhZ3M6IFsn6L+e6KGj6KOZJywgJ+Wls+meiycsICfkuKTku7blpZcnLCAnVOaBpCcsICfpm7bpo58nXSxcbiAgICAgICAgaGlzdG9yeTogW11cbiAgICB9O1xuICAgIG9uTG9hZCgpIHt9XG4gICAgb25SZWFkeSgpIHt9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgc2VsZWN0VGFnOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBsZXQgaXQgPSBlLnRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaChpdCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEhpc3Rvcnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdoaXN0b3J5U2VhcmNoJyk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBoaXN0b3J5OiBoaXN0b3J5LnNwbGl0KCcsJykgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFySGlzdG9yeTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdoaXN0b3J5U2VhcmNoJywgJycpO1xuICAgICAgICAgICAgdGhpcy5zZXRIaXN0b3J5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0VmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHZhbHVlOiBlLmRldGFpbC52YWx1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodi50eXBlKSB7XG4gICAgICAgICAgICAgICAgdiA9IHRoaXMuZGF0YS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdoaXN0b3J5U2VhcmNoJyk7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIGxldCBzID0gaGlzdG9yeS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGlmICghfnMuaW5kZXhPZih2KSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdoaXN0b3J5U2VhcmNoJywgaGlzdG9yeSArICcsJyArIHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnaGlzdG9yeVNlYXJjaCcsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRIaXN0b3J5KCk7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJ2xpc3Q/c2VhcmNoPScgKyB2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=