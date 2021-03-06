(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'lodash/includes', 'lodash/isBoolean', 'lodash/map', 'react', '../../stores/columns_store', './additional', './data_item', 'morse-react-mixins'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('lodash/includes'), require('lodash/isBoolean'), require('lodash/map'), require('react'), require('../../stores/columns_store'), require('./additional'), require('./data_item'), require('morse-react-mixins'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.includes, global.isBoolean, global.map, global.react, global.columns_store, global.additional, global.data_item, global.morseReactMixins);
    global.data_expander_item = mod.exports;
  }
})(this, function (module, exports, _includes2, _isBoolean2, _map2, _react, _columns_store, _additional, _data_item, _morseReactMixins) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _includes3 = _interopRequireDefault(_includes2);

  var _isBoolean3 = _interopRequireDefault(_isBoolean2);

  var _map3 = _interopRequireDefault(_map2);

  var _react2 = _interopRequireDefault(_react);

  var _columns_store2 = _interopRequireDefault(_columns_store);

  var _additional2 = _interopRequireDefault(_additional);

  var _data_item2 = _interopRequireDefault(_data_item);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DataExpanderItem = function (_React$Component) {
    _inherits(DataExpanderItem, _React$Component);

    function DataExpanderItem(props) {
      _classCallCheck(this, DataExpanderItem);

      var _this = _possibleConstructorReturn(this, (DataExpanderItem.__proto__ || Object.getPrototypeOf(DataExpanderItem)).call(this, props));

      _this.active = [{ active: false }];
      _this.info = ['list-group', 'collapse', { in: false }];
      _this.state = {
        info: _this.getClasses(_this.info),
        active: _this.getClasses(_this.active),
        css: 'col-md-1',
        device: 'desktop',
        selected: false,
        show_additional: false
      };
      return _this;
    }

    _createClass(DataExpanderItem, [{
      key: '_onClick',
      value: function _onClick(e) {
        e.preventDefault();
        var show = !this.state.show_additional;

        this.active = this.toggleCss(this.active);
        this.info = this.toggleCss(this.info);
        this.setState({
          info: this.getClasses(this.info),
          active: this.getClasses(this.active),
          show_additional: show
        });
      }
    }, {
      key: '_expandTest',
      value: function _expandTest() {
        var visible = (0, _map3.default)(_columns_store2.default.getShowable(), 'key');
        return this.props.data.reduce(function (p, v, k) {
          var t = (0, _isBoolean3.default)(p) ? p : false;
          return t ? t : (0, _includes3.default)(visible, k);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'tr ' + this.state.active },
          _react2.default.createElement(_data_item2.default, {
            css: this.props.css,
            data: this.props.data,
            expand: this._onClick.bind(this)
          }),
          _react2.default.createElement(_additional2.default, {
            data: this.props.data,
            active: this.state.active,
            info: this.state.info
          })
        );
      }
    }]);

    return DataExpanderItem;
  }(_react2.default.Component);

  Object.assign(DataExpanderItem.prototype, _morseReactMixins.css_mixins);
  Object.assign(DataExpanderItem.prototype, _morseReactMixins.text_mixins);

  exports.default = DataExpanderItem;
  module.exports = exports['default'];
});