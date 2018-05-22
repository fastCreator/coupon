'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
    _inherits(_class, _wepy$app);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.config = {
            pages: ['pages/list', 'pages/index', 'pages/search'],
            window: {
                navigationBarTextStyle: 'black',
                navigationBarTitleText: 'WeUI in WePY',
                navigationBarBackgroundColor: '#f8f8f8',
                backgroundColor: '#f8f8f8'
            },
            networkTimeout: {
                request: 10000,
                connectSocket: 10000,
                uploadFile: 10000,
                downloadFile: 10000
            }
        };

        _this.use('promisify');
        _this.use('requestfix');
        return _this;
    }

    return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsIm5ldHdvcmtUaW1lb3V0IiwicmVxdWVzdCIsImNvbm5lY3RTb2NrZXQiLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwidXNlIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1CSSxzQkFBYztBQUFBOztBQUFBOztBQUFBLGNBaEJkQSxNQWdCYyxHQWhCTDtBQUNMQyxtQkFBTyxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLGNBQTlCLENBREY7QUFFTEMsb0JBQVE7QUFDSkMsd0NBQXdCLE9BRHBCO0FBRUpDLHdDQUF3QixjQUZwQjtBQUdKQyw4Q0FBOEIsU0FIMUI7QUFJSkMsaUNBQWlCO0FBSmIsYUFGSDtBQVFMQyw0QkFBZ0I7QUFDWkMseUJBQVMsS0FERztBQUVaQywrQkFBZSxLQUZIO0FBR1pDLDRCQUFZLEtBSEE7QUFJWkMsOEJBQWM7QUFKRjtBQVJYLFNBZ0JLOztBQUVWLGNBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsY0FBS0EsR0FBTCxDQUFTLFlBQVQ7QUFIVTtBQUliOzs7RUFyQndCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIHBhZ2VzOiBbJ3BhZ2VzL2xpc3QnLCAncGFnZXMvaW5kZXgnLCAncGFnZXMvc2VhcmNoJ10sXG4gICAgICAgIHdpbmRvdzoge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZVVJIGluIFdlUFknLFxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmOGY4ZjgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjhmOCdcbiAgICAgICAgfSxcbiAgICAgICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IDEwMDAwLFxuICAgICAgICAgICAgY29ubmVjdFNvY2tldDogMTAwMDAsXG4gICAgICAgICAgICB1cGxvYWRGaWxlOiAxMDAwMCxcbiAgICAgICAgICAgIGRvd25sb2FkRmlsZTogMTAwMDBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIH1cbn1cbiJdfQ==