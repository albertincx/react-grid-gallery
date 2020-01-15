import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

var CheckButton = function (_Component) {
  _inherits(CheckButton, _Component);

  function CheckButton(props) {
    var _this;

    _classCallCheck(this, CheckButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckButton).call(this, props));
    _this.state = {
      hover: _this.props.hover
    };
    _this.fill = _this.fill.bind(_assertThisInitialized(_this));
    _this.visibility = _this.visibility.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckButton, [{
    key: "fill",
    value: function fill() {
      if (this.props.isSelected) return this.props.selectedColor;else if (this.state.hover) return this.props.hoverColor;
      return this.props.color;
    }
  }, {
    key: "visibility",
    value: function visibility() {
      if (this.props.isSelected || this.props.isSelectable && this.props.parentHover) return 'visible';
      return 'hidden';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var circleStyle = {
        display: this.props.isSelected ? 'block' : 'none'
      };
      return React.createElement("div", {
        title: "Select",
        style: {
          visibility: this.visibility(),
          background: 'none',
          float: 'left',
          width: '36px',
          height: '36px',
          border: 'none',
          padding: '6px',
          cursor: 'pointer',
          pointerEvents: 'visible'
        },
        onClick: this.props.onClick ? function (e) {
          return _this2.props.onClick(_this2.props.index, e);
        } : null,
        onMouseOver: function onMouseOver(e) {
          return _this2.setState({
            hover: true
          });
        },
        onMouseOut: function onMouseOut(e) {
          return _this2.setState({
            hover: false
          });
        }
      }, React.createElement("svg", {
        fill: this.fill(),
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("radialGradient", {
        id: "shadow",
        cx: "38",
        cy: "95.488",
        r: "10.488",
        gradientTransform: "matrix(1 0 0 -1 -26 109)",
        gradientUnits: "userSpaceOnUse"
      }, React.createElement("stop", {
        offset: ".832",
        stopColor: "#010101"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#010101",
        stopOpacity: "0"
      })), React.createElement("circle", {
        style: circleStyle,
        opacity: ".26",
        fill: "url(#shadow)",
        cx: "12",
        cy: "13.512",
        r: "10.488"
      }), React.createElement("circle", {
        style: circleStyle,
        fill: "#FFF",
        cx: "12",
        cy: "12.2",
        r: "8.292"
      }), React.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }), React.createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      })));
    }
  }]);

  return CheckButton;
}(Component);

CheckButton.propTypes = {
  index: PropTypes.number,
  color: PropTypes.string,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  selectedColor: PropTypes.string,
  parentHover: PropTypes.bool,
  hover: PropTypes.bool,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func
};
CheckButton.defaultProps = {
  isSelectable: true,
  isSelected: false,
  parentHover: false,
  hover: false
};

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, props));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(Image, [{
    key: "tagStyle",
    value: function tagStyle() {
      if (this.props.tagStyle) return this.props.tagStyle;
      return {
        display: 'inline',
        padding: '.2em .6em .3em',
        fontSize: '75%',
        fontWeight: '600',
        lineHeight: '1',
        color: 'yellow',
        background: 'rgba(0,0,0,0.65)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '.25em'
      };
    }
  }, {
    key: "tileViewportStyle",
    value: function tileViewportStyle() {
      if (this.props.tileViewportStyle) return this.props.tileViewportStyle.call(this);
      var nanoBase64Backgorund = {};

      if (this.props.item.nano) {
        nanoBase64Backgorund = {
          background: "url(".concat(this.props.item.nano, ")"),
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        };
      }

      if (this.props.item.isSelected) return Object.assign({
        width: this.props.item.vwidth - 32,
        height: this.props.height - 32,
        margin: 16,
        overflow: 'hidden'
      }, nanoBase64Backgorund);
      return Object.assign({
        width: this.props.item.vwidth,
        height: this.props.height,
        overflow: 'hidden'
      }, nanoBase64Backgorund);
    }
  }, {
    key: "thumbnailStyle",
    value: function thumbnailStyle() {
      if (this.props.thumbnailStyle) return this.props.thumbnailStyle.call(this);
      var rotationTransformValue = undefined;

      switch (this.props.item.orientation) {
        case 3:
          rotationTransformValue = 'rotate(180deg)';
          break;

        case 6:
          rotationTransformValue = 'rotate(90deg)';
          break;

        case 8:
          rotationTransformValue = 'rotate(270deg)';
          break;

        case 2:
          rotationTransformValue = 'rotateY(180deg)';
          break;

        case 4:
          rotationTransformValue = 'rotate(180deg) rotateY(180deg)';
          break;

        case 5:
          rotationTransformValue = 'rotate(270deg) rotateY(180deg)';
          break;

        case 7:
          rotationTransformValue = 'rotate(90deg) rotateY(180deg)';
          break;
      }

      if (this.props.item.isSelected) {
        var ratio = this.props.item.scaletwidth / this.props.height;
        var height = 0;
        var width = 0;
        var viewportHeight = this.props.height - 32;
        var viewportWidth = this.props.item.vwidth - 32;

        if (this.props.item.scaletwidth > this.props.height) {
          width = this.props.item.scaletwidth - 32;
          height = Math.floor(width / ratio);
        } else {
          height = this.props.height - 32;
          width = Math.floor(height * ratio);
        }

        var marginTop = -Math.abs(Math.floor((viewportHeight - height) / 2));
        var marginLeft = -Math.abs(Math.floor((viewportWidth - width) / 2));
        return {
          cursor: 'pointer',
          width: width,
          height: height,
          marginLeft: marginLeft,
          marginTop: marginTop,
          transform: rotationTransformValue
        };
      }

      return {
        cursor: 'pointer',
        width: this.props.item.scaletwidth,
        height: this.props.height,
        marginLeft: this.props.item.marginLeft,
        marginTop: 0,
        transform: rotationTransformValue
      };
    }
  }, {
    key: "renderCheckButton",
    value: function renderCheckButton() {
      return React.createElement(CheckButton, {
        key: "Select",
        index: this.props.index,
        color: 'rgba(255, 255, 255, 0.7)',
        selectedColor: '#4285f4',
        hoverColor: 'rgba(255, 255, 255, 1)',
        isSelected: this.props.item.isSelected,
        isSelectable: this.props.isSelectable,
        onClick: this.props.isSelectable ? this.props.onSelectImage : null,
        parentHover: this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var alt = this.props.item.alt ? this.props.item.alt : '';
      var tags = typeof this.props.item.tags === 'undefined' ? React.createElement("noscript", null) : this.props.item.tags.map(function (tag) {
        return React.createElement("div", {
          title: tag.title,
          key: 'tag-' + tag.value,
          style: {
            display: 'inline-block',
            cursor: 'pointer',
            pointerEvents: 'visible',
            margin: '2px'
          }
        }, React.createElement("span", {
          style: _this2.tagStyle()
        }, tag.value));
      });
      var customOverlay = typeof this.props.item.customOverlay === 'undefined' ? React.createElement("noscript", null) : React.createElement("div", {
        className: "custom-overlay",
        key: 'custom-overlay-' + this.props.index,
        style: {
          pointerEvents: 'none',
          opacity: this.state.hover ? 1 : 0,
          position: 'absolute',
          height: '100%',
          width: '100%'
        }
      }, this.props.item.customOverlay);
      var DirItem = null;

      if (this.props.DirItem) {
        DirItem = this.props.DirItem;
      }

      var isDir = this.props.item.isDir;
      var propClick = this.props.onClick ? function (e) {
        return _this2.props.onClick.call(_this2, _this2.props.index, e);
      } : null;

      if (isDir) {
        propClick = null;
      }

      return React.createElement("div", {
        className: "tile",
        key: 'tile-' + this.props.index,
        onMouseEnter: function onMouseEnter(e) {
          return _this2.setState({
            hover: true
          });
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.setState({
            hover: false
          });
        },
        style: {
          margin: this.props.margin,
          WebkitUserSelect: 'none',
          position: 'relative',
          float: 'left',
          background: '#eee',
          padding: '0px'
        }
      }, React.createElement("div", {
        className: "tile-icon-bar",
        key: 'tile-icon-bar-' + this.props.index,
        style: {
          pointerEvents: 'none',
          opacity: 1,
          position: 'absolute',
          height: '36px',
          width: '100%'
        }
      }, this.renderCheckButton()), React.createElement("div", {
        className: "tile-bottom-bar",
        key: 'tile-bottom-bar-' + this.props.index,
        style: {
          padding: '2px',
          pointerEvents: 'none',
          position: 'absolute',
          minHeight: '0px',
          maxHeight: '160px',
          width: '100%',
          bottom: '0px',
          overflow: 'hidden'
        }
      }, tags), customOverlay, React.createElement("div", {
        className: "tile-overlay",
        key: 'tile-overlay-' + this.props.index,
        style: {
          pointerEvents: 'none',
          opacity: 1,
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: this.state.hover && !this.props.item.isSelected && this.props.isSelectable ? 'linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)' : 'none'
        }
      }), React.createElement("div", {
        className: "tile-viewport",
        style: this.tileViewportStyle(),
        key: 'tile-viewport-' + this.props.index,
        onClick: propClick
      }, !isDir ? React.createElement("img", {
        key: 'img-' + this.props.index,
        src: this.props.item.thumbnail,
        alt: alt,
        title: this.props.item.caption,
        style: this.thumbnailStyle()
      }) : DirItem ? React.createElement(DirItem, {
        item: this.props.item
      }) : null), this.props.item.thumbnailCaption && React.createElement("div", {
        className: "tile-description",
        style: {
          background: 'white',
          height: '100%',
          width: '100%',
          margin: 0,
          userSelect: 'text',
          WebkitUserSelect: 'text',
          MozUserSelect: 'text',
          overflow: 'hidden'
        }
      }, this.props.item.thumbnailCaption));
    }
  }]);

  return Image;
}(Component);

Image.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  margin: PropTypes.number,
  height: PropTypes.number,
  isSelectable: PropTypes.bool,
  onClick: PropTypes.func,
  onSelectImage: PropTypes.func,
  tileViewportStyle: PropTypes.func,
  thumbnailStyle: PropTypes.func,
  tagStyle: PropTypes.object,
  customOverlay: PropTypes.element
};
Image.defaultProps = {
  isSelectable: true,
  hover: false
};

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));
    _this.state = {
      images: _this.props.images,
      thumbnails: [],
      lightboxIsOpen: _this.props.isOpen,
      currentImage: _this.props.currentImage,
      containerWidth: 0
    };
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_this));
    _this.gotoImage = _this.gotoImage.bind(_assertThisInitialized(_this));
    _this.gotoNext = _this.gotoNext.bind(_assertThisInitialized(_this));
    _this.gotoPrevious = _this.gotoPrevious.bind(_assertThisInitialized(_this));
    _this.onClickImage = _this.onClickImage.bind(_assertThisInitialized(_this));
    _this.openLightbox = _this.openLightbox.bind(_assertThisInitialized(_this));
    _this.onSelectImage = _this.onSelectImage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onResize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(np) {
      if (this.state.images != np.images || this.props.maxRows != np.maxRows) {
        this.setState({
          images: np.images,
          thumbnails: this.renderThumbs(this._gallery.clientWidth, np.images)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this._gallery) return;

      if (this._gallery.clientWidth !== this.state.containerWidth) {
        this.onResize();
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (!this._gallery) return;
      this.setState({
        containerWidth: Math.floor(this._gallery.clientWidth),
        thumbnails: this.renderThumbs(this._gallery.clientWidth)
      });
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(index, event) {
      if (event) {
        event.preventDefault();
      }

      if (this.props.lightboxWillOpen) {
        this.props.lightboxWillOpen.call(this, index);
      }

      if (this.props.currentImageWillChange) {
        this.props.currentImageWillChange.call(this, index);
      }

      this.setState({
        currentImage: index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      if (this.props.lightboxWillClose) {
        this.props.lightboxWillClose.call(this);
      }

      if (this.props.currentImageWillChange) {
        this.props.currentImageWillChange.call(this, 0);
      }

      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: "gotoPrevious",
    value: function gotoPrevious() {
      if (this.props.currentImageWillChange) {
        this.props.currentImageWillChange.call(this, this.state.currentImage - 1);
      }

      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: "gotoNext",
    value: function gotoNext() {
      if (this.props.currentImageWillChange) {
        this.props.currentImageWillChange.call(this, this.state.currentImage + 1);
      }

      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: "onClickImage",
    value: function onClickImage() {
      if (this.state.currentImage === this.props.images.length - 1) return;
      this.gotoNext();
    }
  }, {
    key: "onSelectImage",
    value: function onSelectImage(index, event) {
      event.preventDefault();
      if (this.props.onSelectImage) this.props.onSelectImage.call(this, index, this.state.images[index]);
    }
  }, {
    key: "gotoImage",
    value: function gotoImage(index) {
      if (this.props.currentImageWillChange) {
        this.props.currentImageWillChange.call(this, index);
      }

      this.setState({
        currentImage: index
      });
    }
  }, {
    key: "getOnClickThumbnailFn",
    value: function getOnClickThumbnailFn() {
      if (!this.props.onClickThumbnail && this.props.enableLightbox) return this.openLightbox;
      if (this.props.onClickThumbnail) return this.props.onClickThumbnail;
      return null;
    }
  }, {
    key: "getOnClickLightboxThumbnailFn",
    value: function getOnClickLightboxThumbnailFn() {
      if (!this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.gotoImage;
      if (this.props.onClickLightboxThumbnail && this.props.showLightboxThumbnails) return this.props.onClickLightboxThumbnail;
      return null;
    }
  }, {
    key: "getOnClickImageFn",
    value: function getOnClickImageFn() {
      if (this.props.onClickImage) return this.props.onClickImage;
      return this.onClickImage;
    }
  }, {
    key: "getOnClickPrevFn",
    value: function getOnClickPrevFn() {
      if (this.props.onClickPrev) return this.props.onClickPrev;
      return this.gotoPrevious;
    }
  }, {
    key: "getOnClickNextFn",
    value: function getOnClickNextFn() {
      if (this.props.onClickNext) return this.props.onClickNext;
      return this.gotoNext;
    }
  }, {
    key: "calculateCutOff",
    value: function calculateCutOff(len, delta, items) {
      var cutoff = [];
      var cutsum = 0;

      for (var i in items) {
        var item = items[i];
        var fractOfLen = item.scaletwidth / len;
        cutoff[i] = Math.floor(fractOfLen * delta);
        cutsum += cutoff[i];
      }

      var stillToCutOff = delta - cutsum;

      while (stillToCutOff > 0) {
        for (i in cutoff) {
          cutoff[i]++;
          stillToCutOff--;
          if (stillToCutOff < 0) break;
        }
      }

      return cutoff;
    }
  }, {
    key: "buildImageRow",
    value: function buildImageRow(items, containerWidth) {
      var row = [];
      var len = 0;
      var imgMargin = 2 * this.props.margin;

      while (items.length > 0 && len < containerWidth) {
        var item = items.shift();
        row.push(item);
        len += item.scaletwidth + imgMargin;
      }

      var delta = len - containerWidth;

      if (row.length > 0 && delta > 0) {
        var cutoff = this.calculateCutOff(len, delta, row);

        for (var i in row) {
          var pixelsToRemove = cutoff[i];
          item = row[i];
          item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
          item.vwidth = item.scaletwidth - pixelsToRemove;
        }
      } else {
        for (var j in row) {
          item = row[j];
          item.marginLeft = 0;
          item.vwidth = item.scaletwidth;
        }
      }

      return row;
    }
  }, {
    key: "setThumbScale",
    value: function setThumbScale(item) {
      item.scaletwidth = Math.floor(this.props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs(containerWidth) {
      var images = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.images;
      if (!images) return [];
      if (containerWidth === 0) return [];
      var items = images.slice();

      for (var t in items) {
        this.setThumbScale(items[t]);
      }

      var thumbs = [];
      var rows = [];

      while (items.length > 0) {
        rows.push(this.buildImageRow(items, containerWidth));
      }

      for (var r in rows) {
        for (var i in rows[r]) {
          var item = rows[r][i];

          if (this.props.maxRows) {
            if (r < this.props.maxRows) {
              thumbs.push(item);
            }
          } else {
            thumbs.push(item);
          }
        }
      }

      return thumbs;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.state.thumbnails.map(function (item, idx) {
        return React.createElement(Image, {
          key: 'Image-' + idx + '-' + item.src,
          item: item,
          index: idx,
          DirItem: _this2.props.DirItem,
          margin: _this2.props.margin,
          height: _this2.props.rowHeight,
          isSelectable: _this2.props.enableImageSelection,
          onClick: _this2.getOnClickThumbnailFn(),
          onSelectImage: _this2.onSelectImage,
          tagStyle: _this2.props.tagStyle,
          tileViewportStyle: _this2.props.tileViewportStyle,
          thumbnailStyle: _this2.props.thumbnailStyle
        });
      });
      var resizeIframeStyles = {
        height: 0,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        borderWidth: 0,
        position: 'fixed',
        backgroundColor: 'transparent',
        width: '100%'
      };
      return React.createElement("div", {
        id: this.props.id,
        className: "ReactGridGallery",
        ref: function ref(c) {
          return _this2._gallery = c;
        }
      }, React.createElement("iframe", {
        style: resizeIframeStyles,
        ref: function ref(c) {
          return c && c.contentWindow && c.contentWindow.addEventListener('resize', _this2.onResize);
        }
      }), images, React.createElement(Lightbox, {
        images: this.props.images,
        backdropClosesModal: this.props.backdropClosesModal,
        currentImage: this.state.currentImage,
        preloadNextImage: this.props.preloadNextImage,
        customControls: this.props.customControls,
        enableKeyboardInput: this.props.enableKeyboardInput,
        imageCountSeparator: this.props.imageCountSeparator,
        isOpen: this.state.lightboxIsOpen,
        onClickImage: this.getOnClickImageFn(),
        onClickNext: this.getOnClickNextFn(),
        onClickPrev: this.getOnClickPrevFn(),
        showCloseButton: this.props.showCloseButton,
        showImageCount: this.props.showImageCount,
        onClose: this.closeLightbox,
        width: this.props.lightboxWidth,
        theme: this.props.theme,
        onClickThumbnail: this.getOnClickLightboxThumbnailFn(),
        showThumbnails: this.props.showLightboxThumbnails
      }));
    }
  }]);

  return Gallery;
}(Component);

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    nano: PropTypes.string,
    alt: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    srcset: PropTypes.array,
    caption: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })),
    thumbnailWidth: PropTypes.number.isRequired,
    thumbnailHeight: PropTypes.number.isRequired,
    isSelected: PropTypes.bool,
    thumbnailCaption: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  })).isRequired,
  id: PropTypes.string,
  enableImageSelection: PropTypes.bool,
  onSelectImage: PropTypes.func,
  rowHeight: PropTypes.number,
  maxRows: PropTypes.number,
  margin: PropTypes.number,
  onClickThumbnail: PropTypes.func,
  lightboxWillOpen: PropTypes.func,
  lightboxWillClose: PropTypes.func,
  enableLightbox: PropTypes.bool,
  backdropClosesModal: PropTypes.bool,
  currentImage: PropTypes.number,
  preloadNextImage: PropTypes.bool,
  customControls: PropTypes.arrayOf(PropTypes.node),
  currentImageWillChange: PropTypes.func,
  enableKeyboardInput: PropTypes.bool,
  imageCountSeparator: PropTypes.string,
  isOpen: PropTypes.bool,
  onClickImage: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showImageCount: PropTypes.bool,
  lightboxWidth: PropTypes.number,
  tileViewportStyle: PropTypes.func,
  thumbnailStyle: PropTypes.func,
  showLightboxThumbnails: PropTypes.bool,
  onClickLightboxThumbnail: PropTypes.func,
  tagStyle: PropTypes.object
};
Gallery.defaultProps = {
  id: 'ReactGridGallery',
  enableImageSelection: true,
  rowHeight: 180,
  margin: 2,
  enableLightbox: true,
  backdropClosesModal: false,
  currentImage: 0,
  preloadNextImage: true,
  enableKeyboardInput: true,
  imageCountSeparator: ' of ',
  isOpen: false,
  showCloseButton: true,
  showImageCount: true,
  lightboxWidth: 1024,
  showLightboxThumbnails: false
};

export default Gallery;
