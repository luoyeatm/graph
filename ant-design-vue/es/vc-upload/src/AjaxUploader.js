import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from '../../_util/vue-types';
import BaseMixin from '../../_util/BaseMixin';
import partition from 'lodash-es/partition';
import classNames from '../../_util/classNames';
import defaultRequest from './request';
import getUid from './uid';
import attrAccept from './attr-accept';
import traverseFileTree from './traverseFileTree';
import { getSlot } from '../../_util/props-util';
var upLoadPropTypes = {
  componentTag: PropTypes.string,
  // style: PropTypes.object,
  prefixCls: PropTypes.string,
  name: PropTypes.string,
  // className: PropTypes.string,
  multiple: PropTypes.looseBool,
  directory: PropTypes.looseBool,
  disabled: PropTypes.looseBool,
  accept: PropTypes.string,
  // children: PropTypes.any,
  // onStart: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  headers: PropTypes.object,
  beforeUpload: PropTypes.func,
  customRequest: PropTypes.func,
  // onProgress: PropTypes.func,
  withCredentials: PropTypes.looseBool,
  openFileDialogOnClick: PropTypes.looseBool,
  transformFile: PropTypes.func,
  method: PropTypes.string
};
var AjaxUploader = {
  inheritAttrs: false,
  name: 'ajaxUploader',
  mixins: [BaseMixin],
  props: upLoadPropTypes,
  data: function data() {
    this.reqs = {};
    return {
      uid: getUid()
    };
  },
  mounted: function mounted() {
    this._isMounted = true;
  },
  beforeUnmount: function beforeUnmount() {
    this._isMounted = false;
    this.abort();
  },
  methods: {
    onChange: function onChange(e) {
      var files = e.target.files;
      this.uploadFiles(files);
      this.reset();
    },
    onClick: function onClick() {
      var el = this.$refs.fileInputRef;

      if (!el) {
        return;
      }

      el.click();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        this.onClick();
      }
    },
    onFileDrop: function onFileDrop(e) {
      var _this = this;

      var multiple = this.$props.multiple;
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (this.directory) {
        traverseFileTree(e.dataTransfer.items, this.uploadFiles, function (_file) {
          return attrAccept(_file, _this.accept);
        });
      } else {
        var files = partition(Array.prototype.slice.call(e.dataTransfer.files), function (file) {
          return attrAccept(file, _this.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];

        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }

        this.uploadFiles(successFiles);

        if (errorFiles.length) {
          this.__emit('reject', errorFiles);
        }
      }
    },
    uploadFiles: function uploadFiles(files) {
      var _this2 = this;

      var postFiles = Array.prototype.slice.call(files);
      postFiles.map(function (file) {
        file.uid = getUid();
        return file;
      }).forEach(function (file) {
        _this2.upload(file, postFiles);
      });
    },
    upload: function upload(file, fileList) {
      var _this3 = this;

      if (!this.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }

      var before = this.beforeUpload(file, fileList);

      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);

          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            return _this3.post(processedFile);
          }

          return _this3.post(file);
        }).catch(function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }
    },
    post: function post(file) {
      var _this4 = this;

      if (!this._isMounted) {
        return;
      }

      var props = this.$props;
      var data = props.data;
      var _props$transformFile = props.transformFile,
          transformFile = _props$transformFile === void 0 ? function (originFile) {
        return originFile;
      } : _props$transformFile;
      new Promise(function (resolve) {
        var action = _this4.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }

        resolve(action);
      }).then(function (action) {
        var uid = file.uid;
        var request = _this4.customRequest || defaultRequest;
        var transform = Promise.resolve(transformFile(file)).catch(function (e) {
          console.error(e); // eslint-disable-line no-console
        });
        transform.then(function (transformedFile) {
          if (typeof data === 'function') {
            data = data(file);
          }

          var requestOption = {
            action: action,
            filename: _this4.name,
            data: data,
            file: transformedFile,
            headers: _this4.headers,
            withCredentials: _this4.withCredentials,
            method: props.method || 'post',
            onProgress: function onProgress(e) {
              _this4.__emit('progress', e, file);
            },
            onSuccess: function onSuccess(ret, xhr) {
              delete _this4.reqs[uid];

              _this4.__emit('success', ret, file, xhr);
            },
            onError: function onError(err, ret) {
              delete _this4.reqs[uid];

              _this4.__emit('error', err, ret, file);
            }
          };
          _this4.reqs[uid] = request(requestOption);

          _this4.__emit('start', file);
        });
      });
    },
    reset: function reset() {
      this.setState({
        uid: getUid()
      });
    },
    abort: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;

        if (file && file.uid) {
          uid = file.uid;
        }

        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  },
  render: function render() {
    var _classNames,
        _this5 = this;

    var $props = this.$props,
        $attrs = this.$attrs;
    var Tag = $props.componentTag,
        prefixCls = $props.prefixCls,
        disabled = $props.disabled,
        multiple = $props.multiple,
        accept = $props.accept,
        directory = $props.directory,
        openFileDialogOnClick = $props.openFileDialogOnClick;
    var className = $attrs.class,
        style = $attrs.style,
        id = $attrs.id;
    var cls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: openFileDialogOnClick ? this.onClick : function () {},
      onKeydown: openFileDialogOnClick ? this.onKeyDown : function () {},
      onDrop: this.onFileDrop,
      onDragover: this.onFileDrop
    };

    var tagProps = _extends(_extends({}, events), {
      role: 'button',
      tabindex: disabled ? null : '0',
      class: cls,
      style: style
    });

    return _createVNode(Tag, tagProps, {
      default: function _default() {
        return [_createVNode("input", {
          "id": id,
          "type": "file",
          "ref": "fileInputRef",
          "onClick": function onClick(e) {
            return e.stopPropagation();
          },
          "key": _this5.uid,
          "style": {
            display: 'none'
          },
          "accept": accept,
          "directory": directory ? 'directory' : null,
          "webkitdirectory": directory ? 'webkitdirectory' : null,
          "multiple": multiple,
          "onChange": _this5.onChange
        }, null), getSlot(_this5)];
      }
    });
  }
};
export default AjaxUploader;